// priority: 999
// 旧版 event_stream.js 迁移 — 事件流总线

/**
 * 玩家造成伤害总线 (LivingHurtEvent — 护甲计算前)
 */
global.LivingHurtByPlayer = event => {
    let player = event.source.player
    if (!player) return;
    let data = new EntityHurtCustomModel()
    organEntityHurtByPlayer(event, data)
    burningHeartEntityHurtByPlayer(event, data)
    arrowDamageBoostEntityHurtByPlayer(event, data)
    executedEntityHurtByPlayer(event, data)
    vampiricEntityHurtByPlayer(event, data)
    pardonOfGodEntityHurtByPlayer(event, data)
    vulnerableEntityHurt(event, data)
    organCharmEntityHurtByPlayer(event, data)
    championEntityHurtByPlayer(event, data)
    overloadEntityHurtByPlayer(event, data)
    if (data.returnDamage != 0) {
        player.attack(player.damageSources().generic(), data.returnDamage)
    }
}

/**
 * 玩家受到伤害总线 (LivingDamageEvent — 伤判)
 */
global.LivingDamageByOthers = event => {
    let data = new EntityHurtCustomModel()
    if (!highPriorityPlayerHurtByOthers(event, data)) return
    organPlayerHurtByOthers(event, data)
    sweetDreamPlayerHurtByOthers(event, data)
    curiosPlayerHurtByOthers(event, data)
    if (data.returnDamage != 0 && event.source.actual) {
        event.source.actual.attack(event.source.actual.damageSources().generic(), data.returnDamage)
    }
}

/**
 * 玩家受到伤害总线 (LivingHurtEvent — 实际伤害结算)
 */
global.LivingHurtByOthers = event => {
    let data = new EntityHurtCustomModel()
    if (!highPriorityPlayerHurtByOthers(event, data)) return
    vulnerableEntityHurt(event, data)
    organCharmPlayerHurtByOthers(event, data)
    overloadEntityHurtByOthers(event, data)
    iceEntityHurtByOthers(event, data)
    dragonPowerPlayerHurtByOthers(event, data)
    championPlayerHurtByOthers(event, data)
}
