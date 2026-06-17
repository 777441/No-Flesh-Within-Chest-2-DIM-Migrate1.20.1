// priority: 500

RegistryOrgan('kubejs:doppelganger')
    .addScore('chestcavity:health', -1)
    .addScore('chestcavity:breath_recovery', 1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DoppelgangerEntityBeHurt(customData, event, organItem, organIndex, slotType) {
    let player = event.entity
    if (event.amount < player.getHealth()) {
        return
    }
    let typeMap = getPlayerChestCavityTypeMap(player)
    if (typeMap.has('kubejs:legends')) {
        let amount = typeMap.get('kubejs:legends').length
        if (Math.random() < Math.min(0.25 + 0.1 * amount, 0.8)) {
            player.potionEffects.add('minecraft:absorption', 40, 2)
        }
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:doppelganger')
        .addOnlyStrategy('entity_be_hurt', DoppelgangerEntityBeHurt)
)
