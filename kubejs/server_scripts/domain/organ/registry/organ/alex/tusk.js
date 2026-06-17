// priority: 500
// Alex Mobs — tusk damage_only 行为
// 旧版参考：旧版 organ_register.js:1741-1751；server_scripts_disabled_legacy/organ.disabled/player_damage.js:285-300
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：玩家空手造成伤害时累加 `criticalPunch`，达到阈值后按旧版公式放大伤害并清零。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function TuskEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const player = event.source.player
    if (!player) return
    if (player.hasItemInSlot('mainhand') || player.hasItemInSlot('offhand')) return

    let criticalPunchCount = player.persistentData.getInt(criticalPunch) + 1
    if (criticalPunchCount >= criticalPunchMaxCount) {
        const amplifier = 1.5 + (criticalPunchCount - criticalPunchMaxCount) * 0.05
        event.amount = event.amount * amplifier
        criticalPunchCount = 0
        player.level.playSound(null, player.getX(), player.getY(), player.getZ(), 'block.amethyst_block.break', player.getSoundSource(), 0.5, Math.max(amplifier * 0.2 + 0.1, 5))
    }
    player.persistentData.putInt(criticalPunch, criticalPunchCount)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:tusk')
        .addOnlyStrategy('entity_do_damage', TuskEntityDoDamage)
)
