// priority: 500
// Alex Mobs 器官 — 有行为策略
// 注意：部分行为依赖旧 API（key_pressed/player_tick/active_only），
// 新架构中需对应到 key_active/chest_cavity_update/organ_take_on 等策略

// --- sunbird_crystals: key_pressed + damage_only ---
RegistryOrgan('kubejs:sunbird_crystals')
    .addScore('chestcavity:health', 1)
    .setCanSpawn(true)

// --- enderiophage_heart: key_pressed, heart ---
RegistryOrgan('kubejs:enderiophage_heart')
    .addScore('chestcavity:hydrophobia', 1)
    .addScore('chestcavity:health', 0.5)
    .addScore('chestcavity:metabolism', 1.25)
    .setCanSpawn(true)

// --- whale_lung: active_only (ctrl), lung ---
RegistryOrgan('kubejs:whale_lung')
    .addScore('chestcavity:breath_capacity', 2.5)
    .addScore('chestcavity:water_breath', 0.5)
    .addScore('chestcavity:breath_recovery', 1)
    .setCanSpawn(true)

// --- mantis_shrimp_fist: player_tick, muscle ---
RegistryOrgan('kubejs:mantis_shrimp_fist')
    .addScore('chestcavity:strength', 2)
    .addScore('chestcavity:speed', -0.5)
    .setCanSpawn(true)

// --- egg_of_straddler: player_tick ---
RegistryOrgan('kubejs:egg_of_straddler')
    .addScore('chestcavity:metabolism', 1.75)
    .addScore('chestcavity:launching', 0.5)
    .addScore('chestcavity:leaping', 0.5)
    .setCanSpawn(true)

// --- potoo_beak: key_pressed ---
RegistryOrgan('kubejs:potoo_beak')
    .addScore('chestcavity:strength', 1.25)
    .addScore('chestcavity:speed', 1.0)
    .setCanSpawn(true)

// --- viviparous_crinoidea: key_pressed, fantasy ---
RegistryOrgan('kubejs:viviparous_crinoidea')
    .addScore('chestcavity:hydrophobia', -3)
    .addScore('chestcavity:hydroallergenic', -3)
    .addScore('chestcavity:strength', -0.5)
    .setCanSpawn(true)

// --- treasure_detector_feather: key_pressed ---
RegistryOrgan('kubejs:treasure_detector_feather')
    .addScore('chestcavity:luck', 1.5)
    .setCanSpawn(true)
