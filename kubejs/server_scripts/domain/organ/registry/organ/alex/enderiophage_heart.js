// priority: 500
// Alex Mobs — enderiophage_heart key_active 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/key_bind.js:244-253
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function EnderiophageHeartKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    const level = event.level
    let ray = player.rayTrace(32, false)
    if (!ray.entity || !ray.entity.isLiving()) return
    ray.entity.potionEffects.add('alexsmobs:ender_flu', 20 * 5, 0, false, false)
    let particle = Utils.particleOptions('dust 1 0 1 1')
    level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
    player.addItemCooldown(organItem, 20 * 45)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:enderiophage_heart')
        .addOnlyStrategy('key_active', EnderiophageHeartKeyActive)
)
