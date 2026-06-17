// priority: 800
// 旧版 配方迁移 — 特殊机器配方

// ===== Digesting (Biomancy) =====
ServerEvents.recipes(event => {
    function DigestingRecipe(ingredient, output) {
        this.type = 'biomancy:digesting'
        this.ingredient = ingredient
        this.result = output
        this.nutrientsCost = 2
        this.processingTime = 20 * 8
    }
    DigestingRecipe.prototype = {
        setNutrientsCost: function (nutrientsCost) { this.nutrientsCost = nutrientsCost; return this },
        setProcessingTime: function (processingTime) { this.processingTime = processingTime; return this },
    }
    function reg(m) { event.custom(m) }
    reg(new DigestingRecipe(Ingredient.of('#kubejs:organ'), Item.of('minecraft:dirt')))
})

// ===== Dragon Forge (Ice & Fire) =====
ServerEvents.recipes(event => {
    function DragonForgeRecipe(input, blood, output, dragonType) {
        this.type = 'iceandfire:dragonforge'
        this.input = input
        this.blood = blood
        this.result = output
        this.dragon_type = dragonType
        this.cook_time = 1000
    }
    DragonForgeRecipe.prototype = { setCookTime: function (t) { this.cook_time = t; return this } }
    function reg(m) { event.custom(m) }

    const BLOODS = ['lightning', 'fire', 'ice']
    const BLOOD_MAP = { lightning: 'iceandfire:lightning_dragon_blood', fire: 'iceandfire:fire_dragon_blood', ice: 'iceandfire:ice_dragon_blood' }
    const ORGANS = ['lung', 'muscle', 'heart', 'intestine', 'rib', 'spine', 'stomach', 'kidney', 'liver', 'spleen', 'appendix']

    BLOODS.forEach(bt => {
        ORGANS.forEach(organ => {
            reg(new DragonForgeRecipe(Item.of('kubejs:' + organ + '_template'), Item.of(BLOOD_MAP[bt]), Item.of('kubejs:dragon_blood_' + organ), bt))
        })
    })

    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_muscle'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:flame_muscle'), 'fire'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_heart'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:flame_heart'), 'fire'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_stomach'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:flame_stomach'), 'fire'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_spine'), Item.of('iceandfire:fire_dragon_blood'), Item.of('kubejs:flame_spine'), 'fire'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_lung'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:ice_lung'), 'ice'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_heart'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:ice_heart'), 'ice'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_rib'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:ice_rib'), 'ice'))
    reg(new DragonForgeRecipe(Item.of('kubejs:dragon_blood_intestine'), Item.of('iceandfire:ice_dragon_blood'), Item.of('kubejs:ice_intestine'), 'ice'))
})

// ===== Drying Rack (Hexerei) =====
ServerEvents.recipes(event => {
    function DryingRackRecipe(ingredients, output, dryingTimeInTicks) {
        this.type = 'hexerei:drying_rack'
        this.ingredients = ingredients
        this.output = output
        this.dryingTimeInTicks = dryingTimeInTicks
    }
    function reg(m) { event.custom(m) }
    reg(new DryingRackRecipe([Ingredient.of('minecraft:redstone')], Item.of('minecraft:dirt'), 20 * 120))
    reg(new DryingRackRecipe([Ingredient.of('kubejs:magic_spine')], Item.of('kubejs:magic_muscle'), 20 * 600))
})

