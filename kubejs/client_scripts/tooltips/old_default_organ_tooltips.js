// priority: 500
// 旧版 client_scripts/default_organ_tooltips.js 迁移 — 默认器官分数Tooltip框架
function DefaultOrgan(itemID) {
    this.itemID = itemID
    this.pseudoOrgan = false
    this.organScores = []
    this.defaultTextLines = []
    this.shiftTextLines = []
    this.ctrlTextLines = []
    this.altTextLines = []
}

DefaultOrgan.prototype = {
    addScore: function (score, value) {
        this.organScores.push({ 'id': `chestcavity:${score}`, 'value': value })
        return this
    },
    build: function () {
        this.organScores.forEach(score => {
            let value = score.value
            let typeName = global.SCORE_MAP[score.id]
            this.shiftTextLines.push([LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.organ_score.1")), Text.yellow(String(value)), Text.gray(Text.translatable("kubejs.tooltips.organ_score.2")), Text.yellow(typeName)])
        })
        return this
    },
    setPseudo: function (boolean) {
        this.pseudoOrgan = boolean
        return this
    },
}

ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvancedToAll((item, advanced, text) => {
        if (!item.nbt?.organData) return
        text.removeIf(e => {
            if (e.getString() == "removeFlag") return true;
            return false;
        })
        let lineNum = 1
        switch (true) {
            case tooltip.shift:
                let organData = item.nbt.organData
                lineNum = 1
                organData.allKeys.forEach(key => {
                    let value = organData[key]
                    let typeName = global.SCORE_MAP[key]
                    text.add(lineNum, [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.organ_score.1")), Text.yellow(String(value)), Text.gray(Text.translatable("kubejs.tooltips.organ_score.2")), Text.yellow(typeName)]);
                    lineNum++
                })
                break;
            default:
                lineNum = 1;
                let tagList = item.getTags().toArray()
                let typeLine = []
                for (let i = 0; i < tagList.length; i++) {
                    let tag = tagList[i].location()
                    if (tag.getNamespace() != 'kubejs') continue
                    tag = String(tag)
                    if (!global.TYPE_MAP[tag]) continue
                    typeLine.push(global.TYPE_MAP[tag], ' ')
                }
                if (typeLine.length > 0) {
                    text.add(lineNum++, [LEADING_SYMBOL, Text.join(typeLine)])
                }
                text.add(lineNum++, [
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).gold(),
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.4")).yellow().bold(),
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.5")).gold(),
                ]);
        }
    })

    /**
     * @param {DefaultOrgan} organ
     */
    function registerDefaultOrganToolTips(organ) {
        tooltip.addAdvanced(organ.itemID, (item, advanced, text) => {
            text.removeIf(e => {
                if (e.getString() == "removeFlag") return true;
                return false;
            })
            switch (true) {
                case tooltip.shift:
                    addForTextLines(text, organ.shiftTextLines, 1);
                    break;
                case tooltip.ctrl:
                    addForTextLines(text, organ.ctrlTextLines, 1);
                    break;
                case tooltip.alt:
                    addForTextLines(text, organ.altTextLines, 1);
                    break;
                default:
                    let lineNum = 1;
                    let tagList = item.getTags().toArray()
                    let typeLine = []
                    for (let i = 0; i < tagList.length; i++) {
                        let tag = tagList[i].location()
                        if (tag.getNamespace() != 'kubejs') continue
                        tag = String(tag)
                        if (!global.TYPE_MAP[tag]) continue
                        typeLine.push(global.TYPE_MAP[tag], ' ')
                    }
                    if (typeLine.length > 0) {
                        text.add(lineNum++, [LEADING_SYMBOL, Text.join(typeLine)])
                    }

                    lineNum = addForTextLines(text, organ.defaultTextLines, lineNum);
                    if (organ.shiftTextLines && organ.shiftTextLines.length != 0 && !organ.pseudoOrgan) {
                        text.add(lineNum++, [Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).gold(), Text.of(Text.translatable("kubejs.tooltips.organ_score.4")).yellow().bold(), Text.of(Text.translatable("kubejs.tooltips.organ_score.5")).gold()])
                    }
                    if (organ.ctrlTextLines && organ.ctrlTextLines.length != 0 && !organ.pseudoOrgan) {
                        text.add(lineNum++, [Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).aqua(), Text.of(Text.translatable("kubejs.tooltips.organ_score.6")).yellow().bold(), Text.of(Text.translatable("kubejs.tooltips.organ_score.7")).aqua()])
                    }
                    if (organ.altTextLines && organ.altTextLines.length != 0 && !organ.pseudoOrgan) {
                        text.add(lineNum++, [Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).red(), Text.of(Text.translatable("kubejs.tooltips.organ_score.8")).yellow().bold(), Text.of(Text.translatable("kubejs.tooltips.organ_score.9")).red()])
                    }
            }
        });
    }

    const defaultOrgans = [
        ['chestcavity:venom_gland', [['venomous', 1]]],
        ['chestcavity:insect_muscle', [['strength', 0.5], ['speed', 1.25]]],
        ['chestcavity:silk_gland', [['silk', 1]]],
        ['chestcavity:insect_intestine', [['nutrition', 0.5], ['digestion', 0.25], ['detoxification', 0.25]]],
        ['chestcavity:insect_lung', [['breath_recovery', 0.75], ['breath_capacity', 0.75], ['endurance', 0.75], ['metabolism', 0.25]]],
        ['chestcavity:insect_stomach', [['digestion', 0.5], ['nutrition', 0.25], ['metabolism', 0.25]]],
        ['chestcavity:insect_heart', [['health', 0.5], ['filtration', 0.5]]],
        ['chestcavity:insect_caeca', [['nutrition', 0.5], ['digestion', 0.25], ['nerves', 0.5]]],
        ['chestcavity:ender_muscle', [['strength', 1.25], ['speed', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_spleen', [['metabolism', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_appendix', [['luck', 1.25], ['arrow_dodging', 1], ['hydroallergenic', 1]]],
        ['chestcavity:ender_kidney', [['filtration', 1], ['hydroallergenic', 1], ['hydrophobia', 1]]],
        ['chestcavity:ender_liver', [['detoxification', 1], ['hydroallergenic', 1]]],
        ['chestcavity:ender_rib', [['defense', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_intestine', [['nutrition', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_lung', [['breath_recovery', 1.25], ['breath_capacity', 1.25], ['endurance', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_stomach', [['digestion', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_heart', [['health', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:ender_spine', [['defense', 0.625], ['nerves', 1.25], ['hydroallergenic', 1]]],
        ['chestcavity:blaze_core', [['health', 1], ['nerves', 0.25], ['fire_resistant', 1], ['hydroallergenic', 3]]],
        ['chestcavity:blaze_shell', [['defense', 1], ['fire_resistant', 1], ['hydroallergenic', 3]]],
        ['chestcavity:active_blaze_rod', [['pyromancy', 3], ['fire_resistant', 1], ['hydroallergenic', 3]]],
        ['chestcavity:shulker_spleen', [['metabolism', 0.75], ['shulker_bullets', 1]]],
        ['chestcavity:creeper_appendix', [['luck', 0.75], ['creepy', 1], ['explosive', 1]]],
        ['chestcavity:saltwater_muscle', [['strength', 1], ['speed', 1], ['swim_speed', 0.5], ['fire_resistant', -0.5]]],
        ['chestcavity:saltwater_heart', [['health', 1], ['water_breath', 0.5], ['fire_resistant', -1]]],
        ['chestcavity:shifting_leaves', [['speed', 1], ['photosynthesis', 1]]],
        ['chestcavity:volatile_stomach', [['digestion', 0.5], ['ghastly', 1], ['fire_resistant', 1]]],
        ['chestcavity:saltwater_lung', [['breath_recovery', 1], ['breath_capacity', 1], ['endurance', 1], ['water_breath', 0.5], ['fire_resistant', -1]]],
        ['chestcavity:gas_bladder', [['breath_capacity', 1.5], ['buoyant', 1], ['fire_resistant', 1]]],
        ['chestcavity:withered_rib', [['defense', 0.5], ['withered', 0.5]]],
        ['chestcavity:writhing_soulsand', [['strength', 1.5], ['speed', 0.5]]],
        ['chestcavity:withered_spine', [['defense', 0.25], ['nerves', 0.5], ['withered', 0.5]]],
        ['chestcavity:dragon_muscle', [['strength', 0.5], ['speed', 1.5], ['launching', 1], ['endurance', -0.25]]],
        ['chestcavity:dragon_spleen', [['metabolism', 1.5], ['endurance', -0.5]]],
        ['chestcavity:dragon_appendix', [['luck', 0.75], ['dragon_bombs', 1]]],
        ['chestcavity:dragon_kidney', [['filtration', 1.5], ['buff_purging', 1]]],
        ['chestcavity:dragon_liver', [['detoxification', 1.5], ['buff_purging', 1]]],
        ['chestcavity:dragon_rib', [['defense', 1], ['impact_resistant', 1], ['endurance', -0.25]]],
        ['chestcavity:dragon_lung', [['breath_recovery', 1.25], ['breath_capacity', 0.25], ['endurance', 0.75], ['dragon_breath', 1]]],
        ['chestcavity:dragon_heart', [['health', 1.5], ['endurance', -0.5]]],
        ['chestcavity:dragon_spine', [['defense', 0.5], ['nerves', 1], ['impact_resistant', 1], ['endurance', -0.25]]],
        ['chestcavity:mana_reactor', [['crystalsynthesis', 1]]],
        ['chestcavity:gills', [['water_breath', 1], ['breath_capacity', 1], ['endurance', 1]]],
        ['kubejs:animal_muscle', [['strength', 0.75], ['speed', 0.75]]],
        ['kubejs:fireproof_lung', [['breath_recovery', 0.75], ['breath_capacity', 0.75], ['endurance', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:aquatic_muscle', [['strength', 1], ['speed', 0.5], ['swim_speed', 1]]],
        ['kubejs:animal_spleen', [['metabolism', 0.75]]],
        ['chestcavity:fish_muscle', [['strength', 0.75], ['speed', 0.25], ['swim_speed', 0.75]]],
        ['chestcavity:herbivore_stomach', [['herbivorous_digestion', 1.25], ['carnivorous_digestion', 0.25]]],
        ['chestcavity:swift_muscle', [['strength', 0.75], ['speed', 1.25]]],
        ['chestcavity:herbivore_intestine', [['herbivorous_nutrition', 1.25], ['carnivorous_nutrition', 0.25]]],
        ['kubejs:fireproof_appendix', [['luck', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:llama_lung', [['breath_recovery', 0.75], ['breath_capacity', 0.75], ['endurance', 0.75], ['forceful_spit', 1]]],
        ['kubejs:fireproof_kidney', [['filtration', 0.75], ['fire_resistant', 1]]],
        ['kubejs:fireproof_spleen', [['metabolism', 0.75], ['fire_resistant', 1]]],
        ['kubejs:animal_appendix', [['luck', 0.75]]],
        ['kubejs:animal_kidney', [['filtration', 0.75]]],
        ['kubejs:animal_liver', [['detoxification', 0.75]]],
        ['kubejs:animal_rib', [['defense', 0.75]]],
        ['kubejs:fireproof_stomach', [['digestion', 0.75], ['fire_resistant', 1]]],
        ['kubejs:fireproof_rib', [['defense', 0.75], ['fire_resistant', 1]]],
        ['kubejs:animal_intestine', [['nutrition', 0.75]]],
        ['kubejs:fireproof_heart', [['health', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:springy_muscle', [['strength', 0.75], ['speed', 0.75], ['leaping', 1]]],
        ['kubejs:animal_lung', [['breath_recovery', 0.75], ['breath_capacity', 0.75], ['endurance', 0.75]]],
        ['chestcavity:herbivore_rumen', [['herbivorous_digestion', 1], ['carnivorous_digestion', -0.5], ['grazing', 1]]],
        ['kubejs:animal_stomach', [['digestion', 0.75]]],
        ['kubejs:animal_heart', [['health', 0.75]]],
        ['chestcavity:carnivore_stomach', [['carnivorous_digestion', 1.25], ['herbivorous_digestion', 0.25]]],
        ['kubejs:fireproof_spine', [['defense', 0.375], ['nerves', 0.75], ['fire_resistant', 1]]],
        ['kubejs:animal_spine', [['defense', 0.375], ['nerves', 0.75]]],
        ['kubejs:fireproof_muscle', [['strength', 0.75], ['speed', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:carnivore_intestine', [['carnivorous_nutrition', 1.25], ['herbivorous_nutrition', 0.25]]],
        ['kubejs:fireproof_liver', [['detoxification', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:brutish_muscle', [['strength', 1.25], ['speed', 0.75]]],
        ['kubejs:fireproof_intestine', [['nutrition', 0.75], ['fire_resistant', 1]]],
        ['chestcavity:rotten_muscle', [['strength', 0.5], ['speed', 0.5]]],
        ['chestcavity:rotten_spleen', [['metabolism', 0.5]]],
        ['chestcavity:rotten_appendix', [['luck', 0.5]]],
        ['chestcavity:rotten_kidney', [['filtration', 0.5]]],
        ['chestcavity:rotten_liver', [['detoxification', 0.5]]],
        ['chestcavity:rotten_rib', [['defense', 0.5]]],
        ['chestcavity:rotten_intestine', [['nutrition', 0.5], ['rotgut', 1]]],
        ['chestcavity:rotten_lung', [['breath_recovery', 0.5], ['breath_capacity', 0.5], ['endurance', 0.5]]],
        ['chestcavity:rotten_stomach', [['digestion', 0.5], ['rot_digestion', 1]]],
        ['chestcavity:rotten_heart', [['health', 0.5]]],
        ['chestcavity:rotten_spine', [['defense', 0.25], ['nerves', 0.5]]],
        ['chestcavity:golem_cable', [['nerves', 0.25], ['defense', 1], ['knockback_resistant', 1], ['speed', -0.5]]],
        ['chestcavity:inner_furnace', [['metabolism', 0.25], ['defense', 0.25], ['furnace_powered', 1]]],
        ['chestcavity:golem_plating', [['defense', 1.25], ['iron_repair', 1], ['metabolism', -0.5]]],
        ['chestcavity:golem_core', [['health', 0.75], ['knockback_resistant', 1], ['nerves', 0.25]]],
        ['chestcavity:piston_muscle', [['strength', 1], ['speed', 0.5], ['launching', 1]]],
        ['chestcavity:muscle', [['strength', 1], ['speed', 1]]],
        ['chestcavity:spleen', [['metabolism', 1]]],
        ['chestcavity:appendix', [['luck', 1]]],
        ['chestcavity:kidney', [['filtration', 1]]],
        ['chestcavity:liver', [['detoxification', 1]]],
        ['chestcavity:rib', [['defense', 1]]],
        ['chestcavity:intestine', [['nutrition', 1]]],
        ['chestcavity:lung', [['breath_recovery', 1], ['breath_capacity', 1], ['endurance', 1]]],
        ['chestcavity:stomach', [['digestion', 1]]],
        ['chestcavity:heart', [['health', 1]]],
        ['chestcavity:spine', [['defense', 0.5], ['nerves', 1]]],
        ['chestcavity:small_gills', [['water_breath', 0.5], ['breath_capacity', 0.5], ['endurance', 0.5]]],
        ['chestcavity:small_animal_muscle', [['strength', 0.5], ['speed', 0.5]]],
        ['chestcavity:small_aquatic_muscle', [['strength', 0.5], ['speed', 0.25], ['swim_speed', 0.5]]],
        ['chestcavity:small_animal_spleen', [['metabolism', 0.5]]],
        ['chestcavity:small_fish_muscle', [['strength', 0.25], ['speed', 0.25], ['swim_speed', 0.25]]],
        ['chestcavity:small_herbivore_stomach', [['herbivorous_digestion', 0.75], ['carnivorous_digestion', 0.25]]],
        ['chestcavity:rabbit_heart', [['health', 0.5], ['speed', 1]]],
        ['chestcavity:small_herbivore_intestine', [['herbivorous_nutrition', 0.75], ['carnivorous_nutrition', 0.25]]],
        ['chestcavity:small_animal_appendix', [['luck', 0.5]]],
        ['chestcavity:small_animal_kidney', [['filtration', 0.5]]],
        ['chestcavity:small_animal_liver', [['detoxification', 0.5]]],
        ['chestcavity:small_animal_rib', [['defense', 0.5]]],
        ['chestcavity:small_animal_intestine', [['nutrition', 0.5]]],
        ['chestcavity:small_springy_muscle', [['strength', 0.5], ['speed', 0.5], ['leaping', 0.5]]],
        ['chestcavity:small_animal_lung', [['breath_recovery', 0.5], ['breath_capacity', 0.5], ['endurance', 0.5]]],
        ['chestcavity:small_animal_stomach', [['digestion', 0.5]]],
        ['chestcavity:small_animal_heart', [['health', 0.5]]],
        ['chestcavity:small_carnivore_stomach', [['carnivorous_digestion', 0.75], ['herbivorous_digestion', 0.25]]],
        ['chestcavity:small_animal_spine', [['defense', 0.375], ['nerves', 0.5]]],
        ['chestcavity:small_carnivore_intestine', [['carnivorous_nutrition', 0.75], ['herbivorous_nutrition', 0.25]]],
    ]

    defaultOrgans.forEach(([id, scores]) => {
        let o = new DefaultOrgan(id)
        scores.forEach(([s, v]) => o.addScore(s, v))
        registerDefaultOrganToolTips(o.build())
    })
})
