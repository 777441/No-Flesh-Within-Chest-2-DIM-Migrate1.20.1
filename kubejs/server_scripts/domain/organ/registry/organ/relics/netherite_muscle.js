// priority: 500
RegistryOrgan('kubejs:netherite_muscle')
    .addScore('kubejs:extreme_strength', 2.5)
    .addScore('chestcavity:digestion', -0.5)
    .addScore('chestcavity:nutrition', -0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function NetheriteMuscleEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const target = event.entity
    const sourceEntity = event.source.actual
    if (!target || !target.isAlive()) return

    const damageSource = target.damageSources().magic()
    const entityList = GetLivingWithinRadiusVec3d(target.level, target.position(), 3, (level, entity) => {
        return !entity.isPlayer() && !entity.equals(target) && !entity.equals(sourceEntity)
    })

    entityList.forEach(entity => {
        entity.attack(damageSource, event.amount)
    })
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:netherite_muscle')
        .addOnlyStrategy('entity_do_damage', NetheriteMuscleEntityDoDamage)
)
