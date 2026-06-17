// priority: 500
/**
 * 旧版 player_tick 策略迁移 — 适配新架构 OrganStrategyModel
 * 从脆骨症暗光/server_scripts/organ/player_tick.js 迁移
 */

// ======== entity_tick（非唯一） ========

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:machine_clockwork')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 20 != 0) return
            let count = player.persistentData.getInt(resourceCount)
            if (player.isSprinting()) {
                let speed = Math.floor(player.getSpeed() * 40)
                updateResourceCount(player, count + speed)
            } else if (count > 0) {
                updateResourceCount(player, count - 1)
            }
        })
)

// NOTE: kubejs:mantis_shrimp_fist 与 kubejs:egg_of_straddler 已迁移到
//       domain/organ/registry/organ/alex/mantis_shrimp_fist.js
//       domain/organ/registry/organ/alex/egg_of_straddler.js
//       此处不再注册，避免重复策略与多次叠加。

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_piece')
        .addStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 100 != 0) return
            try {
                let bodyTemp = ColdSweat.getTemperature(player, 'body')
                let coreTemp = ColdSweat.getTemperature(player, 'core')
                if (-25 < bodyTemp && bodyTemp < 25) {
                    ColdSweat.setTemperature(player, 'core', coreTemp - 1)
                }
            } catch (e) { /* ColdSweat not available */ }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_rib')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (!player.isPlayer()) return
            try {
                let temperature = ColdSweat.getTemperature(player, 'body')
                if (temperature > -50) return
                player.absorptionAmount = Math.min(player.absorptionAmount + 0.25, 20)
            } catch (e) { /* ColdSweat not available */ }
        })
)

