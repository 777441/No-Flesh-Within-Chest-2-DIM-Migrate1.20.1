// priority: 500

RegistryOrgan('kubejs:illithids')
    .addScore('chestcavity:health', -0.5)
    .addScore('chestcavity:nerves', 1.75)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IllithidsKeyActive(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    let particle = Utils.particleOptions(`dust 1 0 0 1`)
    let ray = player.rayTrace(32, false)
    if (ray.entity && ray.entity.isLiving()) {
        ray.entity.potionEffects.add('goety:wild_rage', ray.entity.maxHealth > 100 ? 20 * 10 : 20 * 60)
        player.addItemCooldown('kubejs:illithids', 20 * 60)
        event.level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:illithids')
        .addOnlyStrategy('key_active', IllithidsKeyActive)
)
