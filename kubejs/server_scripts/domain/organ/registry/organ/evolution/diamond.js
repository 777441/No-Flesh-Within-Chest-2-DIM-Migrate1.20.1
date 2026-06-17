// priority: 500
// 钻石器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:lung_diamond')
    .addScore('chestcavity:breath_recovery', 2)
    .addScore('chestcavity:breath_capacity', 2)
    .addScore('chestcavity:endurance', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:muscle_diamond')
    .addScore('chestcavity:strength', 2)
    .addScore('chestcavity:speed', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:heart_diamond')
    .addScore('chestcavity:health', 2)
    .addScore('chestcavity:burning_point', 15)
    .addScore('chestcavity:freezing_point', -15)
    .setCanSpawn(true)

RegistryOrgan('kubejs:intestine_diamond')
    .addScore('chestcavity:nutrition', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:rib_diamond')
    .addScore('chestcavity:defense', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spine_diamond')
    .addScore('chestcavity:defense', 1)
    .addScore('chestcavity:nerves', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spleen_diamond')
    .addScore('chestcavity:metabolism', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:stomach_diamond')
    .addScore('chestcavity:digestion', 2)
    .addScore('chestcavity:freezing_point', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:kidney_diamond')
    .addScore('chestcavity:filtration', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:liver_diamond')
    .addScore('chestcavity:detoxification', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:appendix_diamond')
    .addScore('chestcavity:luck', 2)
    .setCanSpawn(true)
