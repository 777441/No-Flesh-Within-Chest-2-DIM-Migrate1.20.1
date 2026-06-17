// priority: 500
// Alex Mobs — soul_vulture_feather damage_only 行为
// 旧版参考：旧版 organ_register.js:1777-1786；server_scripts_disabled_legacy/organ.disabled/player_damage.js:301-310
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：目标身上每个负面效果使本次伤害 +10%。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SoulVultureFeatherEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const target = event.entity
    if (!target || !target.potionEffects) return

    let harmfulEffectCount = 0
    target.potionEffects.active.forEach(effectInstance => {
        if (effectInstance.effect.CC_IsHarmful()) {
            harmfulEffectCount = harmfulEffectCount + 1
        }
    })
    event.amount = event.amount * (1 + harmfulEffectCount * 0.1)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:soul_vulture_feather')
        .addOnlyStrategy('entity_do_damage', SoulVultureFeatherEntityDoDamage)
)
