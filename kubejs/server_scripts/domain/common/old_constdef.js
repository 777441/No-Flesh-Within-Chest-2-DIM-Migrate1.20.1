// priority: 1000
// === 常量定义 (从 旧版/utils/constdef.js 迁移) ===
// 注意：resourceCount/resourceCountMax/defaultResourceMax/warpCount/warpCountMax/defaultWarpMax/organActive/criticalPunch/criticalPunchMaxCount
// 已在 bridge/const_bridge.js (priority: 5000) 中定义，此处不再重复声明。

const bossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
    'cataclysm:netherite_monstrosity',
    'cataclysm:ender_guardian',
    'cataclysm:ignis',
    'cataclysm:the_harbinger',
    'cataclysm:the_leviathan',
    'cataclysm:ancient_remnant',
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
    'meetyourfight:bellringer',
    'meetyourfight:rosalyne',
    'meetyourfight:swampjaw',
    'meetyourfight:dame_fortuna',
    'invasioncodered:gashslit',
    'irons_spellbooks:dead_king_corpse',
    "goety:apostle",
    "goety:vizier",
    "graveyard:lich",
    "minecraft:ender_dragon",
    "minecraft:wither",
    'twilightforest:naga',
    'twilightforest:lich',
    'twilightforest:hydra',
    'twilightforest:ur_ghast',
    // 'twilightforest:yeti_alpha',
    'twilightforest:snow_queen',
    'twilightforest:knight_phantom',
    'twilightforest:minoshroom',
]

const bossesOfMassDestructionBossTypeList = [
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
]
const worldOfBossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
]

const difficultLevelDef = [
    { healthMulti: 1, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 2, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 3, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 5, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 10, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 20, attackMulti: 2, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 30, attackMulti: 3, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 50, attackMulti: 4, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 100, attackMulti: 5, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 300, attackMulti: 6, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 500, attackMulti: 7, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 1000, attackMulti: 8, armorMulti: 3, toughnessMulti: 3 },
]

const curseEnchantList = [
    'cursery:curse_electrified',
    'cursery:curse_switchy',
    'cursery:curse_illusion',
    'cursery:curse_undead',
    'cursery:curse_laddering',
    'cursery:curse_hungryhealth',
    'cursery:curse_slowness',
    'cursery:curse_poison',
    'cursery:curse_steelfeet',
    'cursery:curse_heavy_enchant',
    'cursery:curse_recoil',
    'cursery:curse_stubby',
    'cursery:curse_hurtful',
    'cursery:curse_loose',
    'cursery:curse_weakness',
    'cursery:curse_hungry',
    'cursery:curse_anvil',
    'cursery:curse_blindness',
    "chestcavity:malpractice",
    'minecraft:vanishing_curse',
    'minecraft:binding_curse',
]

const grudgeCurseEnchantList = [
    'cursery:curse_electrified',
    'cursery:curse_switchy',
    'cursery:curse_illusion',
    'cursery:curse_undead',
    'cursery:curse_laddering',
    'cursery:curse_hungryhealth',
    'cursery:curse_slowness',
    'cursery:curse_poison',
    'cursery:curse_steelfeet',
    'cursery:curse_heavy_enchant',
    'cursery:curse_recoil',
    'cursery:curse_stubby',
    'cursery:curse_hurtful',
    'cursery:curse_loose',
    'cursery:curse_weakness',
    'cursery:curse_hungry',
    'cursery:curse_anvil',
    'cursery:curse_blindness',
    "chestcavity:malpractice",
]

const machineChestLootTable = ['kubejs:platelet_dispatcher', 'kubejs:lowlight_vision', 'kubejs:revolution_relay', 'kubejs:revolution_delay', 'kubejs:rose_quartz_muscle', 'kubejs:revolution_cable', 'kubejs:revolution_gear', 'kubejs:rose_quartz_dialyzer', 'kubejs:rose_quartz_liver', 'kubejs:rose_quartz_heart', 'kubejs:revolution_steam_engine', 'kubejs:lava_life_cycle_system', 'kubejs:energy_bottle_max', 'kubejs:aegis', 'kubejs:mace', 'kubejs:machine_clockwork', 'kubejs:tamagotchi', 'kubejs:jet_propeller', 'kubejs:platelet_dispatcher', 'kubejs:compressed_oxygen_implant']

