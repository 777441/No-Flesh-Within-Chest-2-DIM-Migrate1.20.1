// priority: 500
// Alex Mobs — potoo_beak key_active 行为
// 旧版参考：server_scripts_disabled_legacy/organ.disabled/key_bind.js:284-294
//          server_scripts_disabled_legacy/utils.disabled/constdef.js:139-142
// RegistryOrgan 在 alex/alex_behavior.js 注册分数。
//
// 行为：按下主动技能键后，根据脚下方块判定材料类别播放对应音效，无匹配则不触发任何效果（也不进入冷却）。
// 适配：1.20.1 移除了 block.material，这里改为基于方块 id / 标签判定。
//      - 红树林根 (minecraft:mangrove_roots) -> kubejs:beak_mangrove_roots
//      - 金属类（forge:storage_blocks 内的金属储存方块）-> kubejs:beak_metal
// 默认支持的方块种类很少，但开发者可在此 map 中扩展。

const PotooBeakBlockIdSoundMap = {
    'minecraft:mangrove_roots': { soundEvent: 'kubejs:beak_mangrove_roots', pitch: 1, volume: 0.5 },
}

const PotooBeakMetalBlockIds = new Set([
    'minecraft:iron_block',
    'minecraft:gold_block',
    'minecraft:diamond_block',
    'minecraft:netherite_block',
    'minecraft:emerald_block',
    'minecraft:copper_block',
    'minecraft:raw_iron_block',
    'minecraft:raw_gold_block',
    'minecraft:raw_copper_block',
])

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function PotooBeakKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    const level = event.level
    const block = player.block.offset(0, -1, 0)
    if (!block) return
    const blockId = block.id

    let beakConfig = PotooBeakBlockIdSoundMap[blockId]
    if (!beakConfig && PotooBeakMetalBlockIds.has(blockId)) {
        beakConfig = { soundEvent: 'kubejs:beak_metal', pitch: 1, volume: 0.5 }
    }
    if (!beakConfig) return

    level.playSound(null, player.getX(), player.getY(), player.getZ(), beakConfig.soundEvent, player.getSoundSource(), beakConfig.volume, beakConfig.pitch)
    player.addItemCooldown(organItem, 20 * 1)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:potoo_beak')
        .addOnlyStrategy('key_active', PotooBeakKeyActive)
)
