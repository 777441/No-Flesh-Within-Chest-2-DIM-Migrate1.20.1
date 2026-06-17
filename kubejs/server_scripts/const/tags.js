// priority: 5000
const DrygmyBlacklistTag = $TagKey.create($Registries.ENTITY_TYPE, 'ars_nouveau:drygmy_blacklist')
ServerEvents.tags('item', event => {
    event.add('curios:body', ['supplementaries:quiver'])

    event.add('kubejs:sweets', ['bakery:pudding_slice', 'bakery:chocolate_tart_slice', 'bakery:glowberry_pie_slice', 'bakery:cornet', 'bakery:jam_roll', 'bakery:apple_cupcake', 'bakery:misslilitu_biscuit', 'bakery:waffle', 'bakery:chocolate_truffle', 'bakery:sweetberry_cupcake', 'bakery:apple_pie_slice', 'minecraft:cookie', 'bakery:strawberry_cake_slice', 'minecraft:honey_bottle', 'supplementaries:candy', 'bakery:chocolate_cake_slice', 'bakery:sweetberry_cake_slice', 'bakery:chocolate_gateau_slice', 'bakery:bundt_cake_slice', 'bakery:linzer_tart_slice', 'bakery:strawberry_cupcake', 'bakery:chocolate_glazed_cookie', 'bakery:sweetberry_glazed_cookie', 'bakery:strawberry_glazed_cookie', 'minecraft:cake', 'bakery:strawberry_cake', 'bakery:sweetberry_cake', 'bakery:chocolate_cake', 'bakery:chocolate_gateau', 'bakery:bundt_cake', 'bakery:linzer_tart', 'bakery:apple_pie', 'bakery:glowberry_tart', 'bakery:chocolate_tart', 'bakery:pudding'])

    event.add('kubejs:cake', ['minecraft:cake', 'bakery:strawberry_cake', 'bakery:sweetberry_cake', 'bakery:chocolate_cake', 'bakery:chocolate_gateau', 'bakery:bundt_cake', 'bakery:linzer_tart', 'bakery:apple_pie', 'bakery:glowberry_tart', 'bakery:chocolate_tart', 'bakery:pudding', 'create:blaze_cake', 'create:creative_blaze_cake'])

    event.add('kubejs:beer', ['brewery:beer_wheat', 'brewery:beer_hops', 'brewery:beer_nettle', 'brewery:beer_oat', 'brewery:beer_haley', 'brewery:whiskey_jojannik', 'brewery:whiskey_lilitusinglemalt', 'brewery:whiskey_cristelwalker', 'brewery:beer_barley', 'brewery:whiskey_maggoallan', 'brewery:whiskey_ak', 'brewery:whiskey_carrasconlabel', 'brewery:whiskey_smokey_reverie', 'brewery:whiskey_highland_hearth', 'brewery:whiskey_jamesons_malt', 'kubejs:tasty_beer'])

    event.add('kubejs:wine', ['vinery:jo_special_mixture', 'vinery:eiswein', 'vinery:glowing_wine', 'vinery:apple_wine', 'vinery:red_wine', 'vinery:apple_cider', 'vinery:solaris_wine', 'vinery:mellohi_wine', 'vinery:mead', 'vinery:chorus_wine', 'vinery:villagers_fright', 'vinery:cherry_wine', 'vinery:chenet_wine', 'vinery:clark_wine', 'vinery:magnetic_wine', 'vinery:stal_wine', 'vinery:jellie_wine', 'vinery:bottle_mojang_noir', 'vinery:noir_wine', 'vinery:strad_wine', 'vinery:bolvar_wine', 'vinery:aegis_wine', 'vinery:cristel_wine', 'vinery:creepers_crush', 'vinery:kelp_cider', 'vinery:lilitu_wine',])

    event.add('kubejs:machine', [])

    event.add('maa:cannot_mending', ['kubejs:furnace_core', 'kubejs:burning_heart', 'kubejs:energy_bottle_red', 'kubejs:soul_cage', 'kubejs:red_wolf_beard', 'kubejs:raccoon_paw', 'kubejs:boar_nose', 'kubejs:ignited_armour', 'kubejs:pitcher_stomach', 'kubejs:vita_sunflower', 'kubejs:ender_guardian_spine', 'kubejs:harbinger_lung', 'kubejs:void_stomach_pouch'])

    event.add('maa:immune/lightning', ['kubejs:unstable_matter', 'tetra:thermal_cell'])
    event.add('maa:immune/explosion', ['tetra:thermal_cell'])
    event.add('maa:immune/fire', ['tetra:thermal_cell'])
    event.add('maa:immune/cactus', [])
    event.add('chestcavity:cannot_remove', [])

    event.add('kubejs:human_meat', ['kubejs:appendix', 'kubejs:intestine', 'kubejs:heart', 'kubejs:kidney', 'kubejs:liver', 'kubejs:lung', 'kubejs:muscle', 'kubejs:spleen', 'kubejs:stomach'])
    event.add('kubejs:animal_meat', ['kubejs:animal_appendix', 'kubejs:animal_intestine', 'kubejs:animal_heart', 'kubejs:animal_kidney', 'kubejs:animal_liver', 'kubejs:animal_lung', 'kubejs:animal_muscle', 'kubejs:animal_spleen', 'kubejs:animal_stomach', 'kubejs:rumen', 'kubejs:pig_stomach', 'kubejs:rat_ear', 'kubejs:wilden_heart', 'kubejs:chimera_heart', 'kubejs:cassowary_muscle'])
    event.add('kubejs:dragon_meat', ['kubejs:dragon_blood_heart', 'kubejs:dragon_blood_liver', 'kubejs:dragon_blood_lung', 'kubejs:dragon_blood_muscle', 'kubejs:dragon_blood_intestine', 'kubejs:dragon_blood_stomach'])
    event.add('kubejs:insect_meat', ['kubejs:insect_stomach', 'kubejs:insect_heart', 'kubejs:insect_caeca', 'kubejs:insect_lung', 'kubejs:insect_intestine', 'kubejs:insect_muscle'])
    event.add('kubejs:nether_meat', ['kubejs:fireproof_appendix', 'kubejs:fireproof_intestine', 'kubejs:fireproof_heart', 'kubejs:fireproof_kidney', 'kubejs:fireproof_liver', 'kubejs:fireproof_lung', 'kubejs:fireproof_muscle', 'kubejs:fireproof_spleen', 'kubejs:fireproof_stomach', 'kubejs:hoglin_rumen'])

    event.add('kubejs:nature', ['cornucopia:cornucopia'])
    event.add('minecraft:music_discs', ['kubejs:faded_disc', 'kubejs:assumptions_disc'])

    event.add('farm_and_charm:container', ['kubejs:sausage_casing', 'minecraft:stick'])
})

