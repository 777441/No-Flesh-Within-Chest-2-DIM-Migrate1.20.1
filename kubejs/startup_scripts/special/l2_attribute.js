// priority: 999
  StartupEvents.postInit(event => {
      try {
          $AttributeEntry.add($AttributeRegistry.MAX_MANA, false, 1500);
          $AttributeEntry.add($AttributeRegistry.MANA_REGEN, true, 1600);

          $AttributeEntry.add($AttributeRegistry.SPELL_POWER, true, 1700);
          $AttributeEntry.add($AttributeRegistry.SPELL_RESIST, true, 1800);
          $AttributeEntry.add($AttributeRegistry.COOLDOWN_REDUCTION, true, 1900);
      } catch (e) {
          console.warn('[Migration] $AttributeEntry API 不可用，已跳过: ' + e)
      }
  })