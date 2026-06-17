// priority: 500
// 旧版 common/entity_hurt.js 迁移 — 伤害处理函数定义
/**
 * 造成伤害
 * @param {Internal.LivingHurtEvent} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function commonEntityHurtByPlayer(event, data) {

}

/**
 * 受到伤害
 * @param {Internal.LivingHurtEvent} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function highPriorityPlayerHurtByOthers(event, data) {
    if (event.source.getType() == 'heartstop') {
        return false
    }
    return true
}
