// priority: 500
// Alex Mobs — mantis_shrimp_fist player_tick + damage_only 关联行为
// 旧版参考：旧版 organ_register.js:1730-1739（tag: kubejs:player_tick）
//          server_scripts_disabled_legacy/organ.disabled/player_tick.js:41-49
//          server_scripts_disabled_legacy/organ.disabled/player_damage.js:285-300
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：每 60 tick 给玩家 persistentData 中的 `criticalPunch` 累计 +1，上限 50。
// 累计值由 player_damage 中的 mantis_shrimp_fist 暴击逻辑消费（Task 4 处理）。
//
// 实施说明：
// - 新架构 entity_tick 已在入口（domain/organ/event/entity_tick.js）每 20 tick 调用一次，
//   因此判定 `age % 60 == 0` 仍能 1:1 还原旧版触发节奏。
// - 旧版 tag 是 `kubejs:player_tick`（非唯一），多个实例同时存在时各自累加；
//   新架构使用 addStrategy（非 only）保持相同行为，addOnlyStrategy 会丢失多实例叠加。
// - persistentData key 复用全局常量 `criticalPunch`（bridge/const_bridge.js:16）。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function MantisShrimpFistEntityTick(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity || !entity.isPlayer()) return
    if (entity.age % 60 != 0) return
    const current = entity.persistentData.getInt(criticalPunch)
    if (current >= 50) return
    entity.persistentData.putInt(criticalPunch, current + 1)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function MantisShrimpFistEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    if (!player) return
    if (player.hasItemInSlot('mainhand') || player.hasItemInSlot('offhand')) return

    let criticalPunchCount = player.persistentData.getInt(criticalPunch) + 1
    if (criticalPunchCount >= criticalPunchMaxCount) {
        const amplifier = 1.5 + (criticalPunchCount - criticalPunchMaxCount) * 0.05
        event.amount = event.amount * amplifier
        criticalPunchCount = 0
        player.level.playSound(null, player.getX(), player.getY(), player.getZ(), 'block.amethyst_block.break', player.getSoundSource(), 0.5, Math.max(amplifier * 0.2 + 0.1, 5))
    }
    player.persistentData.putInt(criticalPunch, criticalPunchCount)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:mantis_shrimp_fist')
        .addStrategy('entity_tick', MantisShrimpFistEntityTick)
        .addOnlyStrategy('entity_do_damage', MantisShrimpFistEntityDoDamage)
)
