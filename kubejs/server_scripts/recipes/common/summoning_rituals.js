// priority: 500
// 旧版 ritual/summoning_rituals.js 迁移 — 召唤祭坛配方
ServerEvents.recipes(event => {
    // 七宗罪碎片
    const sinShards = [
        { id: 'sloth', inputs: ['#minecraft:beds', Item.of('minecraft:potion', { Potion: "minecraft:strong_turtle_master" }).strongNBT(), 'nameless_trinkets:sleeping_pills'] },
        { id: 'wrath', inputs: ['hexerei:warhammer', 'nameless_trinkets:rage_mind'] },
        { id: 'pride', inputs: ['goety:refuse_bottle', 'nameless_trinkets:gods_crown'] },
        { id: 'lust', inputs: ['art_of_forging:sigil_of_eden', 'irons_spellbooks:mana_upgrade_orb'] },
        { id: 'envy', inputs: ['goety:grimoire_of_grudges', '8x goety:ill_bomb'] },
        { id: 'gluttony', inputs: ['4x minecraft:enchanted_golden_apple', 'goety:hunger_core'] },
        { id: 'greed', inputs: ['nameless_trinkets:fate_emerald', '3x lightmanscurrency:coinblock_emerald'] },
    ]
    sinShards.forEach(sin => {
        event.recipes.summoningrituals
            .altar('kubejs:ritual_catalyst')
            .id('kubejs:ritual_' + sin.id + '_shard')
            .input(sin.inputs[0]).input(sin.inputs[1])
            .input('goety:philosophers_stone').input('kubejs:nether_star_shard')
            .itemOutput('kubejs:' + sin.id + '_shard')
            .sacrifice('minecraft:villager', 1).sacrificeRegion(3, 3).dayTime('night').recipeTime(500)
    })

    // World of Bosses 召唤
    const bossSummons = [
        { id: 'froverlord', inputs: ['8x biomancy:creator_mix', '16x minecraft:blue_ice', '#forge:shields'], health: 900 },
        { id: 'volcanium', inputs: ['8x biomancy:creator_mix', '32x minecraft:basalt', '32x minecraft:blaze_powder'], health: 760 },
        { id: 'dark_mask', inputs: ['16x minecraft:obsidian', '16x minecraft:snow_block', '8x biomancy:creator_mix'], health: 1100 },
        { id: 'knight_garent', inputs: ['minecraft:netherite_scrap', '8x create:brass_ingot', '8x biomancy:creator_mix'], health: 1060 },
        { id: 'man_of_water', inputs: ['16x minecraft:soul_sand', '8x minecraft:dripstone_block', '8x biomancy:creator_mix'], health: 700 },
        { id: 'electric_head', inputs: [Ingredient.of('#forge:ingots/copper').withCount(32), Ingredient.of('#forge:dusts/redstone').withCount(32), '8x biomancy:creator_mix'], health: 860 },
        { id: 'stone_guard', inputs: ['16x minecraft:mossy_stone_bricks', Ingredient.of('#minecraft:stone_bricks').withCount(64), '8x biomancy:creator_mix'], health: 600 },
        { id: 'skeleton_demon', inputs: ['8x minecraft:bone_block', '4x irons_spellbooks:epic_ink', '8x biomancy:creator_mix'], health: 800 },
        { id: 'hand_head', inputs: ['8x minecraft:iron_block', '8x minecraft:magma_block', '8x biomancy:creator_mix'], health: 580 },
        { id: 'nameless_one', inputs: [Ingredient.of('#forge:gems/emerald').withCount(16), Ingredient.of('#forge:rods/copper').withCount(16), '8x biomancy:creator_mix'], health: 660 },
        { id: 'prismarine_watcher', inputs: [Ingredient.of('#forge:dusts/prismarine').withCount(16), 'minecraft:end_crystal', '8x biomancy:creator_mix'], health: 670 },
        { id: 'ancient_wizard', inputs: ['8x minecraft:ender_eye', '4x minecraft:pufferfish', '8x biomancy:creator_mix'], health: 900 },
        { id: 'merciless_assasin', inputs: ['16x minecraft:amethyst_shard', '4x minecraft:phantom_membrane', '8x biomancy:creator_mix'], health: 800 },
        { id: 'vulcan', inputs: ['16x minecraft:tnt', Ingredient.of('#forge:ingots/gold').withCount(16), '8x biomancy:creator_mix'], health: 1140 },
        { id: 'flaming_berserker', inputs: ['32x minecraft:nether_bricks', '8x minecraft:fire_charge', '8x biomancy:creator_mix'], health: 1000 },
        { id: 'frost_magma', inputs: ['2x minecraft:packed_ice', '16x minecraft:packed_ice', '8x biomancy:creator_mix'], health: 1300 },
        { id: 'crimson_vampire', inputs: ['8x create:rose_quartz', Ingredient.of('#forge:crops/nether_wart').withCount(32), '8x biomancy:creator_mix'], health: 820 },
        { id: 'mono_eyed_skeleton', inputs: ['minecraft:fermented_spider_eye', Ingredient.of('#forge:crops/nether_wart').withCount(32), '8x biomancy:creator_mix'], health: 1040 },
        { id: 'ender_ordnance', inputs: ['4x minecraft:ender_eye', Ingredient.of('#forge:gems/quartz').withCount(16), '8x biomancy:creator_mix'], health: 970 },
        { id: 'sand_giant', inputs: ['16x minecraft:cactus', Ingredient.of('#forge:ingots/gold').withCount(16), '8x biomancy:creator_mix'], health: 860 },
        { id: 'aesegull', inputs: ['16x createaddition:gold_spool', '8x minecraft:glowstone', '8x biomancy:creator_mix'], health: 830 },
    ]
    bossSummons.forEach(b => {
        event.recipes.summoningrituals
            .altar('kubejs:ritual_catalyst').id('kubejs:' + b.id + '_summon')
            .mobOutput(SummoningOutput.mob('somebosses:' + b.id).count(1).offset(0, 3, 0).spread(3, 0, 3)
                .data({ Health: b.health, Attributes: [{ Name: 'generic.max_health', Base: b.health }] }))
            .input(b.inputs[0]).input(b.inputs[1]).input(b.inputs[2]).recipeTime(200)
    })

    // 神恩Boss
    event.recipes.summoningrituals
        .altar('kubejs:god_bless_full_necklace').id('kubejs:god_bless_summon')
        .blockBelow('minecraft:command_block').input('minecraft:nether_star')
        .itemOutput('kubejs:god_bless_empty_necklace').recipeTime(200)
})
