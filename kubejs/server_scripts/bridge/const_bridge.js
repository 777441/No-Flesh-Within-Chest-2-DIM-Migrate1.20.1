// priority: 5000
/**
 * 全局常量与工具函数桥接
 * 从旧版 constdef.js / screen_bar.js / common.js / active_effect.js 迁移
 * 新架构独立文件引用这些符号，但在新目录中未定义
 */

// ======== 持久化键名 ========
const resourceCount = 'resourceCount'
const resourceCountMax = 'resourceCountMax'
const defaultResourceMax = 100
const warpCount = 'warpCount'
const warpCountMax = 'warpCountMax'
const defaultWarpMax = 100
const organActive = 'organActive'
const criticalPunch = 'criticalPunch'
const criticalPunchMaxCount = 10

// ======== 资源点函数 ========
/**
 * 更新资源值
 * @param {Internal.ServerPlayer} player
 * @param {Number} count
 */
function updateResourceCount(player, count) {
    let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    if (count > maxCount) count = maxCount
    if (count < 0) count = 0
    player.persistentData.putInt(resourceCount, count)
}

/**
 * 更新资源值上限
 * @param {Internal.ServerPlayer} player
 * @param {Number} maxCount
 */
function updateResourceMaxCount(player, maxCount) {
    let count = player.persistentData.getInt(resourceCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(resourceCount, count)
    }
    player.persistentData.putInt(resourceCountMax, maxCount)
}

/**
 * 更新扭曲值
 * @param {Internal.ServerPlayer} player
 * @param {Number} count
 */
function updateWarpCount(player, count) {
    let maxCount = player.persistentData.getInt(warpCountMax) ?? defaultWarpMax
    if (count > maxCount) count = maxCount
    if (count < 0) count = 0
    player.persistentData.putInt(warpCount, count)
}

/**
 * 更新扭曲值上限
 * @param {Internal.ServerPlayer} player
 * @param {Number} maxCount
 */
function updateWarpMaxCount(player, maxCount) {
    let count = player.persistentData.getInt(warpCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(warpCount, count)
    }
    player.persistentData.putInt(warpCountMax, maxCount)
}

// ======== 工具函数 ========
/**
 * 检测玩家是否在火中
 * @param {Internal.ServerPlayer} player
 * @returns {Boolean}
 */
function isPlayerOnFire(player) {
    let typeMap = getPlayerChestCavityTypeMap(player)
    return typeMap.has('kubejs:on_fire_check') || player.isOnFire()
}

/**
 * 革命蒸汽机效果
 * @param {Internal.ServerPlayer} player
 */
function revolSteamEngine(player) {
    let count = player.persistentData.getInt(resourceCount)
    if (player.hasEffect('kubejs:burning_heart')) {
        let effect = player.getEffect('kubejs:burning_heart')
        player.removeEffect('kubejs:burning_heart')
        player.potionEffects.add('kubejs:flaring_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else if (player.hasEffect('kubejs:flaring_heart')) {
        let effect = player.getEffect('kubejs:flaring_heart')
        player.removeEffect('kubejs:flaring_heart')
        player.potionEffects.add('kubejs:burning_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else {
        updateResourceCount(player, count + 25)
    }
}

/**
 * 获取某个半径内的生物
 * @param {Internal.Level} level
 * @param {Vec3} pos
 * @param {Number} radius
 * @returns {Array<Internal.LivingEntity>}
 */
function getLivingWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(pos) <= radius) {
            entityList.push(entity)
        }
    })
    return entityList
}
