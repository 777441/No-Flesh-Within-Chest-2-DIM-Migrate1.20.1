// priority: 800
// 旧版 mob_effect/vampiric.js 迁移
function vampiricEntityHurtByPlayer(event, data) {
    if (!event.source.player.hasEffect('kubejs:vampiric')) return
    let damage = event.amount;
    let amplifier = event.source.player.getEffect('kubejs:vampiric').getAmplifier();
    let vampiricRate = 0.2 + Math.min(amplifier * 0.2, 0.8);
    event.source.player.heal(Math.floor(vampiricRate * damage));
}
