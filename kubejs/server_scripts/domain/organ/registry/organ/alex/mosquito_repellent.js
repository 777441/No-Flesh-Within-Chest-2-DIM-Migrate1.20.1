// priority: 500
// Alex Mobs — mosquito_repellent bear_only 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/player_bear.js:62-66
// RegistryOrgan 在 alex/alex_has_text.js 注册分数；本文件只注册承伤策略。

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function MosquitoRepellentEntityBeHurt(customData, event, organItem, organIndex, slotType) {
    if (event.source && event.source.actual && event.source.actual.type == 'alexsmobs:crimson_mosquito') {
        event.source.actual.kill()
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:mosquito_repellent')
        .addOnlyStrategy('entity_be_hurt', MosquitoRepellentEntityBeHurt)
)
