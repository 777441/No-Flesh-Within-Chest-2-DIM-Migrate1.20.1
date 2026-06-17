// priority: 500
// 旧版 champion/player_damage.js 迁移 — 精英怪遭受伤害
function championEntityHurtByPlayer(event, data) {
    let entity = event.entity
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')
    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in championPlayerDamageStrategies) championPlayerDamageStrategies[typeName](event, data)
    });
}

const championPlayerDamageStrategies = {
    'low_frequency': function (event, data) { event.entity.invulnerableTime = 100 },
    'purity': function (event, data) {
        let entity = event.entity
        entity.potionEffects.active.forEach(ctx => {
            if (ctx.effect.CC_IsHarmful()) entity.removeEffect(ctx.effect)
        })
    },
    'unbending': function (event, data) {
        let entity = event.entity
        event.amount = event.amount * Math.max(entity.getHealth() / entity.getMaxHealth(), 0.1)
    },
    'consecration': function (event, data) {
        let entity = event.entity
        if (!(entity.isOnFire() || entity.isInLava())) event.amount = event.amount * 0.1
    },
    'fate': function (event, data) {
        let entity = event.entity
        if ((event.source.getType() == 'player') && (entity.getHealth() - event.amount <= 0) && (Math.random() < 0.5)) {
            event.amount = 0; entity.setHealth(Math.ceil(entity.getMaxHealth() * 0.2))
        }
    },
    'parry': function (event, data) {
        if ((event.source.getType() == 'arrow') && (Math.random() < 0.5)) event.amount = 0
    },
};
