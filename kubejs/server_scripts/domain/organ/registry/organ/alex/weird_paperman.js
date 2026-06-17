// priority: 500
// Alex Mobs — weird_paperman bear_only 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/player_bear.js:95-106
// RegistryOrgan 在 alex/alex_has_text.js 注册分数；本文件只注册承伤策略。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function WeirdPapermanEntityBeHurt(customData, event, organItem, organIndex, slotType) {
    const player = event.entity
    if (!player) return
    // Rhino 不支持 ?. 可选链语法，用传统空值检查替代
    try {
        var lichdom = player.nbt && player.nbt.ForgeCaps && player.nbt.ForgeCaps['goety:lichdom'] && player.nbt.ForgeCaps['goety:lichdom'].lichdom
    } catch (e) {}
    if (lichdom == 1) return

    const oldAirSupply = player.getAirSupply()
    if (oldAirSupply > 0) {
        const curAirSupply = Math.max(oldAirSupply - event.amount * 50, 0)
        const curAmount = Math.max(event.amount - oldAirSupply / 50, 0)
        player.setAirSupply(curAirSupply)
        event.amount = curAmount
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:weird_paperman')
        .addOnlyStrategy('entity_be_hurt', WeirdPapermanEntityBeHurt)
)
