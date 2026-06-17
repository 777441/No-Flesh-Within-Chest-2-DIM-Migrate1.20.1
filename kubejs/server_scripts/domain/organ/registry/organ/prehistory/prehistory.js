// priority: 500
// 远古器官 — 纯分数，无行为策略

RegistryOrgan('kubejs:prehistory_lung')
    .addScore('chestcavity:breath_recovery', 1.25)
    .addScore('chestcavity:breath_capacity', 1.25)
    .addScore('chestcavity:endurance', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_muscle')
    .addScore('chestcavity:strength', 1.25)
    .addScore('chestcavity:speed', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_heart')
    .addScore('chestcavity:health', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_intestine')
    .addScore('chestcavity:nutrition', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_rib')
    .addScore('chestcavity:defense', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_spine')
    .addScore('chestcavity:defense', 0.625)
    .addScore('chestcavity:nerves', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_spleen')
    .addScore('chestcavity:metabolism', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_stomach')
    .addScore('chestcavity:digestion', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_kidney')
    .addScore('chestcavity:filtration', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_liver')
    .addScore('chestcavity:detoxification', 1.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:prehistory_appendix')
    .addScore('chestcavity:luck', 1.25)
    .setCanSpawn(true)
