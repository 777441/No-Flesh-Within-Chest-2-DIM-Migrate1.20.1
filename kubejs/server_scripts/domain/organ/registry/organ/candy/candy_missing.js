// priority: 500
// 缺失的糖果器官

RegistryOrgan('kubejs:candy_heart')
    .addScore('chestcavity:health', 1.75)
    .addScore('chestcavity:nutrition', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:candy_pancreas')
    .addScore('chestcavity:endurance', 1.5)
    .addScore('chestcavity:health', -0.5)
    .setCanSpawn(true)
