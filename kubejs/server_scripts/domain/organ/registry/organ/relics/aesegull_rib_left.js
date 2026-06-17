// priority: 500
RegistryOrgan('kubejs:aesegull_rib_left')
    .addScore('chestcavity:defense', 1.75)
    .setCanSpawn(true)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function AesegullRibLeftChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const cc = event.entity.getChestCavityInstance()
    const invTypeData = cc.getInventoryTypeData()
    const slotDefinition = invTypeData.getSlotDefinition(organIndex)
    if (!slotDefinition) return
    const relativePosition = slotDefinition.getRelativePosition()
    const oppositeSlot = invTypeData.getRelativeSlotDefinition(-relativePosition.getX(), relativePosition.getY())
    if (!oppositeSlot) return
    const oppositeItem = cc.inventory.getStackInSlot(oppositeSlot.getId())
    if (!oppositeItem || oppositeItem.id != 'kubejs:aesegull_rib_right') return
    customData.armorToughness.addAttributeModifier(3, 'addition', 'base')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:aesegull_rib_left')
        .addStrategy('chest_cavity_update', AesegullRibLeftChestCavityUpdate)
)