// === WarpFoodMap (扭曲食物映射) ===
const warpFoodMap = {
    'cataclysm:blessed_amethyst_crab_meat': { count: -3, chance: 1 },
    'minecraft:enchanted_golden_apple': { count: -1, chance: 1 },
    'chestcavity:raw_man_meat': { count: 1, chance: 0.1 },
    'extradelight:bad_food': { count: 1, chance: 0.05 },
}

// === Wares (从 旧版/utils/wares_model.js 迁移) ===

function Wares(id) {
    this.paymentItems = []
    this.ordered = false
    this.id = id
    this.requestedItems = []
    this.experience = 0
}

Wares.prototype = {
    addPaymentItems: function (item) {
        this.paymentItems.push(item)
        return this
    },
    addRequestedItems: function (item) {
        this.requestedItems.push(item)
        return this
    },
    setPaymentItems: function (paymentItems) {
        this.paymentItems = paymentItems
        return this
    },
    setRequestedItems: function (requestedItems) {
        this.requestedItems = requestedItems
        return this
    },
    setBuyerAddress: function (buyerAddress, color) {
        this.buyerAddress = buildMessageJsonString(buyerAddress, color);
        return this
    },
    setOrdered: function (ordered) {
        this.ordered = ordered
        return this
    },
    setExperience: function (experience) {
        this.experience = experience
        return this
    },
    setTitle: function (title, color) {
        this.title = buildMessageJsonString(title, color)
        return this
    },
    setMessage: function (message, color) {
        this.message = buildMessageJsonString(message, color)
        return this
    },
    setBuyerName: function (buyerName, color) {
        this.buyerName = buildMessageJsonString(buyerName, color)
        return this
    },
    /**
     *
     * @returns {Internal.ItemStack}
     */
    build: function () {
        return Item.of('wares:delivery_agreement', this)
    },
}

function buildMessageJsonString(text, color) {
    return `{ "color": "${color}", "text": "${text}" }`
}

function SimpleWares(requestedItems, paymentItems, ordered) {
    this.paymentItems = paymentItems
    this.requestedItems = requestedItems
    this.ordered = ordered
}

const PotionWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('biomancy:healing_additive').withCount(1)], 8),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.chop_tree",Duration:1}],CustomPotionColor:6967847,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomPotionColor:9868950,CustomPotionEffects:[{Ambient:0b,Amplifier:2b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:1800,Id:56,ShowIcon:1b,ShowParticles:1b,"forge:id":"goety:arrowmantic"}],Lingering:0.0f,Quaff:0,Velocity:0.1f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.strip",Duration:1}],CustomPotionColor:5329233,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.love",Duration:1}],CustomPotionColor:16713305,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(2)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.growth",Duration:1}],CustomPotionColor:38417,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.flaying",Duration:1}],CustomPotionColor:10373418,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
]

const ChallengeWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:final_raid"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:element_revelry"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:curios_of_god"}')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway:"gateways:magma_cube_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:blaze_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:enderman_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:shulker_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:spider_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:skeleton_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:slime_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:witch_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:zombie_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:creeper_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:ghast_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "kubejs:wither_skeleton_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "kubejs:phantom_gate_large"}')], 3)
]

const EggWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(6)], [Item.of('hexerei:crow_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('unusualprehistory:rex_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('bettas:betta_fish_spawn_egg')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('alexsmobs:spawn_egg_jerboa')], 4),
]

const SpecialWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:180, upgradeSlots:5}')], 2),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:100, upgradeSlots:9}')], 2),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:forged_workbench')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('dimdungeons:item_blank_theme_key', '{theme:2}')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:one_eyed_wrait_in_a_bottle')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:rusty_sword_relic')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:disgusting_pendant')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:vampire_bait')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:prismarine_eye')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:dark_magic_gauntlet')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:token_of_the_ninja')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:frozen_shield_plate')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:gilded_dynamite')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:furnace_torch')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:ice_lantern')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:bone_of_curse')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:slab_of_command')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:illegal_beacon')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:necromancy_staff')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:burning_volcanic_rock')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:cursed_spring_water')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:chaos_insignia')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:monochrome_mask')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:cactus_relic')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:power_generator_core')], 3),
]

const OrganWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:redstone_furnace')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:d8')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:nether_star_shard')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:long_lasting_pill')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:doppelganger')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:rose_quartz_muscle')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:platelet_dispatcher')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:compressed_oxygen_implant')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:the_third_eye')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:muscle_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:spleen_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:heart_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:stomach_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:lung_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:rib_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:kidney_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:spine_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:liver_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:intestine_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:appendix_gold')], 4),
]

const OreWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:coal').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:iron_ingot').withCount(8)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:redstone').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:lapis_lazuli').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:gold_ingot').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('minecraft:diamond').withCount(2)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:andesite').withCount(16)], 64),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(8)], [Item.of('hexerei:selenite_shard').withCount(1)], 3),
]

function getRandomPotionWares() {
    let task = randomGet(PotionWares)
    return new Wares('potion').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('女巫酿造师', '#33333').setMessage('我了解到你似乎有些 **特殊的** 需求。不如看看这瓶女巫精酿是否能够满足你的一时之需？', '#33333').setOrdered(task.ordered).build()
}
function getRandomChallengeWares() {
    let task = randomGet(ChallengeWares)
    return new Wares('challenge').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('传说中的物品', '#e6493e').setMessage('我们在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，可以将其低价转卖给你。', '#33333').setOrdered(task.ordered).build()
}
function getRandomEggWares() {
    let task = randomGet(EggWares)
    return new Wares('egg').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('宠物商人', '#33333').setMessage('咳，你也许在荒野上遇到过它吧。\n我们把它装在怪物蛋里，这对你来说很方便吧？', '#33333').setOrdered(task.ordered).build()
}
function getRandomSpecialWares() {
    let task = randomGet(SpecialWares)
    return new Wares('special').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('遗物商人', '#33333').setMessage('我们的探险队从遗迹中搜寻到了一些有趣的物品。\n我们只需要一个合理的价格。剩下的，你自己决定。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOrganWares() {
    let task = randomGet(OrganWares)
    return new Wares('organ').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('器官商人', '#d15492').setMessage('这是一些. . .肉制品。\n我们保存的相当完好，保证随取随用。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOreWares() {
    let task = randomGet(OreWares)
    return new Wares('ore').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('矿石商人', '#33333').setMessage('你好，我这里有些矿物。\n或许这对你有用。', '#33333').setOrdered(task.ordered).build()
}

global.getRandomWare = () => {
    let itemstack = getRandomOreWares()
    let random = Math.random()
    switch (true) {
        case random < 0.03:
            itemstack = getRandomEggWares()
            break
        case random < 0.06:
            itemstack = getRandomOrganWares()
            break
        case random < 0.12:
            itemstack = getRandomChallengeWares()
            break
        case random < 0.18:
            itemstack = getRandomSpecialWares()
            break
        case random < 0.3:
            itemstack = getRandomPotionWares()
            break
        default:
            itemstack = getRandomOreWares()
    }
    return itemstack
}

// ===== tumorAttriBute (从暗光 /utils/constdef.js 同步) ====
const tumorAttriButeByD8 = [
    { name: 'chestcavity:filtration', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:breath_recovery', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:nutrition', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:nerves', multi: 1, max: 5 },
    { name: 'chestcavity:strength', multi: 1, max: 5 },
    { name: 'chestcavity:breath_capacity', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:detoxification', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:speed', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:endurance', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:defense', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:digestion', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:metabolism', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:fire_resistant', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:knockback_resistant', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:water_breath', multi: 0.5, max: 2.5 },
    { name: 'chestcavity:burning_point', multi: 1, max: 8 },
    { name: 'chestcavity:freezing_point', multi: 1, max: 8 },
]

const tumorAttriButeByNeuron = [
    { name: 'chestcavity:filtration', multi: 0.5, max: 3 },
    { name: 'chestcavity:breath_recovery', multi: 0.5, max: 3 },
    { name: 'chestcavity:nutrition', multi: 0.5, max: 3 },
    { name: 'chestcavity:nerves', multi: 1, max: 6 },
    { name: 'chestcavity:strength', multi: 1, max: 6 },
    { name: 'chestcavity:breath_capacity', multi: 0.5, max: 3 },
    { name: 'chestcavity:detoxification', multi: 0.5, max: 3 },
    { name: 'chestcavity:speed', multi: 0.5, max: 3 },
    { name: 'chestcavity:endurance', multi: 0.5, max: 3 },
    { name: 'chestcavity:defense', multi: 0.5, max: 3 },
    { name: 'chestcavity:digestion', multi: 0.5, max: 3 },
    { name: 'chestcavity:metabolism', multi: 0.5, max: 3 },
    { name: 'chestcavity:fire_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:knockback_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:water_breath', multi: 0.5, max: 3 },
    { name: 'chestcavity:health', multi: 0.5, max: 3 },
    { name: 'chestcavity:burning_point', multi: 1, max: 10 },
    { name: 'chestcavity:freezing_point', multi: 1, max: 10 },
]

const coeVeinList = [
    'createoreexcavation:drilling/coal',
    'createoreexcavation:drilling/copper',
    'createoreexcavation:drilling/diamond',
    'createoreexcavation:drilling/emerald',
    'createoreexcavation:drilling/glowstone',
    'createoreexcavation:drilling/gold',
    'createoreexcavation:drilling/hardened_diamond',
    'createoreexcavation:drilling/iron',
    'createoreexcavation:drilling/quartz',
    'createoreexcavation:drilling/redstone',
    'createoreexcavation:drilling/zinc',
    'createoreexcavation:drilling/water',
    'kubejs:drilling_arcane',
    'kubejs:drilling_lapis',
    'kubejs:drilling_nether_gold',
    'kubejs:drilling_netherite',
    'kubejs:drilling_silver',
    'minecraft:extracting_lava_nether',
    'minecraft:extracting_quicksilver',
    'minecraft:extracting_lava_overworld',
]

const treasureDetectorTableMap = {
    'minecraft:overworld': {
        0: "minecraft:chests/abandoned_mineshaft",
        5: "minecraft:chests/simple_dungeon",
        10: "minecraft:chests/desert_pyramid",
        15: "minecraft:chests/buried_treasure",
        20: "minecraft:chests/ancient_city",
        25: "dungeons_arise:chests/aviary/aviary_treasure",
        '-1': "dungeons_arise:chests/foundry/foundry_treasure",
    },
    'minecraft:the_nether': {
        0: "minecraft:chests/nether_fortress/fort_inside_generic",
        8: "minecraft:chests/bastion_bridge",
        12: "minecraft:chests/bastion_treasure",
        '-1': "dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure",
    },
    'minecraft:the_end': {
        0: "minecraft:chests/end_city_treasure",
        '-1': "minecraft:chests/end_city_treasure",
    },
}

// ===== tagWorth (从暗光 /utils/constdef.js 同步) ====
const tagWorth = {
    '#kubejs:organ': 1,
    '#kubejs:stomach': 10,
    '#kubejs:eat_effect': 30,
    '#kubejs:infinity': 300,
    '#kubejs:damage_only': 100,
    '#kubejs:active_only': 100,
    '#kubejs:loot_entity_only': 500,
    '#kubejs:muscle': 10,
    '#kubejs:rose': 50,
    '#kubejs:active': 50,
    '#kubejs:heart': 50,
    '#kubejs:liver': 10,
    '#kubejs:kidney': 40,
    '#kubejs:machine': 30,
    '#kubejs:revolution': 50,
    '#kubejs:rclick_only': 80,
    '#kubejs:player_tick_only': 100,
    '#kubejs:lung': 40,
    '#kubejs:resource': 100,
    '#kubejs:key_pressed': 100,
    '#kubejs:spleen': 40,
    '#kubejs:player_tick': 30,
    '#kubejs:eat_effect_only': 60,
    '#kubejs:candy': 100,
    '#kubejs:pancreas': 30,
    '#kubejs:magic': 80,
    '#kubejs:overmagic_only': 100,
    '#kubejs:spine': 50,
    '#kubejs:bear': 90,
    '#kubejs:break_only': 70,
    '#kubejs:break': 50,
    '#kubejs:appendix': 100,
    '#kubejs:legends': 800,
    '#kubejs:evolution': 50,
    '#kubejs:bear_only': 150,
    '#kubejs:loot_chest_only': 500,
    '#kubejs:enchant_only': 400,
    '#kubejs:warp': 300,
    '#kubejs:organ_count_only': 70,
    '#kubejs:relics': 5,
    '#kubejs:rib': 20,
    '#kubejs:intestine': 15,
    '#kubejs:on_fire_check': 50,
    '#kubejs:auto_active': 100,
    '#kubejs:exclued_lucky_block': 77,
    '#kubejs:food': 30,
    '#kubejs:infected': -10,
    '#kubejs:fantasy': 5,
    '#kubejs:huge': 50,
    '#kubejs:prehistory': 100,
    '#kubejs:dragon': 500,
}
