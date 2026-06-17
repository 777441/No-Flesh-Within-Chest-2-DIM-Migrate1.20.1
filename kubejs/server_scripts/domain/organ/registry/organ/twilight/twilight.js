// priority: 500
// 暮色森林器官

RegistryOrgan('kubejs:snow_monster_core')
    .addScore('chestcavity:health', 1.5)
    .setCanSpawn(true)

/**
 * 右键雪球 → 发射寒冰弹
 * @param {OrganEventCustomData} customData
 * @param {Internal.ItemClickedEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SnowMonsterCoreItemRightClicked(customData, event, organItem, organIndex, slotType) {
    let player = event.player
    let level = player.level
    if (event.item.id != 'minecraft:snowball') return
    event.item.shrink(1)
    player.swing()
    let rayY = Math.sin(-player.xRot / 180 * JavaMath.PI)
    let rayZ = Math.cos(-player.xRot / 180 * JavaMath.PI) * Math.cos(-player.yRot / 180 * JavaMath.PI)
    let rayX = Math.cos(-player.xRot / 180 * JavaMath.PI) * Math.sin(-player.yRot / 180 * JavaMath.PI)
    let iceBomb = level.createEntity('twilightforest:thrown_ice')
    iceBomb.setPosition(player.x, player.y + 1, player.z)
    iceBomb.setOwner(player)
    iceBomb.setMotion(rayX, rayY, rayZ)
    iceBomb.spawn()
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:snow_monster_core')
        .addOnlyStrategy('item_right_clicked', SnowMonsterCoreItemRightClicked)
)

RegistryOrgan('kubejs:etched_paper')
    .addScore('chestcavity:defense', 0.25)
    .addScore('chestcavity:buoyant', 0.5)
    .addScore('chestcavity:fire_resistant', -5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:cloud_pyramid')
    .addScore('chestcavity:defense', -1)
    .addScore('chestcavity:buoyant', 1)
    .addScore('chestcavity:hydroallergenic', 1)
    .setCanSpawn(true)

RegistryOrgan('kubejs:minotaur_muscle')
    .addScore('chestcavity:strength', 1.5)
    .addScore('chestcavity:speed', 1.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function MinotaurMuscleEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity || entity.isPlayer()) return
    if (event.source.type != 'player') return
    if (entity.attributes.hasAttribute('minecraft:generic.knockback_resistance')) {
        let originResistance = entity.getAttribute('minecraft:generic.knockback_resistance').getValue()
        entity.server.scheduleInTicks(1, () => {
            entity.setAttributeBaseValue('minecraft:generic.knockback_resistance', originResistance)
        })
        entity.setAttributeBaseValue('minecraft:generic.knockback_resistance', 10)
    }
    entity.addMotion(0, 3, 0)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:minotaur_muscle')
        .addOnlyStrategy('entity_do_damage', MinotaurMuscleEntityDoDamage)
)

RegistryOrgan('kubejs:questing_ram_answer')
    .addScore('chestcavity:nerves', 2)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function QuestingRamAnswerEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const player = event.source.player
    if (!player || entity.isPlayer() || event.source.type != 'player') return
    const temperature = $Temperature.getTemperature(player, $Trait.BODY)
    if (temperature > 50) {
        const degree = (event.amount - 5) / 3 + temperature / 3
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'flaming_strike'), degree, player, false)
        entity.setNoAI(true)
        entity.server.scheduleInTicks(1, () => entity.setNoAI(false))
    }
    if (temperature < -50) {
        const degree = (event.amount - 6) * 2 - temperature * 2
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'icicle'), degree, player, false)
        entity.setNoAI(true)
        entity.server.scheduleInTicks(1, () => entity.setNoAI(false))
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:questing_ram_answer')
        .addOnlyStrategy('entity_do_damage', QuestingRamAnswerEntityDoDamage)
)

RegistryOrgan('kubejs:knightphantom_ghost')
    .addScore('chestcavity:health', -0.25)
    .addScore('chestcavity:speed', 1.5)
    .addScore('chestcavity:buoyant', 1.5)
    .addScore('chestcavity:nerves', 1.5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:energetic_naga_scale')
    .addScore('chestcavity:strength', 3)
    .addScore('chestcavity:speed', 2)
    .addScore('chestcavity:defense', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:twilight_broken_lich_crown')
    .addScore('chestcavity:nerves', 2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:armor_with_gaze')
    .addScore('chestcavity:health', 2)
    .addScore('chestcavity:defense', 5)
    .setCanSpawn(true)

RegistryOrgan('kubejs:minoshroom_totem')
    .addScore('chestcavity:strength', 2)
    .addScore('chestcavity:speed', 1)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function MinoshroomTotemEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const player = event.source.player
    if (!player || event.source.type != 'player') return
    if (player.getCooldowns().isOnCooldown(organItem)) return
    let entityList = entity.level.getEntitiesWithin(new AABB.of(entity.x - 6, entity.y - 6, entity.z - 6, entity.x + 6, entity.y + 6, entity.z + 6))
    event.amount = event.amount / 2
    entityList.forEach(e => {
        if (e.type == 'minecraft:cow') {
            let mooshroom = entity.level.createEntity('minecraft:mooshroom')
            mooshroom.moveTo(e.position())
            mooshroom.spawn()
            e.discard()
        } else if (!e.isPlayer() && e.isAttackable()) {
            e.invulnerableTime = 0
            e.attack($DamageSource.OUT_OF_WORLD, Math.min(player.getAttributeTotalValue('minecraft:generic.attack_damage') / 2, 5))
        }
    })
    player.addItemCooldown(organItem, 10)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:minoshroom_totem')
        .addOnlyStrategy('entity_do_damage', MinoshroomTotemEntityDoDamage)
)

RegistryOrgan('kubejs:carminite_reactor_core')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:filtration', -2)
    .setCanSpawn(true)

RegistryOrgan('kubejs:snow_queen_eternal_sorrow')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:buoyant', 1.5)
    .addScore('chestcavity:nerves', 1.5)
    .addScore('chestcavity:freezing_point', -40)
    .setCanSpawn(true)
