// priority: 500
// 注意：RegistryOrgan('kubejs:treasure_detector_feather') 已迁移至
// server_scripts/domain/organ/registry/organ/alex/alex_behavior.js（Alex 系，luck 1.5）。
// 本文件仅保留 key_active 行为策略与辅助函数，待 Task 2 评估去留。

const TreasureDetectorTableMap = {
    'minecraft:overworld': {
        0: 'minecraft:chests/abandoned_mineshaft',
        5: 'minecraft:chests/simple_dungeon',
        10: 'minecraft:chests/desert_pyramid',
        15: 'minecraft:chests/buried_treasure',
        20: 'minecraft:chests/ancient_city',
        25: 'dungeons_arise:chests/aviary/aviary_treasure',
        '-1': 'dungeons_arise:chests/foundry/foundry_treasure'
    },
    'minecraft:the_nether': {
        0: 'minecraft:chests/nether_fortress/fort_inside_generic',
        8: 'minecraft:chests/bastion_bridge',
        12: 'minecraft:chests/bastion_treasure',
        '-1': 'dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure'
    },
    'minecraft:the_end': {
        0: 'minecraft:chests/end_city_treasure',
        '-1': 'minecraft:chests/end_city_treasure'
    }
}

/**
 * @param {Internal.Level} level
 * @param {Internal.ServerPlayer} player
 * @returns {BlockPos}
 */
function GetTreasureDetectorChestPos(level, player) {
    let randomPosBlock = player.block.offset((0.5 - Math.random()) * 1000, (128 - Math.random() * 32) - player.block.y, (0.5 - Math.random()) * 1000)
    for (let i = 0; i < 16; i++) {
        if (!randomPosBlock.blockState.isAir()) {
            if (!randomPosBlock.offset(0, -1, 0).blockState.isAir()) {
                randomPosBlock = randomPosBlock.offset(0, -4, 0)
                break
            }
        }
        randomPosBlock = randomPosBlock.offset(0, -4, 0)
    }
    return randomPosBlock.getPos()
}

/**
 * @param {number} luck
 * @param {Object.<string, string>} dimLootMap
 * @returns {string}
 */
function GetTreasureDetectorLootTable(luck, dimLootMap) {
    let table = 'minecraft:chests/stronghold/base'
    let keys = Object.keys(dimLootMap)
    keys = keys.sort((a, b) => parseInt(a) - parseInt(b))
    for (let i = 0; i < keys.length; i++) {
        let curKey = keys[i]
        let nextKey = keys[i + 1]
        if (curKey == '-1') continue
        if (!nextKey || nextKey == '-1') {
            table = dimLootMap['-1']
            break
        }
        if (luck < parseInt(nextKey) && luck >= parseInt(curKey)) {
            table = dimLootMap[curKey]
            break
        }
    }
    return table
}

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function TreasureDetectorFeatherKeyActive(customData, event, organItem, organIndex, slotType) {
    const level = event.level
    const player = event.player
    const dimLootMap = TreasureDetectorTableMap[level.dimensionKey.location()]
    if (!dimLootMap) {
        player.tell(Text.translatable('status_msg.kubejs.treasure_detector_feather.no_treasure'))
        return
    }

    const luck = Math.max(player.getLuck(), 0)
    const table = GetTreasureDetectorLootTable(luck, dimLootMap)
    const pos = GetTreasureDetectorChestPos(level, player)
    let mapItem = GetTreaseMapItem(level, pos).withName(Text.translatable('map.kubejs.lost_treasure'))

    GenLootrChestWithLootTable(level, pos, table)
    player.give(mapItem)
    player.addItemCooldown(organItem, 20 * 600)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:treasure_detector_feather')
        .addOnlyStrategy('key_active', TreasureDetectorFeatherKeyActive)
)
