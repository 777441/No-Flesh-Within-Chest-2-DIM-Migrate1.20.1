// priority: 500
// Alex Mobs — whale_lung active_only 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/active_effect.js:486-490
// RegistryOrgan 在 alex/alex_behavior.js 注册基础分数。
//
// 旧版 active_only 语义：胸腔处于激活状态时，将当前 breath_capacity 分数乘以 1.5。
// 当前新架构没有恢复旧 active_effect 全局事件；这里复用 chest_cavity_update，
// 只在 organActive == 1 时修改 organScores，避免新建重复事件。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function WhaleLungChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity || !entity.isPlayer()) return
    if (!entity.persistentData.contains(organActive) || entity.persistentData.getInt(organActive) != 1) return

    const chestCavity = event.chestCavity || entity.getChestCavityInstance()
    if (!chestCavity) return

    const breathCapacityKey = new ResourceLocation('chestcavity', 'breath_capacity')
    const breathCapacity = chestCavity.organScores.getOrDefault(breathCapacityKey, 0) * 1.5
    chestCavity.organScores.put(breathCapacityKey, new $Float(breathCapacity))
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:whale_lung')
        .addOnlyStrategy('chest_cavity_update', WhaleLungChestCavityUpdate)
)