// ===== Mixing Cauldron (Hexerei) =====
ServerEvents.recipes(event => {
    function MixingCauldronRecipe(ingredients, output) {
        this.type = 'hexerei:mixingcauldron'
        this.ingredients = ingredients
        this.output = output
        this.liquid = { fluid: 'minecraft:water' }
        this.liquidOutput = { fluid: 'minecraft:water' }
        this.fluidLevelsConsumed = 0
    }
    MixingCauldronRecipe.prototype = {
        setHeatRequirement: function (r) { this.heatRequirement = r; return this },
        setFluid: function (fluid, amount) { this.liquid = { 'fluid': fluid }; this.fluidLevelsConsumed = amount; return this },
        setFluidOutput: function (fluid) { this.liquidOutput = { 'fluid': fluid }; return this },
        addHeatRequirement: function () { this.heatRequirement = 'heated'; return this },
    }
    function reg(m) { event.custom(m) }

    reg(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('kubejs:scrap')).setFluid('minecraft:water', 500).setFluidOutput('kubejs:syrup'))

    reg(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:magic_muscle'), Ingredient.of('minecraft:enchanted_book'), Ingredient.of('waystones:warp_dust'), Ingredient.of('waystones:warp_dust'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('irons_spellbooks:arcane_essence')],
        Item.of('kubejs:magic_hippocampus')))

    reg(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:ink_sac'), Ingredient.of('hexerei:dried_yellow_dock_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle')],
        Item.of('irons_spellbooks:common_ink').withCount(4)).setFluid('minecraft:water', 1000))

    reg(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:healing_additive'), Ingredient.of('biomancy:healing_additive'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('minecraft:golden_apple'), Ingredient.of('minecraft:golden_apple'), Ingredient.of('kubejs:active_pill'), Ingredient.of('kubejs:active_pill'), Ingredient.of('kubejs:active_pill')],
        Item.of('kubejs:long_lasting_pill').withCount(1)).setFluid('createaddition:bioethanol', 500).setFluidOutput('minecraft:water').addHeatRequirement())

    reg(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('minecraft:enchanted_golden_apple'), Ingredient.of('iceandfire:sapphire_gem'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('kubejs:long_lasting_pill')],
        Item.of('kubejs:long_lasting_pill_gold').withCount(1)).setFluid('hexerei:quicksilver_fluid', 500).addHeatRequirement())

    reg(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('kubejs:cream'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('extradelight:cheese').withCount(2)).setFluid('minecraft:water', 1000).setFluidOutput('kubejs:cream').addHeatRequirement())

    reg(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('kubejs:lime_powder'), Ingredient.of('kubejs:lime_powder')],
        Item.of('create:scoria').withCount(8)).setFluid('minecraft:lava', 1000).setFluidOutput('hexerei:quicksilver_fluid').addHeatRequirement())
})

// ===== Goety Ritual =====
ServerEvents.recipes(event => {
    function GoetyRitualRecipe(craftType, ingredients, activation_item, output) {
        this.type = 'goety:ritual'
        this.ritual_type = 'goety:craft'
        this.craftType = craftType
        this.activation_item = activation_item
        this.ingredients = ingredients
        this.result = output
        this.duration = 60
        this.soulCost = 100
    }
    GoetyRitualRecipe.prototype = {
        setDuration: function (d) { this.duration = d; return this },
        setSoulCost: function (s) { this.soulCost = s; return this },
        setRitualType: function (t) { this.ritual_type = t; return this },
        setEntityToSacrifice: function (e) { this.entity_to_sacrifice = e; return this },
    }
    function reg(m) { event.custom(m) }

    reg(new GoetyRitualRecipe('lich', [Ingredient.of('hexerei:crow_ankh_amulet'), Ingredient.of('minecraft:nether_star'), Ingredient.of('minecraft:enchanted_golden_apple'), Ingredient.of('minecraft:totem_of_undying'), Ingredient.of('goety:soul_ruby'), Ingredient.of('nameless_trinkets:unknown_fragment'), Ingredient.of('irons_spellbooks:holy_rune'), Ingredient.of('kubejs:holy_eyeball'), Ingredient.of('minecraft:heart_of_the_sea'), Ingredient.of('unusualprehistory:ammonite_flask'), Ingredient.of('alexsmobs:soul_heart'), Ingredient.of('hexerei:selenite_shard')], Item.of('minecraft:glass_bottle'), Item.of('kubejs:holy_potion')).setSoulCost(1000))
    reg(new GoetyRitualRecipe('lich', [Ingredient.of('kubejs:demon_eyeball'), Ingredient.of('minecraft:nether_star'), Ingredient.of('kubejs:leviathan_rib'), Ingredient.of('kubejs:parasitic_elf')], Item.of('kubejs:pandora_inactive'), Item.of('kubejs:pandora_active')).setSoulCost(1000))
    reg(new GoetyRitualRecipe('sky', [Ingredient.of('twilightforest:fluffy_cloud'), Ingredient.of('twilightforest:wispy_cloud'), Ingredient.of('twilightforest:fluffy_cloud'), Ingredient.of('twilightforest:wispy_cloud'), Ingredient.of('minecraft:phantom_membrane'), Ingredient.of('kubejs:soul_piece'), Ingredient.of('nameless_trinkets:fragile_cloud'), Ingredient.of('kubejs:soul_piece')], Item.of('iceandfire:pixie_jar_2'), Item.of('kubejs:cloud_pyramid')))
})
