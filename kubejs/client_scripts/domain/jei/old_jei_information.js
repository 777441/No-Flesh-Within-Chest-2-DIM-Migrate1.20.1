// priority: 500
// 旧版 client_scripts/jei.js 迁移 — JEI信息
JEIEvents.information(event => {
    const $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
    const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')
    for (let i in global.organCharmNbtMap) {
        $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(i, global.organCharmNbtMap[i].targetOrgan))
    }

    const JEI_ITEMS = [
        'candy_pancreas', 'fire_gem', 'magic_spine', 'magic_vision',
        'lucky_cookie_organ', 'golden_lucky_cookie_organ', 'unholy_grail',
        'aesegull_rib_left', 'aesegull_rib_right', 'mockery', 'sarcasm',
        'cursed_soul', 'executioner_blade_pieces', 'love_between_lava_and_ice',
        'forbidden_fruit', 'heavy_hammer_muscle', 'leviathan_spine', 'leviathan_rib',
        'bone_soul', 'heart_of_blade', 'god_bless_empty_necklace', 'redstone_chipset',
        'ore_lung', 'flower_heart', 'wither_and_fall', 'blood_crystal', 'melty_blood',
        'demon_eyeball', 'parasitic_elf', 'diamond_bottle', 'blood_moon_wand',
        'pandora_inactive', 'ender_guard_eyeball', 'netherite_muscle', 'harbinger_lung',
        'ancient_chip', 'mini_vampire', 'ring_for_home', 'embers_liver', 'bad_ink',
        'mini_slime', 'sand_bone', 'bloody_bone_arrow', 'vulcan_furnace',
        'amethyst_magic_core', 'origin_knight_core', 'fish_in_chest', 'fish_in_warp',
        'warp_bubble', 'broken_prismarine_crown', 'plastic_heart', 'chicken_flavor_powder',
        'origin_of_tumor', 'immortal_volcanic_rock', 'frenzy_blast_furance',
        'sunbird_crystals', 'enderiophage_heart', 'viviparous_crinoidea', 'whale_lung',
        'egg_of_straddler', 'soul_vulture_feather', 'tusk', 'mantis_shrimp_fist',
        'fossil_gallbladder', 'weird_paperman', 'treasure_detector_feather', 'potoo_beak',
        'is_rabbit', 'blaze_pressurizer'
    ]
    JEI_ITEMS.forEach(id => event.addItem('kubejs:' + id, Text.black(Text.translatable("kubejs.jei." + id + ".1"))))
    event.addItem(Ingredient.of('#kubejs:evolution'), [Text.black(Text.translatable("kubejs.jei.evolution.1"))])
})
