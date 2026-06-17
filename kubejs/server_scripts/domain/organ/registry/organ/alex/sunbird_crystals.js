// priority: 500
// Alex Mobs — sunbird_crystals key_active + damage_only 行为
// 旧版参考：旧版 organ_register.js:1693；server_scripts_disabled_legacy/organ.disabled/key_bind.js:236-243；player_damage.js:271-277
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SunbirdCrystalsKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    player.potionEffects.add('alexsmobs:sunbird_blessing', 20 * 90, 0, false, false)
    if (player.hasEffect('alexsmobs:sunbird_curse')) {
        player.removeEffect('alexsmobs:sunbird_curse')
    }
    player.addItemCooldown(organItem, 20 * 90)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SunbirdCrystalsEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const target = event.entity
    if (!target || !target.isUndead()) return
    target.setSecondsOnFire(10)
    target.potionEffects.add('goety:flammable', 20 * 10, 1)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:sunbird_crystals')
        .addOnlyStrategy('key_active', SunbirdCrystalsKeyActive)
        .addOnlyStrategy('entity_do_damage', SunbirdCrystalsEntityDoDamage)
)
