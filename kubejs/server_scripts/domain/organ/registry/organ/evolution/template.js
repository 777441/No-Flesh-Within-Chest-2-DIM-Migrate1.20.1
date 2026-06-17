// priority: 500
// 模板器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:lung_template')
    .addScore('chestcavity:breath_recovery', 0.75)
    .addScore('chestcavity:breath_capacity', 0.75)
    .addScore('chestcavity:endurance', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:muscle_template')
    .addScore('chestcavity:strength', 0.75)
    .addScore('chestcavity:speed', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:heart_template')
    .addScore('chestcavity:health', 0.75)
    .addScore('chestcavity:burning_point', 6)
    .addScore('chestcavity:freezing_point', -6)
    .setCanSpawn(true)

RegistryOrgan('kubejs:intestine_template')
    .addScore('chestcavity:nutrition', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:rib_template')
    .addScore('chestcavity:defense', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spine_template')
    .addScore('chestcavity:defense', 0.375)
    .addScore('chestcavity:nerves', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spleen_template')
    .addScore('chestcavity:metabolism', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:stomach_template')
    .addScore('chestcavity:digestion', 0.75)
    .addScore('chestcavity:burning_point', -6)
    .addScore('chestcavity:freezing_point', 6)
    .setCanSpawn(true)

RegistryOrgan('kubejs:kidney_template')
    .addScore('chestcavity:filtration', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:liver_template')
    .addScore('chestcavity:detoxification', 0.75)
    .setCanSpawn(true)

RegistryOrgan('kubejs:appendix_template')
    .addScore('chestcavity:luck', 0.75)
    .setCanSpawn(true)
