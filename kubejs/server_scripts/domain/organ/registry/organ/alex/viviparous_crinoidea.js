// priority: 500
// Alex Mobs — viviparous_crinoidea key_active 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/key_bind.js:254-278
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：按下主动技能键后，将 chestCavity 当前所有 organScore 随机洗牌、并各自 +3，持续 30s 后由 containerChanged
// 触发一次重新评估（chest_cavity_update）使分数恢复正常。
// 注意：在新架构下 organScores 在每次 chest_cavity_update 时会从器官项重新累加，所以这里直接 setOrganScore
// 仅作为 30s 内的临时叠加值，30s 后调用 containerChanged 让架构重新评估恢复。

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function ViviparousCrinoideaKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    const server = event.server
    const chestCavity = player.chestCavityInstance

    const scoreKeys = []
    const scoreValues = []
    chestCavity.organScores.forEach((key, value) => {
        scoreKeys.push(key)
        scoreValues.push(value)
    })
    scoreValues.sort(() => 0.5 - Math.random())

    for (let i = 0; i < scoreKeys.length; i++) {
        chestCavity.setOrganScore(scoreKeys[i], scoreValues[i] + 3)
    }

    server.scheduleInTicks(20 * 30, () => {
        if (!player) return
        try {
            chestCavity.containerChanged(chestCavity.inventory)
        } catch (e) { /* chest cavity instance gone, ignore */ }
    })

    player.addItemCooldown(organItem, 20 * 60)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:viviparous_crinoidea')
        .addOnlyStrategy('key_active', ViviparousCrinoideaKeyActive)
)
