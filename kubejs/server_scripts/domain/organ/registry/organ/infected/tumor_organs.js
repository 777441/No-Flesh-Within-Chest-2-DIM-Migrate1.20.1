// priority: 500
// 感染系列 - 肿瘤器官

// 未成瘤器官
RegistryOrgan('kubejs:unformed_tumor')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:defense', 0.25)
    .setCanSpawn(true)

// 玫瑰瘤
RegistryOrgan('kubejs:rosy_tumor')
    .addScore('chestcavity:health', 0.5)
    .addScore('chestcavity:endurance', 0.5)
    .addScore('kubejs:rosy', 1)
    .setCanSpawn(true)

// 寄生瘤
RegistryOrgan('kubejs:parasitic_tumor')
    .addScore('chestcavity:strength', 1)
    .addScore('chestcavity:endurance', 1)
    .addScore('chestcavity:speed', -0.5)
    .setCanSpawn(true)

// 失活神经元瘤
RegistryOrgan('kubejs:inactivated_neuron_tumor')
    .addScore('chestcavity:nerves', 2)
    .addScore('chestcavity:defense', 1)
    .setCanSpawn(true)
