// priority: 500
TetraJSEvents.registerStatBar(event => {
    event.registerEffectBar('kubejs:functionalization')
        .setMin(0)
        .setMax(30)
        .setLabelGetter('integerlabel')
        .setStatGetter(TetraJS$StatBarHelper.effectLevel('kubejs:functionalization', 1, 0))
        .addIntegerTooltip(TetraJS$StatBarHelper.effectLevel('kubejs:functionalization', 1, 0))
})
