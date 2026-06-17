// priority: 500

RegistryOrgan('kubejs:diamond_bottle')
    .addScore('chestcavity:breath_recovery', -0.75)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.BlockBrokenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DiamondBottleBlockBroken(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    let count = 1
    if (player.persistentData.contains(resourceCount)) {
        count = player.persistentData.getInt(resourceCount) + count
    }
    if (Math.random() < 0.5) {
        updateResourceCount(player, count)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:diamond_bottle')
        .addStrategy('block_broken', DiamondBottleBlockBroken)
)
