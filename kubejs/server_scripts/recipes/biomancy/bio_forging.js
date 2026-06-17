// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.biomancy.bio_forging([Ingredient.of('#farm_and_charm:dough', 4), Ingredient.of('#kubejs:muscle'), Item.of('biomancy:healing_additive')], Item.of('kubejs:gluten_muscle'), 'biomancy:organ', 10)
    event.recipes.biomancy.bio_forging([Item.of('bakery:baguette'), Ingredient.of('#kubejs:bone'), Item.of('biomancy:healing_additive')], Item.of('kubejs:baguette_bone'), 'biomancy:organ', 10)
    event.recipes.biomancy.bio_forging([Item.of('minecraft:sugar', 8), Ingredient.of('#kubejs:heart'), Item.of('biomancy:healing_additive')], Item.of('kubejs:sweet_heart'), 'biomancy:organ', 10)
    event.recipes.biomancy.bio_forging([Item.of('brewery:mashed_potatoes', 8), Item.of('kubejs:taste_worm_powder'), Item.of('biomancy:healing_additive'), Item.of('biomancy:living_flesh', 4)], Item.of('kubejs:mashed_potato_pancreas'), 'biomancy:organ', 20)
    event.recipes.biomancy.bio_forging([Item.of('candlelight:beef_wellington', 8), Item.of('kubejs:taste_worm_powder'), Item.of('biomancy:healing_additive'), Item.of('biomancy:living_flesh', 4)], Item.of('kubejs:living_beef_wellington'), 'biomancy:organ', 20)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:acid_extract', 4), Item.of('biomancy:mineral_fragment', 4), Item.of('biomancy:bone_fragments', 4), Item.of('bakery:jar', 1)], Item.of('kubejs:small_acid_tank'), 'biomancy:organ', 30)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:elastic_fibers', 1), Item.of('biomancy:mineral_fragment', 1), Item.of('minecraft:diamond', 1)], Item.of('kubejs:empty_injection'), 'biomancy:organ', 8)

    event.remove({ output: 'modulargolems:metal_golem_template' })
    event.recipes.biomancy.bio_forging([Item.of('minecraft:clay_ball', 4), Item.of('biomancy:flesh_bits', 1), Ingredient.of('#forge:ingots/copper', 1)], Item.of('modulargolems:metal_golem_template'), 'biomancy:components', 2)

    event.recipes.biomancy.bio_forging([Item.of('kubejs:player_21_injection', 1), Item.of('kubejs:inactivated_neuron_tumor', 1), Item.of('biomancy:healing_additive', 1)], Item.of('kubejs:player_25_injection'), 'biomancy:components', 20)

    event.recipes.biomancy.bio_forging([Item.of('kubejs:player_25_injection', 1), Item.of('biomancy:bloomberry', 1), Item.of('biomancy:frenzy_serum', 1)], Item.of('kubejs:player_27_injection'), 'biomancy:components', 50)

    event.recipes.biomancy.bio_forging([Item.of('graveyard:dark_iron_block', 1), Item.of('kubejs:small_acid_tank', 2), Item.of('minecraft:glass', 6)], Item.of('kubejs:growth_vat'), 'biomancy:machines', 50)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:malignant_flesh', 1), Item.of('biomancy:acid_extract', 4)], Item.of('biomancy:primal_orifice'), 'biomancy:misc', 10)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:healing_additive', 1), Item.of('biomancy:living_flesh', 16), Item.of('chestcavity:chest_opener', 1), Item.of('minecraft:iron_ingot', 16)], Item.of('chestcavity:surgical_box', '{Inventory:[],InventoryType:"kubejs:cc_inventory_types/player_17",Size:17}'), 'biomancy:organ', 10)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:healing_additive', 1), Item.of('kubejs:worm_of_taste', 1), Item.of('biomancy:toxin_gland', 1)], Item.of('kubejs:tasty_gland'), 'biomancy:organ', 10)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:elastic_fibers', 1), Item.of('biomancy:mineral_fragment', 1), Item.of('minecraft:ender_eye', 1)], Item.of('kubejs:blood_extractor'), 'biomancy:organ', 8)

    event.recipes.biomancy.bio_forging([Item.of('biomancy:exotic_dust', 1), Item.of('minecraft:chorus_fruit', 1), Item.of('kubejs:rumen', 1)], Item.of('kubejs:void_stomach_pouch'), 'biomancy:organ', 20)

    event.recipes.biomancy.bio_forging([Ingredient.of('#forge:heads', 1), Item.of('kubejs:silverfish_gland', 1), Item.of('biomancy:bio_lumens', 1)], Item.of('kubejs:animted_soul'), 'biomancy:organ', 20) 

    event.recipes.biomancy.bio_forging([Item.of('kubejs:deserted_gula_worm_nest'), Item.of('biomancy:bloomberry'), Item.of('kubejs:human_meat_sausage'), Item.of('minecraft:target')], Item.of('kubejs:gula_beacon'), 'biomancy:organ', 50)

    event.recipes.biomancy.bio_forging([Ingredient.of('#kubejs:liver'), Item.of('minecraft:compass'), Item.of('biomancy:flesh_bits')], Item.of('kubejs:navigating_liver'), 'biomancy:organ', 20)
    event.recipes.biomancy.bio_forging([Item.of('minecraft:map'), Item.of('minecraft:leather'), Item.of('minecraft:redstone')], Item.of('maa:structure_selector'), 'biomancy:organ', 5)
    event.recipes.biomancy.bio_forging([Item.of('minecraft:map'), Item.of('minecraft:leather'), Item.of('minecraft:mossy_cobblestone')], Item.of('maa:biome_selector'), 'biomancy:organ', 5)

    // ===== 来自暗光 — 器官模板配方 =====
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4)], Item.of('kubejs:heart_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:elastic_fibers', 8)], Item.of('kubejs:lung_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4), Item.of('biomancy:hormone_secretion', 4)], Item.of('kubejs:muscle_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4)], Item.of('kubejs:intestine_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:bone_fragments', 16)], Item.of('kubejs:rib_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4)], Item.of('kubejs:spleen_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 2), Item.of('biomancy:bone_fragments', 12)], Item.of('kubejs:spine_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 2), Item.of('biomancy:elastic_fibers', 2), Item.of('biomancy:bile', 2)], Item.of('kubejs:stomach_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4)], Item.of('kubejs:kidney_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('biomancy:tough_fibers', 4), Item.of('biomancy:elastic_fibers', 4)], Item.of('kubejs:liver_template'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 4), Item.of('biomancy:elastic_fibers', 2)], Item.of('kubejs:appendix_template'), 'biomancy:weapons', 32)

    // ===== 来自暗光 — 神器配方 =====
    event.recipes.biomancy.bio_forging([Item.of('nameless_trinkets:lucky_rock'), Item.of('meetyourfight:slicers_dice'), Item.of('biomancy:withered_mob_marrow', 4)], Item.of('kubejs:d8'), 'biomancy:weapons', 32)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:flesh_bits', 8), Item.of('createaddition:iron_rod', 8), Item.of('create:brass_hand')], Item.of('kubejs:telescopic_arm'), 'biomancy:weapons', 48)
    event.recipes.biomancy.bio_forging([Item.of('biomancy:regenerative_fluid', 2), Item.of('biomancy:hormone_secretion', 2), Item.of('biomancy:mob_marrow', 6), Item.of('createaddition:electrum_wire', 8)], Item.of('kubejs:platelet_dispatcher'), 'biomancy:weapons', 48)
    event.recipes.biomancy.bio_forging([Item.of('minecraft:spider_eye'), Item.of('createaddition:gold_wire', 4), Item.of('createaddition:zinc_sheet', 2), Item.of('biomancy:gem_fragments', 8), Item.of('biomancy:bio_lumens', 4)], Item.of('kubejs:lowlight_vision'), 'biomancy:weapons', 48)
    event.recipes.biomancy.bio_forging([Item.of('minecraft:spider_eye'), Item.of('kubejs:soul_piece'), Item.of('biomancy:exotic_compound', 6)], Item.of('kubejs:holy_eyeball'), 'biomancy:weapons', 60)
    event.recipes.biomancy.bio_forging([Item.of('chestcavity:creeper_appendix'), Item.of('minecraft:creeper_head'), Item.of('biomancy:volatile_fluid', 8), Item.of('minecraft:gunpowder', 16)], Item.of('kubejs:excited_appendix'), 'biomancy:weapons', 60)
    event.recipes.biomancy.bio_forging([Item.of('kubejs:stomach_template'), Item.of('biomancy:enlargement_serum', 2), Item.of('biomancy:malignant_flesh_veins', 16), Item.of('biomancy:nutrient_bar', 8)], Item.of('kubejs:stomach_tumor'), 'biomancy:weapons', 40)
    event.recipes.biomancy.bio_forging([Item.of('kubejs:stomach_template'), Item.of('lightmanscurrency:coinpile_gold', 4), Item.of('create:experience_block', 16)], Item.of('kubejs:greedy_stomach'), 'biomancy:weapons', 40)
})