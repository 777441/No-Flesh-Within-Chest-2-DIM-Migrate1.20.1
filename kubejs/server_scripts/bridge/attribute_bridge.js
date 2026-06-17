// priority: 1000
/**
 * 玩家属性缓存映射表 — 从旧版 active_effect.js 迁移
 * 供 infinity_beats.js 等器官策略使用
 */
const playerAttributeMap = new Map()

/**
 * 获取玩家属性表
 * @param {Internal.ServerPlayer} player
 * @returns {Map}
 */
function getPlayerAttributeMap(player) {
    let uuid = String(player.getUuid())
    if (playerAttributeMap.has(uuid)) {
        return playerAttributeMap.get(uuid)
    }
    return new Map()
}

/**
 * 设置玩家属性表
 * @param {Internal.ServerPlayer} player
 * @param {Map} attriMap
 */
function setPlayerAttributeMap(player, attriMap) {
    let uuid = String(player.getUuid())
    playerAttributeMap.set(uuid, attriMap)
}
