// priority: 100
/**
 * 造成伤害（未过护甲结算）节点，适合用于结算造成伤害效果
 */
NativeEvents.onEvent($LivingHurtEvent, /** @param {Internal.LivingHurtEvent} event */ event => {
    if (!event.source.actual) return

    if (event.source.is($DamageTypes.THORNS)) return

    let customData = {
        thornsDamage: 0
    }
    OrganEntityDoDamage(event, customData)
    // champion 精英怪遭伤策略
    if (event.source && event.source.player) {
        championEntityHurtByPlayer(event, customData)
    }
    // mob_effect 模块 — 玩家造成伤害前（LivingHurtEvent）
    if (event.source && event.source.player) {
        burningHeartEntityHurtByPlayer(event, customData)
        arrowDamageBoostEntityHurtByPlayer(event, customData)
        executedEntityHurtByPlayer(event, customData)
        vampiricEntityHurtByPlayer(event, customData)
        pardonOfGodEntityHurtByPlayer(event, customData)
        vulnerableEntityHurt(event, customData)
        overloadEntityHurtByPlayer(event, customData)
        organCharmEntityHurtByPlayer(event, customData)
    }
    FinalEntityDoDamage(event, customData)
    if (customData.thornsDamage > 0 && event.entity) {
        let level = event.entity.level
        event.source.actual.attack(level.damageSources().thorns(event.entity), customData.thornsDamage)
    }
})

/**
 * 实际受伤（过护甲结算）节点，适合用于结算受伤效果
 */
NativeEvents.onEvent($LivingDamageEvent, /** @param {Internal.LivingDamageEvent} event */ event => {
    const entity = event.entity

    if (!entity) return

    if (event.source.is($DamageTypes.THORNS)) return
    
    let customData = {
        thornsDamage: 0
    }
    WitnessCuriosEntityBeHurt(event, customData)
    OrganEntityBeHurt(event, customData)
    // mob_effect 模块 — 玩家受到伤害伤判时（LivingDamageEvent — 过护甲结算后）
    if (event.entity && event.entity.isPlayer()) {
        sweetDreamPlayerHurtByOthers(event, customData)
        curiosPlayerHurtByOthers(event, customData)
        organCharmPlayerHurtByOthers(event, customData)
    }
    if (customData.thornsDamage > 0 && event.source.actual) {
        let level = event.entity.level
        event.source.actual.attack(level.damageSources().thorns(event.entity), customData.thornsDamage)
    }
})

/**
 * 玩家受到伤害（护甲计算前）节点 — LivingHurtEvent
 * 旧版 event_stream.js LivingHurtByOthers 迁移
 */
NativeEvents.onEvent($LivingHurtEvent, /** @param {Internal.LivingHurtEvent} event */ event => {
    const entity = event.entity
    if (!entity || !entity.isPlayer()) return
    if (event.source.is($DamageTypes.THORNS)) return

    let customData = {
        thornsDamage: 0
    }

    // champion 精英怪造成伤害策略
    if (event.source && event.source.actual) {
        championPlayerHurtByOthers(event, customData)
    }

    // mob_effect 模块 — 玩家受到伤害（护甲计算前）
    overloadEntityHurtByOthers(event, customData)
    iceEntityHurtByOthers(event, customData)
    dragonPowerPlayerHurtByOthers(event, customData)

    // 通用受到伤害效果
    vulnerableEntityHurt(event, customData)
    organCharmPlayerHurtByOthers(event, customData)

    if (customData.returnDamage != 0 && event.source.actual) {
        event.source.actual.attack(event.source.actual.damageSources().generic(), customData.returnDamage)
    }
})


/**
 * 箱子战利品事件
 * 统一处理箱子战利品刷新规则，优先进行战利品的规则标准化，而后执行器官等行为对战利品的修改
 */
LootJS.modifiers(context => {
    context.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            // StandardizeChestLoot(event)
            OrganChestLootHandle(event)
        })
})