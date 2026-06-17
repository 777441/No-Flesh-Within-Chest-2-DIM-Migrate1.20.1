// priority: 800
// 旧版 配方迁移 — 矿井/回收/灌注
// 适配新版 createoreexcavation API: drilling(output, vein, ticks) 3参数，需先注册矿脉
// VeinRecipeJS 有 alwaysInfinite()；DrillingRecipeJS/ExtractorRecipeJS 没有

// ===== Ore Excavation (Create) =====
// 先注册所有矿脉
ServerEvents.recipes(event => {
    // 注册矿脉 (name, icon) → 引用 vein id
    // vein 的 icon 参数: 第二个参数传 ItemStack
    event.recipes.createoreexcavation.vein(Component.of('{"text":"银矿"}'), 'iceandfire:silver_ore')
        .placement(128, 16, 192837465).veinSize(4, 12)
        .biomeWhitelist('minecraft:is_overworld').id('kubejs:vein/silver')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"青金石矿"}'), 'minecraft:lapis_lazuli')
        .placement(128, 16, 283746584).veinSize(6, 18)
        .biomeWhitelist('minecraft:is_overworld').id('kubejs:vein/lapis')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"下界金矿"}'), 'minecraft:gold_nugget')
        .placement(128, 16, 374859203).veinSize(8, 24)
        .biomeWhitelist('minecraft:is_nether').id('kubejs:vein/nether_gold')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"奥术残骸矿"}'), 'irons_spellbooks:arcane_debris')
        .placement(128, 16, 574839201).veinSize(2, 6)
        .biomeWhitelist('minecraft:is_overworld').id('kubejs:vein/arcane')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"熔岩"}'), 'minecraft:lava_bucket')
        .placement(128, 16, 673829104).veinSize(10, 30)
        .biomeWhitelist('minecraft:is_overworld').id('kubejs:vein/lava_overworld')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"熔岩"}'), 'minecraft:lava_bucket')
        .placement(128, 16, 763829104).veinSize(20, 60)
        .biomeWhitelist('minecraft:is_nether').id('kubejs:vein/lava_nether')
    event.recipes.createoreexcavation.vein(Component.of('{"text":"水银"}'), 'hexerei:quicksilver_bucket')
        .placement(128, 16, 857382910).veinSize(4, 12)
        .biomeWhitelist('minecraft:is_overworld').id('kubejs:vein/quicksilver')

    // 开采配方 (output, veinID, ticks) — 3参数
    // drilling/extracting 无 alwaysInfinite()
    event.recipes.createoreexcavation.drilling('iceandfire:silver_ore', 'kubejs:vein/silver', 600)
        .drill('createoreexcavation:diamond_drill').stress(384)
        .id('kubejs:drilling_silver')

    event.recipes.createoreexcavation.drilling('minecraft:lapis_lazuli', 'kubejs:vein/lapis', 400)
        .stress(256)
        .id('kubejs:drilling_lapis')

    event.recipes.createoreexcavation.drilling('minecraft:gold_nugget', 'kubejs:vein/nether_gold', 100)
        .stress(192)
        .id('kubejs:drilling_nether_gold')

    event.recipes.createoreexcavation.drilling([
        Item.of('minecraft:ancient_debris').withChance(0.3),
        Item.of('minecraft:gold_nugget').withChance(0.8),
        Item.of('minecraft:netherrack').withChance(0.8),
        Item.of('minecraft:magma_block').withChance(0.5)
    ], 'kubejs:vein/ancient_remains', 4000)
        .drill('createoreexcavation:netherite_drill').stress(2048)
        .fluid('minecraft:lava 500').id('kubejs:drilling_netherite')

    event.recipes.createoreexcavation.drilling([
        Item.of('irons_spellbooks:arcane_debris').withChance(0.3),
        Item.of('irons_spellbooks:arcane_essence').withChance(0.8),
        Item.of('irons_spellbooks:cinder_essence').withChance(0.5)
    ], 'kubejs:vein/arcane', 4000)
        .drill('createoreexcavation:netherite_drill').stress(2048)
        .fluid('hexerei:quicksilver_fluid 50').id('kubejs:drilling_arcane')

    event.recipes.createoreexcavation.extracting('minecraft:lava 500', 'kubejs:vein/lava_overworld', 100)
        .drill('createoreexcavation:diamond_drill').stress(512)
        .id('extracting_lava_overworld')

    event.recipes.createoreexcavation.extracting('minecraft:lava 1000', 'kubejs:vein/lava_nether', 100)
        .drill('createoreexcavation:diamond_drill').stress(512)
        .id('extracting_lava_nether')

    event.recipes.createoreexcavation.extracting('hexerei:quicksilver_fluid 250', 'kubejs:vein/quicksilver', 800)
        .drill('createoreexcavation:diamond_drill').stress(640)
        .id('extracting_quicksilver')
})

// ===== Weapon Infusion (Cataclysm) =====
ServerEvents.recipes(event => {
    function WeaponInfusionRecipe(base, addition, output) {
        this.type = 'cataclysm:weapon_fusion'
        this.base = base
        this.addition = addition
        this.result = output
    }
    function reg(m) { event.custom(m) }
    reg(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_fire_ingot'), Item.of('iceandfire:dread_shard'), Item.of('kubejs:dreadsteel_ingot')))
    reg(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_ice_ingot'), Item.of('iceandfire:dread_shard'), Item.of('kubejs:dreadsteel_ingot')))
    reg(new WeaponInfusionRecipe(Item.of('iceandfire:dragonsteel_lightning_ingot'), Item.of('iceandfire:dread_shard'), Item.of('kubejs:dreadsteel_ingot')))
})
