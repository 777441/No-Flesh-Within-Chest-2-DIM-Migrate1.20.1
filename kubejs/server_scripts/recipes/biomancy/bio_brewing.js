// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.biomancy.bio_brewing(['minecraft:redstone', 'biomancy:genetic_compound', 'biomancy:decaying_additive', 'minecraft:glowstone_dust'], 'kubejs:jar_of_vacuum', 'kubejs:jar_of_mystery')

    event.recipes.biomancy.bio_brewing(['biomancy:nutrient_bar', 'biomancy:regenerative_fluid', 'biomancy:gelling_agent', 'biomancy:flesh_bits'], 'minecraft:glass_bottle', Item.of('kubejs:simple_culture_medium', 4))
    event.recipes.biomancy.bio_brewing(['biomancy:nutrient_bar', 'biomancy:regenerative_fluid', 'biomancy:gelling_agent', 'biomancy:bloomberry'], 'minecraft:glass_bottle', Item.of('kubejs:culture_medium', 4))

    event.recipes.biomancy.bio_brewing(['minecraft:redstone', 'biomancy:toxin_extract', 'biomancy:exotic_compound', 'biomancy:withering_ooze'], 'kubejs:culture_medium', 'kubejs:mutation_culture_medium')
    event.recipes.biomancy.bio_brewing(['minecraft:redstone', 'biomancy:rejuvenation_serum', 'minecraft:amethyst_shard', 'biomancy:bio_lumens'], 'kubejs:culture_medium', 'kubejs:mixed_culture_medium')
    event.recipes.biomancy.bio_brewing(['minecraft:redstone', 'biomancy:ageing_serum', 'biomancy:breeding_stimulant', 'minecraft:golden_apple'], 'kubejs:culture_medium', 'kubejs:proliferation_culture_medium')

    // ===== 来自暗光 synced — ritual_catalyst 配方 =====
    event.custom({
        type: 'biomancy:bio_brewing',
        ingredients: [
            Ingredient.of('waystones:warp_dust'),
            Ingredient.of('minecraft:echo_shard'),
            Ingredient.of('minecraft:glowstone_dust'),
            Ingredient.of('twilightforest:raven_feather'),
        ],
        result: Item.of('kubejs:ritual_catalyst').withCount(4),
        nutrientsCost: 2,
        processingTime: 600,
        reactant: Item.of('biomancy:unstable_compound'),
    })
    event.custom({
        type: 'biomancy:bio_brewing',
        ingredients: [
            Ingredient.of('waystones:warp_dust'),
            Ingredient.of('createaddition:diamond_grit'),
            Ingredient.of('minecraft:glowstone_dust'),
            Ingredient.of('twilightforest:firefly'),
        ],
        result: Item.of('kubejs:ritual_catalyst').withCount(2),
        nutrientsCost: 10,
        processingTime: 2400,
        reactant: Item.of('biomancy:exotic_compound'),
    })
    event.custom({
        type: 'biomancy:bio_brewing',
        ingredients: [
            Ingredient.of('minecraft:feather'),
            Ingredient.of('minecraft:blaze_powder'),
            Ingredient.of('iceandfire:silver_ingot'),
            Ingredient.of('minecraft:golden_apple'),
        ],
        result: Item.of('kubejs:ritual_catalyst').withCount(1),
        nutrientsCost: 10,
        processingTime: 3600,
        reactant: Item.of('biomancy:exotic_compound'),
    })
    event.custom({
        type: 'biomancy:bio_brewing',
        ingredients: [
            Ingredient.of('#forge:flour'),
            Ingredient.of('#fruitsdelight:jelly'),
            Ingredient.of('extradelight:glazed_carrot'),
        ],
        result: Item.of('kubejs:active_pill').withCount(4),
        nutrientsCost: 5,
        processingTime: 300,
        reactant: Item.of('biomancy:genetic_compound'),
    })
})
