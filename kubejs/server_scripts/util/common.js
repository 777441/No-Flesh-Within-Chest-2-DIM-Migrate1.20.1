// priority: 3001
/**
 * 从数组中随机获取一个元素
 * 如果数组为空或未定义，则返回 null
 * @param {any[]} array 
 * @returns {any}
 */
function RandomGet(list) {
    if (!list || list.length == 0) return null
    let index = Math.floor(Math.random() * list.length)
    return list[index]
}

/**
 * 对给定的数值进行四舍五入操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */
function RoundFix(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n)
}


/**
 * 对给定的数值进行下取整操作，并保留指定的小数位数
 * @param {number} value 
 * @param {number} n 
 * @returns {number}
 */
function FloorFix(value, n) {
    return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * 向下取整并且保证大于0
 * @param {number} value 
 * @returns {number}
 */
function FloorAboveZero(value) {
    return Math.max(Math.floor(value), 0)
}

/**
 * 洗牌算法
 * @param {any[]} a 
 * @returns {any[]}
 */
function Shuffle(arr) {
    var length = arr.length,
        temp,
        random
    while (0 != length) {
        random = Math.floor(Math.random() * length)
        length--
        // swap
        temp = arr[length]
        arr[length] = arr[random]
        arr[random] = temp
    }
    return arr
}

/**
 * 数组交集
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]}
 */
function Intersect(arr1, arr2) {
    return arr1.filter(function (value) {
        return arr2.indexOf(value) > -1
    })
}


/**
 * 非重取出
 * @param {any[]} arr
 * @param {number} count
 * @returns {any[]}
 */
function RandomGetN(arr, count) {
    let arrCopy = arr.slice()
    if (count >= arrCopy.length) {
        let concatTimes = count / arrCopy.length
        for (let i = 0; i < concatTimes; i++) {
            arrCopy.concat(arr)
        }
    }
    Shuffle(arrCopy)
    return arrCopy.slice(0, count)
}


/**
 * 幸运重roll
 * @param {number} luck 
 * @returns 
 */

function RandomWithLuck(luck, luckThreshold) {
    let randomList = []
    if (luck > 0) {
        for (let i = 0; i < luck / luckThreshold; i++) {
            randomList.push(Math.random())
        }
        if (luck % luckThreshold > 0 && luck % luckThreshold > Math.random() * luckThreshold) {
            randomList.push(Math.random())
        }
    } else {
        randomList.push(Math.random())
    }
    return Math.max.apply(null, randomList)
}


function RandomWithPlayerLuck(player) {
    let luckDeity = 10
    let luck = player.luck
    if (player.hasEffect('kubejs:luck_deity')) {
        luckDeity = Math.max(9 - player.getEffect('kubejs:luck_deity').getAmplifier(), 2)
    }
    return RandomWithLuck(luck, luckDeity)
}



function UnionArry(arr1, arr2) {
    return arr1.concat(arr2.filter(function (v) { return !(arr1.indexOf(v) > -1) }))
}

function AddIfNotExist(arr, item) {
    if (arr.indexOf(item) == -1) {
        arr.push(item)
    }
}

/**
 * @param {Vec3i} vec3i 
 * @returns {BlockPos}
 */
function ConvertVec3i2BlockPos(vec3i) {
    return new BlockPos(vec3i.x, vec3i.y, vec3i.z)
}

/**
 * @param {vec3d} vec3d 
 * @returns {BlockPos}
 */
function ConvertVec3d2BlockPos(vec3d) {
    return new BlockPos(vec3d.x(), vec3d.y(), vec3d.z())
}

/**
 * @param {BlockPos} blockPos 
 * @returns {Vec3d}
 */
function ConvertBlockPos2Vec3d(blockPos) {
    return new Vec3d(blockPos.x, blockPos.y, blockPos.z)
}


/**
 * 
 * @param {number} num 
 * @returns {number}
 */
function Int2Integer(num) {
    return $Integer.valueOf(JavaMath.toIntExact(num))
}


/**
 * @param {any[]} array 
 * @param {Number} chunkSize 
 * @returns {any[][]}
 */
function SliceChunkArray(array, chunkSize) {
    let chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
}

/**
 * 
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function Clamp(num, min, max) {
    return Math.min(Math.max(num, min), max)
}

/**
 * 生成一个服从标准正态分布 N(0,1) 的随机数
 * @returns {number} 标准正态分布随机数
 */
function StandardNormalRandom() {
    let u = 0, v = 0
    while (u == 0) u = Math.random() // 避免 u = 0，因为 ln(0) 无定义
    while (v == 0) v = Math.random() // v 可为零，但 cos/sin 没问题，此处为对称处理
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * JavaMath.PI * v)
}

/**
 * 生成服从正态分布 N(mean, sigma^2) 的随机数
 * @param {number} mean    均值 μ
 * @param {number} sigma   标准差 σ
 * @returns {number} 正态分布随机数
 */
function NormalRandom(mean, sigma) {
    return mean + sigma * StandardNormalRandom()
}


/**
 * 
 * @param {Internal.Vec3d} vec3d 
 * @returns {Internal.Vec3d}
 */
function Vec3dNormalize(vec3d) {
    let i = Math.sqrt(vec3d.x() * vec3d.x() + vec3d.y() * vec3d.y() + vec3d.z() * vec3d.z())
    return i < 1.0E-4 ? Vec3d.ZERO : new Vec3d(vec3d.x() / i, vec3d.y() / i, vec3d.z() / i)
}

// === 旧版 utils/common.js 补遗 ===
function getLivingWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(pos) <= radius) entityList.push(entity)
    })
    return entityList
}

function isPlayerOnFire(player) {
    let typeMap = getPlayerChestCavityTypeMap(player)
    return typeMap.has('kubejs:on_fire_check') || player.isOnFire()
}

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

function getRelativeRotation(direction) {
    switch (direction) {
        case Direction.DOWN || Direction.UP || Direction.EAST: return 'none'
        case Direction.NORTH: return 'counterclockwise_90'
        case Direction.WEST: return 'clockwise_180'
        case Direction.SOUTH: return 'clockwise_90'
    }
    return 'none'
}