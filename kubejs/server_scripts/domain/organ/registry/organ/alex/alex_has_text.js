// priority: 500
// Alex Mobs 器官 — 有文本，无行为策略

RegistryOrgan('kubejs:tusk')
    .addScore('chestcavity:defense', 2)
    .addScore('chestcavity:strength', 0.5)
    .addScore('chestcavity:speed', -0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:soul_vulture_feather')
    .addScore('chestcavity:buoyant', 1)
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:strength', -1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:fossil_gallbladder')
    .addScore('chestcavity:strength', 2)
    .addScore('chestcavity:leaping', -0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:weird_paperman')
    .addScore('chestcavity:health', -0.5)
    .addScore('chestcavity:breath_recovery', -1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:mosquito_repellent')
    .addScore('chestcavity:fire_resistant', 1.25)
    .addScore('chestcavity:strength', 1)
    .setCanSpawn(true)
