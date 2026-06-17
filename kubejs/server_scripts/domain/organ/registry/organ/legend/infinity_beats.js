// priority: 500

RegistryOrgan('kubejs:infinity_beats')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:defense', -2)
    .addScore('chestcavity:breath_recovery', -2)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function InfinityBeatsEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    let player = event.source.player
    let attriMap = getPlayerAttributeMap(player)
    if (!player.hasItemInSlot('mainhand') && !player.hasItemInSlot('offhand')) {
        let value = 4
        if (attriMap.has(global.TEMP_ATTACK_UP.name)) {
            value = value + attriMap.get(global.TEMP_ATTACK_UP.name)
        }
        attriMap.set(global.TEMP_ATTACK_UP.name, value)
        player.modifyAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name, value, global.TEMP_ATTACK_UP.operation)
        setPlayerAttributeMap(player, attriMap)
        customData.thornsDamage = customData.thornsDamage + value
    } else {
        player.removeAttribute(global.TEMP_ATTACK_UP.key, global.TEMP_ATTACK_UP.name)
        attriMap.set(global.TEMP_ATTACK_UP.name, 0)
        setPlayerAttributeMap(player, attriMap)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:infinity_beats')
        .addOnlyStrategy('entity_do_damage', InfinityBeatsEntityDoDamage)
)
