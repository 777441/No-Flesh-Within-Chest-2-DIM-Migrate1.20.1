// priority: 1000

/**
 * ========================================
 * 胸腔缓存管理器
 * 从旧架构搬运，适配新架构 OrganStrategyModel
 * ========================================
 */

const playerChestCavityHashMap = new Map();
const playerChestCavityPosMap = new Map();
const playerChestCavityItemMap = new Map();
const playerChestCavityTypeMap = new Map();

const fourDirectionList = ['up', 'down', 'left', 'right']
const eightDirectionList = ['up', 'down', 'left', 'right', 'rightUp', 'rightDown', 'leftUp', 'leftDown']
const rightUp22DirectionList = ['rightUp', 'up', 'right']
const leftUp22DirectionList = ['leftUp', 'up', 'left']
const rightDown22DirectionList = ['rightDown', 'down', 'right']
const leftDown22DirectionList = ['leftDown', 'down', 'left']
const box22DirectionList = [rightUp22DirectionList, leftUp22DirectionList, rightDown22DirectionList, leftDown22DirectionList]

/**
 * 方向偏移计算（胸腔 3x9 网格）
 */
function lookPos(direction, pos) {
    switch (direction) {
        case 'up': return (pos - 9 >= 0) ? (pos - 9) : -1
        case 'down': return (pos + 9 < 27) ? (pos + 9) : -1
        case 'left': return (pos % 9 - 1 >= 0) ? (pos - 1) : -1
        case 'right': return (pos % 9 + 1 < 9) ? (pos + 1) : -1
        case 'rightUp': return (pos % 9 + 1 < 9 && pos - 9 >= 0) ? (pos - 8) : -1
        case 'rightDown': return (pos % 9 + 1 < 9 && pos + 9 < 27) ? (pos + 10) : -1
        case 'leftUp': return (pos % 9 - 1 >= 0 && pos - 9 >= 0) ? (pos - 10) : -1
        case 'leftDown': return (pos % 9 - 1 >= 0 && pos + 9 < 27) ? (pos + 8) : -1
        default: return -1
    }
}

function getOppoPos(pos) {
    return 18 * Math.floor(pos / 9) - pos + 8
}

/**
 * 初始化/刷新玩家胸腔缓存
 */
function initChestCavityIntoMap(player, removeFlag) {
    let cc = player.getChestCavityInstance()
    if (!cc || !cc.inventory) return
    let chestInventory = cc.inventory.tags
    if (!chestInventory) return
    let newHash = chestInventory.hashCode()
    let uuid = String(player.getUuid())
    if (playerChestCavityHashMap.has(uuid)) {
        let oldHash = playerChestCavityHashMap.get(uuid)
        if (oldHash == newHash) return
    }
    let chestInventoryPosMap = new Map()
    let chestInventoryItemMap = new Map()
    let chestInventoryTypeMap = new Map()

    for (let i = 0; i < chestInventory.length; i++) {
        let organ = chestInventory[i]
        chestInventoryPosMap.set(organ.getInt('Slot'), organ)
        let itemId = String(organ.getString('id'))
        if (chestInventoryItemMap.has(itemId)) {
            chestInventoryItemMap.get(itemId).push(organ)
        } else {
            chestInventoryItemMap.set(itemId, [organ])
        }
        let tagList = Item.of(itemId).getTags().toArray()
        for (let j = 0; j < tagList.length; j++) {
            let tag = tagList[j].location()
            if (tag.getNamespace() != 'kubejs') continue
            tag = String(tag)
            if (chestInventoryTypeMap.has(tag)) {
                chestInventoryTypeMap.get(tag).push(organ)
            } else {
                chestInventoryTypeMap.set(tag, [organ])
            }
        }
    }
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap)
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap)
    playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap)
    playerChestCavityHashMap.set(uuid, newHash)
    if (removeFlag) {
        player.persistentData.putInt('kubejs:organ_active', 0)
    }
}

function getPlayerChestCavityPosMap(player) {
    let uuid = String(player.getUuid())
    if (playerChestCavityPosMap.has(uuid)) {
        return playerChestCavityPosMap.get(uuid)
    }
    initChestCavityIntoMap(player, true)
    return playerChestCavityPosMap.get(uuid) ?? new Map()
}

function getPlayerChestCavityItemMap(player) {
    let uuid = String(player.getUuid())
    if (playerChestCavityItemMap.has(uuid)) {
        return playerChestCavityItemMap.get(uuid)
    }
    initChestCavityIntoMap(player, true)
    return playerChestCavityItemMap.get(uuid) ?? new Map()
}

function getPlayerChestCavityTypeMap(player) {
    let uuid = String(player.getUuid())
    if (playerChestCavityTypeMap.has(uuid)) {
        return playerChestCavityTypeMap.get(uuid)
    }
    initChestCavityIntoMap(player, true)
    return playerChestCavityTypeMap.get(uuid) ?? new Map()
}

function checkPlayerHasChestCavityMap(player) {
    return playerChestCavityHashMap.has(String(player.getUuid()))
}

global.getPlayerChestCavityItemMap = player => {
    return getPlayerChestCavityItemMap(player)
}

/**
 * 检查 2x2 相同器官块
 * 用于 huge 系列器官的主动效果条件判断
 */
function checkBox22OrganSame(posMap, organ) {
    let pos = organ.getInt('Slot')
    let itemId = organ.id
    for (let i = 0; i < box22DirectionList.length; i++) {
        let directionList = box22DirectionList[i]
        let flag = true
        for (let j = 0; j < directionList.length; j++) {
            let lookPosResult = lookPos(directionList[j], pos)
            if (lookPosResult == -1) { flag = false; break }
            if (!posMap.has(lookPosResult)) { flag = false; break }
            if (posMap.get(lookPosResult).id != itemId) { flag = false; break }
        }
        if (flag) { return true }
    }
    return false
}

/**
 * 对玩家应用属性映射加法
 */
function attributeMapValueAddition(attributeMap, key, value) {
    if (attributeMap.has(key)) {
        attributeMap.set(key, attributeMap.get(key) + value)
    } else {
        attributeMap.set(key, value)
    }
}
