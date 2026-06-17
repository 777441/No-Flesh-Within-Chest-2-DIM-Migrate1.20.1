// priority: 500
// 铁器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:lung_iron')
    .addScore('chestcavity:breath_recovery', 1.25)
    .addScore('chestcavity:breath_capacity', 1.25)
    .addScore('chestcavity:endurance', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:muscle_iron')
    .addScore('chestcavity:strength', 1.25)
    .addScore('chestcavity:speed', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:heart_iron')
    .addScore('chestcavity:health', 1.25)
    .addScore('chestcavity:burning_point', 8)
    .addScore('chestcavity:freezing_point', -8)
    .setCanSpawn(true)

RegistryOrgan('kubejs:intestine_iron')
    .addScore('chestcavity:nutrition', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:rib_iron')
    .addScore('chestcavity:defense', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spine_iron')
    .addScore('chestcavity:defense', 0.625)
    .addScore('chestcavity:nerves', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spleen_iron')
    .addScore('chestcavity:metabolism', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:stomach_iron')
    .addScore('chestcavity:digestion', 1.25)
    .addScore('chestcavity:burning_point', -5)
    .addScore('chestcavity:freezing_point', 5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:kidney_iron')
    .addScore('chestcavity:filtration', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:liver_iron')
    .addScore('chestcavity:detoxification', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:appendix_iron')
    .addScore('chestcavity:luck', 1.25)
    .setCanSpawn(true)
