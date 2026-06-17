// priority: 500
// Alex Mobs 器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:warped_heart')
    .addScore('chestcavity:health', 2.0)
    .addScore('chestcavity:nerves', -0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:warped_spine')
    .addScore('chestcavity:nerves', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:feather')
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:defense', -1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:mollusk_muscle')
    .addScore('chestcavity:strength', 1.25)
    .addScore('chestcavity:speed', 0.375)
    .setCanSpawn(true)

RegistryOrgan('kubejs:giant_squid_whisker')
    .addScore('chestcavity:strength', 0.5)
    .addScore('chestcavity:speed', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:mimic_octopus_skin')
    .addScore('chestcavity:defense', 1.25)
    .addScore('chestcavity:speed', 0.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:fish_spine')
    .addScore('chestcavity:nerves', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:fish_bone')
    .addScore('chestcavity:defense', 0.75)
    .addScore('chestcavity:speed', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:fish_intestine')
    .addScore('chestcavity:digestion', 1.25)
    .setCanSpawn(true)