ServerEvents.tags('entity_type', event => {
    event.add('ars_nouveau:drygmy_blacklist', ['wildernature:raccoon'])
    event.add('forge:golems', ['modulargolems:metal_golem', 'modulargolems:humanoid_golem', 'modulargolems:dog_golem'])
})


ServerEvents.tags('block', event => {
    event.add('kubejs:chair_block', [
        'refurbished_furniture:oak_chair', 'refurbished_furniture:spruce_chair', 'refurbished_furniture:birch_chair', 'refurbished_furniture:jungle_chair', 'refurbished_furniture:acacia_chair', 'refurbished_furniture:dark_oak_chair', 'refurbished_furniture:mangrove_chair', 'refurbished_furniture:cherry_chair', 'refurbished_furniture:crimson_chair', 'refurbished_furniture:warped_chair', '#kaleidoscope_cookery:chair', 'candlelight:crimson_chair', 'candlelight:cherry_chair', 'candlelight:chair', 'candlelight:oak_chair', 'candlelight:dark_oak_chair', 'candlelight:acacia_chair', 'candlelight:jungle_chair', 'candlelight:birch_chair', 'candlelight:spruce_chair', 'candlelight:warped_chair', 'candlelight:mangrove_chair', 'candlelight:bamboo_chair', 'bakery:iron_chair'
    ])
    event.add('kubejs:table_block', [
        '#refurbished_furniture:tuckable', '#kaleidoscope_cookery:table', 'candlelight:dark_oak_big_table', 'candlelight:crimson_table', 'candlelight:crimson_big_table', 'candlelight:cherry_table', 'candlelight:cherry_big_table', 'candlelight:bamboo_table', 'candlelight:bamboo_big_table', 'bakery:iron_table', 'brewery:table', 'candlelight:dark_oak_table', 'candlelight:table', 'candlelight:side_table', 'candlelight:oak_table', 'candlelight:oak_big_table', 'candlelight:birch_table', 'candlelight:birch_big_table', 'candlelight:spruce_table', 'candlelight:spruce_big_table', 'candlelight:warped_big_table', 'candlelight:warped_table', 'candlelight:mangrove_big_table', 'candlelight:mangrove_table', 'candlelight:jungle_big_table', 'candlelight:jungle_table', 'candlelight:acacia_big_table', 'candlelight:acacia_table'
    ])
})

