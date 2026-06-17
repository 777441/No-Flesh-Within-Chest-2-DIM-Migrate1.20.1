// priority: 800
// 旧版 mob_effect/vulnerable.js 迁移
function vulnerableEntityHurt(event, data) {
    let entity = event.entity;
    if (entity.hasEffect('kubejs:vulnerable')) {
        let amplifier = entity.getEffect('kubejs:vulnerable').getAmplifier();
        event.amount = event.amount * (amplifier * 0.1 + 1.1)
    }
}
