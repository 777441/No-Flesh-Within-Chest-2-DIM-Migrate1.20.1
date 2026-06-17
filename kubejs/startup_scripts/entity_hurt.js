// priority: 1000
/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 *
 * 注意：新架构使用 domain/organ/stream.js 的 OrganEntityDoDamage/OrganEntityBeHurt pipeline，
 *       旧版 event_stream.js 全局函数已弃用。此处只保留兼容性 guard 结构，
 *       实际器官策略已通过 OrganStrategyModel 注册到新 pipeline。
 */
// ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
//     if (event.source.player) {
//         global.LivingHurtByPlayer(event);
//     }
//     if (event.entity.isPlayer()) {
//         global.LivingHurtByOthers(event);
//     }
// })


/**
 * 使用ForgeEvent监听LivingDamageEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
// ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {
//     if (event.entity.isPlayer()) {
//         global.LivingDamageByOthers(event);
//     }
// })