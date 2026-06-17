// priority: 500
// 旧版 ritual/ritual_event.js 迁移
SummoningRituals.complete(event => {
    if (!event.player) return;
    if (ritualsCompleteStrategies[event.recipe.getId()]) {
        ritualsCompleteStrategies[event.recipe.getId()](event)
    }
});

SummoningRituals.start(event => {
    if (!event.player) return;
    if (ritualsStartStrategies[event.recipe.getId()]) {
        ritualsStartStrategies[event.recipe.getId()](event)
    }
});

const ritualsCompleteStrategies = {
    'kubejs:god_bless_summon': function (event) {
        let bossEntity = event.level.createEntity(randomGet(worldOfBossTypeList))
        bossEntity.setPosition(event.pos.x, event.pos.y, event.pos.z)
        if (bossEntity.isAlive()) {
            bossEntity.setGlowing(true)
            bossEntity.modifyAttribute('minecraft:generic.max_health', 'godBlessSummonHealthBoost', 1, 'multiply_total')
            bossEntity.modifyAttribute('minecraft:generic.attack_damage', 'godBlessSummonAttackBoost', 0.5, 'multiply_total')
            bossEntity.heal(bossEntity.maxHealth)
            bossEntity.potionEffects.add('kubejs:glimpse_of_god', 20 * 3600, 0, false, false)
            bossEntity.spawn()
        }
    }
};

const ritualsStartStrategies = {};
