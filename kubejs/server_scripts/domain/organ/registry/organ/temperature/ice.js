// priority: 500
// 冰霜器官 — 温度依赖

RegistryOrgan('kubejs:ice_heart')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:burning_point', -15)
    .addScore('chestcavity:freezing_point', -80)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_rib')
    .addScore('chestcavity:defense', 1.5)
    .addScore('chestcavity:freezing_point', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_lung')
    .addScore('chestcavity:breath_recovery', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_intestine')
    .addScore('chestcavity:digestion', 1.25)
    .addScore('chestcavity:nutrition', 1.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:ice_piece')
    .addScore('chestcavity:nerves', 0.25)
    .setCanSpawn(true)
