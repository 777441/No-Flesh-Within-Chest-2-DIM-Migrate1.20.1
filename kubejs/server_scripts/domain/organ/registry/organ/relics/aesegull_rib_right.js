// priority: 500
RegistryOrgan('kubejs:aesegull_rib_right')
    .addScore('chestcavity:defense', 1.75)
    .setCanSpawn(true)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function AesegullRibRightChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const cc = event.entity.getChestCavityInstance()
    const invTypeData = cc.getInventoryTypeData()
    const slotDefinition = invTypeData.getSlotDefinition(organIndex)
    if (!slotDefinition) return
    const relativePosition = slotDefinition.getRelativePosition()
    const oppositeSlot = invTypeData.getRelativeSlotDefinition(-relativePosition.getX(), relativePosition.getY())
    if (!oppositeSlot) return
    const oppositeItem = cc.inventory.getStackInSlot(oppositeSlot.getId())
    if (!oppositeItem || oppositeItem.id != 'kubejs:aesegull_rib_left') return
    customData.armor.addAttributeModifier(3, 'addition', 'base')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:aesegull_rib_right')
        .addStrategy('chest_cavity_update', AesegullRibRightChestCavityUpdate)
)
