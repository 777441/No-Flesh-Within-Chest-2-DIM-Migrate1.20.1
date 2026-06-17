// priority: 1000
// 器官数量计数 — 从 old 版 organ_count.js / player_tick.js 迁移
// 用于 fish_in_warp 等器官策略

/**
 * 获取玩家真实器官数量（排除 warp 标签的伪器官）
 * @param {Internal.ServerPlayer} player
 * @returns {Number}
 */
function getOrganCount(player) {
    let organCount = 0
    let typeMap = getPlayerChestCavityTypeMap(player)
    typeMap.forEach((organList, type) => {
        if (type != 'kubejs:warp') {
            organCount += organList.length
        }
    })
    return organCount
}
