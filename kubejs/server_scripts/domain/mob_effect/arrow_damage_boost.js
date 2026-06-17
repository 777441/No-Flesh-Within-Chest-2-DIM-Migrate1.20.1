// priority: 800
// 旧版 mob_effect/arrow_damage_boost.js 迁移
function arrowDamageBoostEntityHurtByPlayer(event, data) {
    if (event.source.getType() != 'arrow' || !event.source.player.hasEffect('kubejs:arrow_damage_boost')) return
    let effect = event.source.player.getEffect('kubejs:arrow_damage_boost')
    event.amount = event.amount * (1.2 + effect.getAmplifier() * 0.2)
}
