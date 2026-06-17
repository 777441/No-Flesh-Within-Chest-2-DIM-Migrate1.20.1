// priority: 500
// 缺失的禁忌器官

RegistryOrgan('kubejs:the_third_eye')
    .addScore('chestcavity:nerves', 0.5)
    .addScore('chestcavity:luck', -1.5)
    .addScore('chestcavity:crystalsynthesis', 0.25)
    .setCanSpawn(true)

RegistryOrgan('kubejs:fish_in_warp')
    .addScore('chestcavity:speed', 0.5)
    .addScore('chestcavity:endurance', 0.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:disenchantment_paper')
    .addScore('chestcavity:health', -0.5)
    .addScore('chestcavity:nerves', -0.5)
    .addScore('chestcavity:speed', -2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:warp_bubble')
    .addScore('chestcavity:breath_recovery', -1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:pandora_active')
    .addScore('chestcavity:crystalsynthesis', 0.25)
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:endurance', 1)
    .setCanSpawn(true)