ServerEvents.tags('fluid', event => {
    event.add('kubejs:nutrients_fluid', ['create:honey', 'minecraft:milk'])
})

// 旧版 common/tags.js 补遗
ServerEvents.tags('worldgen/structure', event => {
    event.add('kubejs:fortress_locator', 'minecraft:fortress')
    event.add('kubejs:graveyard', ['graveyard:altar', 'graveyard:crypt', 'graveyard:dead_tree', 'graveyard:giant_mushroom', 'graveyard:haunted_house', 'graveyard:large_graveyard', 'graveyard:lich_prison', 'graveyard:medium_graveyard', 'graveyard:memorial_tree', 'graveyard:mushroom_grave', 'graveyard:ruins', 'graveyard:small_desert_grave', 'graveyard:small_desert_graveyard', 'graveyard:small_grave', 'graveyard:small_graveyard', 'graveyard:small_mountain_grave', 'graveyard:small_savanna_grave', 'graveyard_biomes:mushroom_structure'])
})

// 补 item tags: 旧版中定义但新版未包含的
const tagsPatch = event => {
    event.add('kubejs:chest_opener', ['chestcavity:chest_opener', 'kubejs:advanced_chest_opener'])
    event.add('kubejs:magnificent_focus', ['minecraft:nether_star'])
    event.add('kubejs:candy_focus', ['kubejs:candy_bag'])
    event.add('irons_spellbooks:school_focus', ['minecraft:nether_star', 'kubejs:candy_bag'])
    event.add('kubejs:isb_spell_book', ['irons_spellbooks:wimpy_spell_book',
        'irons_spellbooks:legendary_spell_book', 'irons_spellbooks:netherite_spell_book',
        'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:gold_spell_book',
        'irons_spellbooks:iron_spell_book', 'irons_spellbooks:copper_spell_book',
        'irons_spellbooks:rotten_spell_book', 'irons_spellbooks:blaze_spell_book',
        'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:druidic_spell_book',
        'irons_spellbooks:villager_spell_book', 'irons_spellbooks:blood_staff',
        'irons_spellbooks:evoker_spell_book', 'irons_spellbooks:necronomicon_spell_book',
        'kubejs:command_spell_book'])
    event.add('kubejs:lung', ['chestcavity:lung', 'kubejs:rotten_lung',
        'kubejs:animal_lung', 'chestcavity:llama_lung', 'kubejs:fireproof_lung',
        'chestcavity:small_animal_lung', 'kubejs:insect_lung', 'chestcavity:ender_lung',
        'chestcavity:dragon_lung', 'chestcavity:saltwater_lung', 'chestcavity:gas_bladder'])
    event.add('kubejs:intestine', ['chestcavity:carnivore_intestine',
        'chestcavity:herbivore_intestine', 'kubejs:insect_intestine',
        'chestcavity:ender_intestine', 'chestcavity:intestine', 'kubejs:rotten_intestine',
        'chestcavity:small_animal_intestine', 'chestcavity:small_carnivore_intestine',
        'chestcavity:small_herbivore_intestine', 'kubejs:animal_intestine',
        'kubejs:fireproof_intestine'])
    event.add('forge:bones/dragon', ['iceandfire:dragonbone'])
    event.add('forge:bones/wither', ['iceandfire:witherbone'])
    event.add('biomancy:cannot_be_eaten_by_cradle', ['weaponmaster:wm_broadswordlarge',
        'weaponmaster:wm_broadsword', 'weaponmaster:wm_rapier', 'weaponmaster:wm_rapierlarge'])
    event.add('iceandfire:scales/myrmex', ['iceandfire:myrmex_jungle_chitin',
        'iceandfire:myrmex_desert_chitin'])
    event.add('iceandfire:scales/deathworm', ['iceandfire:deathworm_chitin_white',
        'iceandfire:deathworm_chitin_red', 'iceandfire:deathworm_chitin_yellow'])
    event.add('forge:beef/oxtail', ['minecraft:cooked_beef'])
    // 以下为旧版 common/tags.js 补遗2：移植版 tagsPatch 中缺少的
    event.add('kubejs:rain_ritual', ['minecraft:apple', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])
    event.add('kubejs:is_cookie', ['extradelight:apple_cookie', 'extradelight:gingerbread_cookie', 'extradelight:glow_berry_cookie', 'extradelight:sugar_cookie', 'extradelight:pumpkin_cookie', 'farmersdelight:honey_cookie', 'minecraft:cookie', 'farmersdelight:sweet_berry_cookie', 'extradelight:sugar_cookie_steve', 'extradelight:sugar_cookie_alex', 'extradelight:sugar_cookie_villager', 'extradelight:sugar_cookie_emerald', 'extradelight:sugar_cookie_pickaxe', 'extradelight:sugar_cookie_diamond', 'extradelight:sugar_cookie_sword', 'extradelight:sugar_cookie_creeper'])
    event.add('kubejs:is_cookie_block', ['extradelight:chocolate_chip_cookie_block', 'extradelight:gingerbread_cookie_block', 'extradelight:sweet_berry_cookie_block', 'extradelight:apple_cookie_block', 'extradelight:sugar_cookie_block', 'extradelight:pumpkin_cookie_block', 'extradelight:honey_cookie_block', 'extradelight:glow_berry_cookie_block'])
    event.add('iceandfire:dragon_food_meat', ['minecraft:rabbit', 'minecraft:cooked_rabbit', 'chestcavity:raw_butchered_meat', 'chestcavity:cooked_butchered_meat', 'chestcavity:raw_man_meat', 'chestcavity:cooked_man_meat', 'alexsmobs:kangaroo_meat', 'alexsmobs:cooked_kangaroo_meat', 'unusualprehistory:cooked_coty', 'unusualprehistory:raw_coty', 'unusualprehistory:cooked_mammoth', 'unusualprehistory:raw_mammoth', 'unusualprehistory:cooked_stetha', 'unusualprehistory:raw_stetha', 'unusualprehistory:cooked_austro', 'unusualprehistory:raw_austro', 'unusualprehistory:raw_scau', 'unusualprehistory:cooked_scau', 'alexsmobs:cooked_catfish', 'alexsmobs:raw_catfish', 'minecraft:cod', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'minecraft:salmon'])
    event.add('forge:sausage/cooked', ['chestcavity:rich_mini_sausage', 'chestcavity:rich_sausage', 'chestcavity:rich_toxic_sausage', 'chestcavity:rich_dragon_sausage', 'chestcavity:alien_sausage', 'chestcavity:dragon_sausage', 'kubejs:brown_sauce_braised_intestines', 'chestcavity:sausage', 'chestcavity:mini_sausage', 'chestcavity:rich_human_sausage', 'chestcavity:rich_alien_sausage', 'chestcavity:human_sausage', 'chestcavity:toxic_sausage'])
    event.add('forge:sausage', ['chestcavity:raw_sausage', 'chestcavity:sausage', 'chestcavity:raw_rich_sausage', 'chestcavity:rich_sausage', 'chestcavity:raw_mini_sausage', 'chestcavity:mini_sausage', 'chestcavity:raw_rich_mini_sausage', 'chestcavity:rich_mini_sausage', 'chestcavity:rotten_sausage', 'chestcavity:raw_toxic_sausage', 'chestcavity:toxic_sausage', 'chestcavity:raw_rich_toxic_sausage', 'chestcavity:rich_toxic_sausage', 'chestcavity:raw_human_sausage', 'chestcavity:human_sausage', 'chestcavity:raw_rich_human_sausage', 'chestcavity:rich_human_sausage', 'chestcavity:raw_alien_sausage', 'chestcavity:alien_sausage', 'chestcavity:raw_rich_alien_sausage', 'chestcavity:rich_alien_sausage', 'chestcavity:raw_dragon_sausage', 'chestcavity:dragon_sausage', 'chestcavity:raw_rich_dragon_sausage', 'chestcavity:rich_dragon_sausage', 'kubejs:brown_sauce_braised_intestines'])
    event.add('forge:rabbit/ground/raw', ['minecraft:rabbit'])
    // 动态注册：将所有 chestcavity:salvageable 物品加入 kubejs:organ
    const baseorgan = event.get('chestcavity:salvageable').getObjectIds()
    baseorgan.forEach(organ => { event.add('kubejs:organ', organ) })
}
// 在已有的 item tags 后面追加
ServerEvents.tags('item', tagsPatch)