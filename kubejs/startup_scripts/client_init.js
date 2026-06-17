  // priority: 500
  ClientEvents.init(event => {
      try {
          TetraGui.addGuiStatBar(
              TetraGui.createGuiStatBar(0, 0, 59,
                  'kubejs.tetra.effect.functionalization.name', 0, 30,
                  false, false, false,
                  TetraEffectFunctionalizationEffectGetter,
                  TetraLabelGetter.decimalLabel,
                  TetraTooltipGetter.createTooltipGetterInteger('kubejs.tetra.effect.functionalization.tooltip',
  TetraEffectFunctionalizationEffectGetter, false)))

          TetraGui.addGuiStatBar(
              TetraGui.createGuiStatBar(0, 0, 59,
                  'kubejs.tetra.effect.silicosis.name', 0, 30,
                  false, false, false,
                  TetraEffectSilicosisEffectGetter,
                  TetraLabelGetter.decimalLabel,
                  TetraTooltipGetter.createTooltipGetterInteger('kubejs.tetra.effect.silicosis.tooltip',
  TetraEffectSilicosisEffectGetter, false)))
      } catch (e) {
          console.warn('[Migration] TetraGui API 不可用，已跳过: ' + e)
      }
  })