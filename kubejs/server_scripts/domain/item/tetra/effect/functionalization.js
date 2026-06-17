// priority: 500
/**
 * kubejs:functionalization - 官能化
 * 攻击时概率触发胸腔器官的 damage_only 策略
 * 触发概率 = level * 2%
 */
NativeEvents.onEvent($LivingHurtEvent, /** @param {Internal.LivingHurtEvent} event */ event => {
    /**@type {Internal.LivingEntity} */
    const sourceEntity = event.source.actual
    const targetEntity = event.entity
    if (!sourceEntity || !sourceEntity.isLiving()) return
    if (!sourceEntity.isPlayer()) return
    let heldItem = sourceEntity.mainHandItem
    /**@type {Internal.ModularItem} */
    let modularItem = heldItem.getItem()
    if (!TetraJSUtils.isModularItem(modularItem)) return
    let effectLevel = modularItem.getEffectLevel(heldItem, 'kubejs:functionalization')
    let effectEfficiency = modularItem.getEffectEfficiency(heldItem, 'kubejs:functionalization')
    if (effectLevel <= 0) return

    // 触发概率 = level * 2%
    if (Math.random() * 100 >= effectLevel * 2) return

    // 触发胸腔器官的 damage_only 策略
    // 通过重新执行 entity_do_damage 事件来触发 damage_only 器官
    let customData = {}
    OrganEntityDoDamage(event, customData)
})
