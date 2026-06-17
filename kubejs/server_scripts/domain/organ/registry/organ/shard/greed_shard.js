// priority: 500

RegistryOrgan('kubejs:greed_shard')
    .addScore('chestcavity:luck', 5)
    .addScore('chestcavity:knockback_resistant', -2.5)
    .addScore('chestcavity:impact_resistant', -2.5)
    .addScore('chestcavity:fire_resistant', -1.5)
    .addScore('chestcavity:burning_point', -3)
    .addScore('chestcavity:freezing_point', 3)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LootContextJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function GreedShardEntityLoot(customData, event, organItem, organIndex, slotType) {
    event.addLoot('lightmanscurrency:coin_iron')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:greed_shard')
        .addOnlyStrategy('entity_loot', GreedShardEntityLoot)
)
