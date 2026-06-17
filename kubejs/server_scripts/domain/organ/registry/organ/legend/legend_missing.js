// priority: 500
// 缺失的传说器官

RegistryOrgan('kubejs:lost_paradise')
    .addScore('chestcavity:health', 4)
    .addScore('chestcavity:strength', 4)
    .addScore('chestcavity:nerves', 2)
    .addScore('chestcavity:speed', -1)
    .addScore('chestcavity:endurance', -1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:paradise_regained')
    .addScore('chestcavity:health', -1)
    .addScore('chestcavity:strength', -1)
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:endurance', 1)
    .setCanSpawn(true)
