// priority: 500
// 巨型器官 — 高分数 + active 行为（2x2 同器官块检查）

RegistryOrgan('kubejs:huge_lung')
    .addScore('chestcavity:breath_recovery', 2.5)
    .addScore('chestcavity:breath_capacity', 2.5)
    .addScore('chestcavity:endurance', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_muscle')
    .addScore('chestcavity:strength', 2.5)
    .addScore('chestcavity:speed', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_heart')
    .addScore('chestcavity:health', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_intestine')
    .addScore('chestcavity:nutrition', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_rib')
    .addScore('chestcavity:defense', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_spine')
    .addScore('chestcavity:defense', 1.25)
    .addScore('chestcavity:nerves', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_spleen')
    .addScore('chestcavity:metabolism', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_stomach')
    .addScore('chestcavity:digestion', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_kidney')
    .addScore('chestcavity:filtration', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_liver')
    .addScore('chestcavity:detoxification', 2.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:huge_appendix')
    .addScore('chestcavity:luck', 2.5)
    .setCanSpawn(true)

/**
 * 巨型器官通用策略工厂
 * 检查 2x2 同器官块，若未形成则扣减最大生命值
 * @param {number} healthPenalty 未形成 2x2 时的生命值扣减
 */
function CreateHugeChestCavityUpdate(healthPenalty) {
    return function(customData, event, organItem, organIndex, slotType) {
        const player = event.entity
        if (!player.isPlayer()) return
        const posMap = getPlayerChestCavityPosMap(player)
        const cc = player.getChestCavityInstance()
        if (!cc) return
        const invTypeData = cc.getInventoryTypeData()
        const slotDefinition = invTypeData.getSlotDefinition(organIndex)
        if (!slotDefinition) return

        // 构造虚拟 organ 对象供 checkBox22OrganSame 使用
        const organ = {
            id: String(organItem.id),
            Slot: slotDefinition.getId(),
            getInt: function(key) { return this.Slot }
        }

        if (checkBox22OrganSame(posMap, organ)) return
        customData.maxHealth.addAttributeModifier(healthPenalty, 'addition', 'base')
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_lung')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_muscle')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_heart')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-10))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_intestine')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_rib')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_spine')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_spleen')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_stomach')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_kidney')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_liver')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:huge_appendix')
        .addStrategy('chest_cavity_update', CreateHugeChestCavityUpdate(-5))
)
