// priority: 500
// 其他行为器官策略 — 从旧 key_bind/active_effect 迁移

/**
 * wither_and_fall — 凋落之末
 * 按下主动技能：将血量降低到1点，根据最大生命值给予吸收或经验
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:wither_and_fall')
        .addOnlyStrategy('key_active', function(customData, event, organItem, organIndex, slotType) {
            const player = event.player
            player.setHealth(1)
            if (player.getMaxHealth() < 20) {
                player.absorptionAmount = Math.floor((20 - player.getMaxHealth()) * 2.5)
            } else {
                player.giveExperiencePoints(Math.floor(player.getMaxHealth() - 10))
            }
            player.addItemCooldown(organItem, 20 * 90)
        })
)

/**
 * creeper_appendix — 苦力怕阑尾
 * 按下主动技能：在自身位置引发爆炸
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:creeper_appendix')
        .addOnlyStrategy('key_active', function(customData, event, organItem, organIndex, slotType) {
            const player = event.player
            const level = event.level
            const cc = player.getChestCavityInstance()
            if (!cc) return
            const explosive = cc.organScores.getOrDefault(new ResourceLocation('chestcavity', 'explosive'), 0)
            const creepy = cc.organScores.getOrDefault(new ResourceLocation('chestcavity', 'creepy'), 0)
            let strength = Math.max(1, (explosive + creepy) * 2)
            let causesFire = false
            try {
                const temperature = ColdSweat.getTemperature(player, 'body')
                if (temperature > 0) {
                    strength = strength * 2
                    causesFire = true
                }
            } catch (e) { /* ColdSweat not available */ }
            level.explode(player, player.getX(), player.getY(), player.getZ(), Math.min(12, strength), causesFire ? $ExplosionInteraction.MOB : $ExplosionInteraction.NONE)
            player.addItemCooldown(organItem, 20 * (1 + Math.floor(strength)))
        })
)

/**
 * excited_appendix — 激发式阑尾
 * 按下主动技能：给予一触即发效果
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:excited_appendix')
        .addOnlyStrategy('key_active', function(customData, event, organItem, organIndex, slotType) {
            const player = event.player
            const cc = player.getChestCavityInstance()
            if (!cc) return
            const explosive = cc.organScores.getOrDefault(new ResourceLocation('chestcavity', 'explosive'), 0)
            const creepy = cc.organScores.getOrDefault(new ResourceLocation('chestcavity', 'creepy'), 0)
            const amplifier = Math.max(0, Math.min(2, Math.floor(explosive * 0.2)))
            const duration = Math.max(5, creepy * 10)
            let cooldown = 120
            // 检查胸腔内的火药/TNT
            const posMap = getPlayerChestCavityPosMap(player)
            if (posMap) {
                posMap.forEach((organ, slot) => {
                    if (String(organ.id) == 'minecraft:gunpowder') cooldown -= 5
                    if (String(organ.id) == 'minecraft:tnt') cooldown -= 10
                })
            }
            player.potionEffects.add('goety:explosive', Math.max(60, 20 * duration), amplifier, false, false)
            player.addItemCooldown(organItem, Math.max(20 * 10, 20 * Math.max(10, cooldown)))
        })
)

/**
 * blood_crystal — 鲜血水晶
 * 按下主动技能：负面效果减半，正面效果翻倍
 */
RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:blood_crystal')
        .addOnlyStrategy('key_active', function(customData, event, organItem, organIndex, slotType) {
            const player = event.player
            player.potionEffects.active.forEach(ctx => {
                const effect = ctx.getEffect()
                const duration = ctx.getDuration()
                const amplifier = ctx.getAmplifier()
                if (effect.isBeneficial()) {
                    player.removeEffect(effect)
                    player.potionEffects.add(effect, Math.min(20 * 180, duration * 2), Math.max(0, amplifier - 1), false, false)
                } else if (effect.isHarmful()) {
                    player.removeEffect(effect)
                    player.potionEffects.add(effect, Math.max(1, duration / 2), amplifier + 1, false, false)
                }
            })
            player.addItemCooldown(organItem, 20 * 120)
        })
)
