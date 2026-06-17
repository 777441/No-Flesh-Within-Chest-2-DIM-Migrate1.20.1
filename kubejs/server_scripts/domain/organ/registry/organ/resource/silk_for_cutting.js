// priority: 500

RegistryOrgan('kubejs:silk_for_cutting')
    .addScore('chestcavity:knockback_resistant', -0.5)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.BlockBrokenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SilkForCuttingBlockBroken(customData, event, organItem, organIndex, slotType) {
    if (!event.block.item.hasTag('forge:glass')) {
        return
    }
    event.block.popItem(event.block.getItem())
    event.block.set('minecraft:air')
    event.cancel()
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:silk_for_cutting')
        .addOnlyStrategy('block_broken', SilkForCuttingBlockBroken)
)
