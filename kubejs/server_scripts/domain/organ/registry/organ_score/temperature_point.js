// priority: 500
const BurningPointUUID = UUID.fromString('A1F0B2C3-D4E5-6789-ABCD-EF0123456789')
const BurningPointIdentifier = 'kubejsBurnPointScore'
const FreezingPointUUID = UUID.fromString('B2F0C3D4-E5F6-789A-BCDE-F01234567890')
const FreezingPointIdentifier = 'kubejsFreezingPointScore'

/**
 * @param {Internal.UpdateOrganScoreJS} event
 */
function BurningPointOrganScore(event) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    const organScoreValue = event.chestCavity.getOrganScore('chestcavity:burning_point')
    const attributeInstance = entity.getAttribute('cold_sweat:burning_point')
    if (!attributeInstance) return
    attributeInstance.removeModifier(BurningPointUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            BurningPointUUID,
            BurningPointIdentifier,
            organScoreValue * 25,
            $Operation.ADDITION)
    )
}

/**
 * @param {Internal.UpdateOrganScoreJS} event
 */
function FreezingPointOrganScore(event) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    const organScoreValue = event.chestCavity.getOrganScore('chestcavity:freezing_point')
    const attributeInstance = entity.getAttribute('cold_sweat:freezing_point')
    if (!attributeInstance) return
    attributeInstance.removeModifier(FreezingPointUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            FreezingPointUUID,
            FreezingPointIdentifier,
            organScoreValue * -25,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('chestcavity:burning_point', BurningPointOrganScore)
RegistryOrganScoreAttribute('chestcavity:freezing_point', FreezingPointOrganScore)
