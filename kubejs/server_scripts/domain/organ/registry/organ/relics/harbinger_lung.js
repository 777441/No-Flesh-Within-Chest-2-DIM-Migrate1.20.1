// priority: 500
RegistryOrgan('kubejs:harbinger_lung')
    .addScore('chestcavity:breath_capacity', 1)
    .addScore('chestcavity:breath_recovery', 1)
    .setCanSpawn(true)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.LivingEntityDeathEventJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function HarbingerLungEntityKill(customData, event, organItem, organIndex, slotType) {
    const target = event.entity
    if (!target.isOnFire()) return
    /**@type {Internal.LivingEntity} */
    const killer = event.source.actual
    let fireTicksRemain = target.getRemainingFireTicks()
    if (fireTicksRemain <= 0) return
    killer.heal(Math.floor(fireTicksRemain / 20))
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function HarbingerLungEntityBeHurt(customData, event, organItem, organIndex, slotType) {
    let damage = event.amount
    let cost = Math.floor(damage / 2)
    if (cost <= 0) return
    if (organItem.getDamageValue() + cost > organItem.getMaxDamage()) return
    event.amount = damage / 2
    organItem.setDamageValue(organItem.getDamageValue() + cost)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:harbinger_lung')
        .addOnlyStrategy('entity_kill', HarbingerLungEntityKill)
        .addOnlyStrategy('entity_be_hurt', HarbingerLungEntityBeHurt)
)