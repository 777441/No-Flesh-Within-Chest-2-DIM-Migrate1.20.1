// priority: 500
// 金器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:lung_gold')
    .addScore('chestcavity:breath_recovery', 1.5)
    .addScore('chestcavity:breath_capacity', 1.5)
    .addScore('chestcavity:endurance', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:muscle_gold')
    .addScore('chestcavity:strength', 1.5)
    .addScore('chestcavity:speed', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:heart_gold')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:burning_point', 12)
    .addScore('chestcavity:freezing_point', -12)
    .setCanSpawn(true)

RegistryOrgan('kubejs:intestine_gold')
    .addScore('chestcavity:nutrition', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:rib_gold')
    .addScore('chestcavity:defense', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spine_gold')
    .addScore('chestcavity:defense', 0.75)
    .addScore('chestcavity:nerves', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:spleen_gold')
    .addScore('chestcavity:metabolism', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:stomach_gold')
    .addScore('chestcavity:digestion', 1.5)
    .addScore('chestcavity:burning_point', -3)
    .addScore('chestcavity:freezing_point', 3)
    .setCanSpawn(true)

RegistryOrgan('kubejs:kidney_gold')
    .addScore('chestcavity:filtration', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:liver_gold')
    .addScore('chestcavity:detoxification', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:appendix_gold')
    .addScore('chestcavity:luck', 1.5)
    .setCanSpawn(true)
