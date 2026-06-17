// priority: 500
// Alex Mobs — egg_of_straddler player_tick 行为
// 旧版参考：旧版 organ_register.js:1766-1775（tag: kubejs:player_tick）
//          server_scripts_disabled_legacy/organ.disabled/player_tick.js:50-85
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：每秒（entity_tick 上层 20 tick 节流）随机 5% 概率，在玩家头顶生成 1 只
//       alexsmobs:stradpole，向 16 格半径内最近的非 stradpole 生物射出，30 秒后销毁。
//
// 实施说明：
// - 新架构 entity_tick 入口已每 20 tick 调用，`Math.random() > 0.05` 直接对应“每秒 5%”。
// - 旧版用 `addStrategy`（非唯一）；同时持有多枚此器官时按数量倍率触发，新代码保持一致。
// - 防御：实体未生成成功（target/level/createEntity 失败）时直接退出，避免 NPE 中断 tick。
// - server.scheduleInTicks 回调中再次确认 stradpole 仍存活后再 remove，规避对象已被回收的二次 NPE。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function EggOfStraddlerEntityTick(customData, event, organItem, organIndex, slotType) {
    if (Math.random() > 0.05) return
    const entity = event.entity
    if (!entity || !entity.isPlayer()) return
    const level = entity.level
    if (!level) return

    const radius = 16
    const playerPos = new Vec3(entity.x, entity.y, entity.z)
    const area = AABB.of(
        entity.x - radius, entity.y - radius, entity.z - radius,
        entity.x + radius, entity.y + radius, entity.z + radius
    )
    const entityList = level.getEntitiesWithin(area)
    let nearDistance = radius
    let targetEntity = null
    entityList.forEach(other => {
        if (!other || !other.position()) return
        if (!other.isLiving()) return
        if (other.type == 'alexsmobs:stradpole') return
        const distance = other.position().distanceTo(playerPos)
        if (distance < nearDistance && distance > 2) {
            targetEntity = other
            nearDistance = distance
        }
    })
    if (!targetEntity) return

    const stradpole = level.createEntity('alexsmobs:stradpole')
    if (!stradpole) return
    stradpole.setPosition(entity.x, entity.y + 1, entity.z)

    // 与 nearDistance 保持同口径：用 Vec3.distanceTo（旧版用 player.distanceToEntity，
    // 在不同 KubeJS 版本上不一定可用，这里改为更保守的 position().distanceTo）。
    const distance = targetEntity.position().distanceTo(playerPos)
    const amplifier = distance * (0.9 + 0.6 * Math.random()) * 0.05
    stradpole.addDeltaMovement(new Vec3(
        amplifier * (targetEntity.x - entity.x),
        amplifier * (targetEntity.y - entity.y),
        amplifier * (targetEntity.z - entity.z)
    ))
    stradpole.spawn()

    const server = entity.server
    if (!server) return
    server.scheduleInTicks(20 * 30, ctx => {
        try {
            if (stradpole && !stradpole.isRemoved()) {
                stradpole.remove('discarded')
            }
        } catch (e) { /* stradpole already gone, ignore */ }
    })
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:egg_of_straddler')
        .addStrategy('entity_tick', EggOfStraddlerEntityTick)
)