// ======== entity_tick ONLY（唯一） ========

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:platelet_dispatcher')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.health != player.maxHealth && player.health > player.maxHealth * 0.75) {
                let filtration = player.getChestCavityInstance().organScores.getOrDefault(
                    new ResourceLocation('chestcavity', 'filtration'), 0
                )
                player.heal(Math.min(filtration / 4, 1))
            }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:sand_bone')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.level.getBlock(player.x, player.y - 1, player.z).id == 'minecraft:sand') {
                player.potionEffects.add('minecraft:speed', 20 * 3, 1)
            }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:tamagotchi')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 600 != 0) return
            if (Math.random() > 0.05) return
            player.potionEffects.add('kubejs:hungry_tamagotchi', 60 * 20, 0)
            player.tell(Text.gray(Text.translatable('kubejs.msg.tamagotchi.1')))
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:embers_liver')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 40 != 0) return
            if (!isPlayerOnFire(player)) return
            let amplifier = -1
            if (player.hasEffect('minecraft:strength')) {
                amplifier = player.getEffect('minecraft:strength').getAmplifier()
            }
            player.potionEffects.add('minecraft:strength', 8 * 20, Math.min(amplifier + 1, 4))
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:mini_vampire')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            let maxHealth = player.getMaxHealth()
            let health = player.getHealth()
            if (health < maxHealth * 0.1) {
                player.potionEffects.add('kubejs:vampiric', 20 * 3, 2)
            } else if (health < maxHealth * 0.2) {
                player.potionEffects.add('kubejs:vampiric', 20 * 3, 1)
            } else if (health < maxHealth * 0.3) {
                player.potionEffects.add('kubejs:vampiric', 20 * 3, 0)
            }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:vulcan_furnace')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            let count = player.persistentData.getInt(resourceCount)
            if (player.hasEffect('kubejs:burning_heart')) {
                let duration = player.getEffect('kubejs:burning_heart').getDuration()
                updateResourceCount(player, count + Math.floor(duration / 20))
            } else if (player.hasEffect('kubejs:flaring_heart')) {
                let amplifier = player.getEffect('kubejs:flaring_heart').getAmplifier()
                updateResourceCount(player, count + (amplifier + 1) * 20)
            }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:worm_neuron')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 200 != 0) return
            try {
                let temperature = ColdSweat.getTemperature(player, 'body')
                if (player.age % (600 - Math.floor(3 * temperature)) != 0) return
            } catch (e) { /* ColdSweat not available */ }
            try {
                if (player.nbt && player.nbt.ForgeCaps && player.nbt.ForgeCaps['goety:lichdom'] && player.nbt.ForgeCaps['goety:lichdom'].lichdom == 1) return
            } catch (e) { /* nbt path missing */ }
            let instance = player.getChestCavityInstance()
            if (!instance) return
            let randomIndex = Math.floor(Math.random() * 27)
            if (instance.inventory.getItem(randomIndex) != 'minecraft:air') return
            let typeMap = getPlayerChestCavityTypeMap(player)
            let itemMap = getPlayerChestCavityItemMap(player)
            if (!typeMap.has('kubejs:organ')) return
            let organCount = itemMap.size
            let tumor = Item.of('kubejs:random_tumor', { organData: {} })
            let amount = Math.floor(Math.random() * 2 + 1)
            for (let i = 0; i < amount; i++) {
                tumor.nbt.organData.put('chestcavity:health', Math.random() * 2 - 1)
            }
            instance.inventory.setItem(randomIndex, tumor)
            player.potionEffects.add('minecraft:hunger', 5 * 20, 4)
            initChestCavityIntoMap(player, false)
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:is_rabbit')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 1200 != 0) return
            try {
                const $SEHelper = Java.loadClass('com.yungnickyoung.minecraft.yungsapi.api.YungAutoReset')
                $SEHelper.setRestPeriod(player, 4800)
            } catch (e) { /* SOM not available */ }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_bell')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            let itemMap = getPlayerChestCavityItemMap(player)
            if (!itemMap.has('kubejs:revolution_steam_engine')) return
            if (!player.hasEffect('kubejs:burning_heart')) return
            let effect = player.getEffect('kubejs:burning_heart')
            if (effect.getDuration() > 20 * 5 || effect.getDuration() < 20 * 4) return
            revolSteamEngine(player)
            player.addItemCooldown(Item.of('minecraft:potion'), 20 * 20)
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:snow_queen_eternal_sorrow')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (player.age % 60 != 0) return
            try {
                let temp = ColdSweat.getTemperature(player, 'body')
                if (temp > -50) return
                ColdSweat.setTemperature(player, 'core', ColdSweat.getTemperature(player, 'core') + 10)
            } catch (e) { return }
            let entityList = getLivingWithinRadius(player.level, new Vec3(player.x, player.y, player.z), 5)
            let spellPower = player.getAttributeTotalValue('irons_spellbooks:ice_spell_power')
            entityList.forEach(e => {
                if (e.isPlayer()) return
                if (e.hasEffect('twilightforest:frosted')) {
                    let amplifier = e.getEffect('twilightforest:frosted').getAmplifier()
                    e.removeEffect('twilightforest:frosted')
                    if (amplifier < 4) {
                        e.potionEffects.add('twilightforest:frosted', 20 * 6, amplifier + 1)
                    } else {
                        e.setHealth(e.getHealth() / Math.min(spellPower / 4 + 1, 2))
                    }
                } else {
                    e.potionEffects.add('twilightforest:frosted', 20 * 6, 0)
                }
            })
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:flame_heart')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (!player.isPlayer()) return
            try {
                if (ColdSweat.getTemperature(player, 'body') > 50) {
                    let typeMap = getPlayerChestCavityTypeMap(player)
                    let amplifier = 0
                    if (typeMap.has('kubejs:flame')) {
                        amplifier = amplifier + typeMap.get('kubejs:flame').length
                    }
                    let value = Math.min(Math.max(Math.floor(amplifier * 0.5), 0), 8)
                    player.potionEffects.add('kubejs:overload', 30, value, false, false)
                }
            } catch (e) { /* ColdSweat not available */ }
        })
)

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_heart')
        .addOnlyStrategy('entity_tick', function(customData, event, organItem, organIndex, slotType) {
            let player = event.entity
            if (!player.isPlayer()) return
            try {
                if (ColdSweat.getTemperature(player, 'body') < -50) {
                    let typeMap = getPlayerChestCavityTypeMap(player)
                    let amplifier = 0
                    if (typeMap.has('kubejs:ice')) {
                        amplifier = amplifier + typeMap.get('kubejs:ice').length
                    }
                    let value = Math.min(Math.max(Math.floor(amplifier * 0.5), 0), 8)
                    player.potionEffects.add('kubejs:ice', 30, value, false, false)
                }
            } catch (e) { /* ColdSweat not available */ }
        })
)
