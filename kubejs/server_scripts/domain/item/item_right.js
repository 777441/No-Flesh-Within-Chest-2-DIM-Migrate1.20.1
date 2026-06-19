// priority: 500
// 旧版 common.disabled/item_right.js 迁移 — 通用物品右键功能
// 含 healing_additive 抗排异、unbreakable_core 不毁加持、disenchantment_book 祛魔、
// selenite_shard 血月魔棒合成、mysterious_trinket 神秘饰品、advanced_chest_opener 开胸器

const trinketList = [
    'nameless_trinkets:reforger', 'nameless_trinkets:true_heart_of_the_sea',
    'nameless_trinkets:dragons_eye', 'nameless_trinkets:spider_legs',
    'nameless_trinkets:sleeping_pills', 'nameless_trinkets:moon_stone',
    'nameless_trinkets:nelumbo', 'nameless_trinkets:dark_nelumbo',
    'nameless_trinkets:super_magnet', 'nameless_trinkets:rage_mind',
    'nameless_trinkets:puffer_fish_liver', 'nameless_trinkets:lucky_rock',
    'nameless_trinkets:vampire_blood', 'nameless_trinkets:speed_force',
    'nameless_trinkets:tick', 'nameless_trinkets:ghast_eye',
    'nameless_trinkets:cracked_crown', 'nameless_trinkets:ethereal_wings',
    'nameless_trinkets:blindfold', 'nameless_trinkets:ice_cube',
    'nameless_trinkets:blaze_nucleus', 'nameless_trinkets:wooden_stick',
    'nameless_trinkets:tear_of_the_sea', 'nameless_trinkets:gods_crown',
    'nameless_trinkets:fertilizer', 'nameless_trinkets:sigil_of_baphomet',
    'nameless_trinkets:amphibious_hands', 'nameless_trinkets:fragile_cloud',
    'nameless_trinkets:light_gloves', 'nameless_trinkets:fate_emerald',
    'nameless_trinkets:scarab_amulet', 'nameless_trinkets:pocket_lightning_rod',
    'nameless_trinkets:fractured_nullstone', 'nameless_trinkets:electric_paddle',
    'nameless_trinkets:reverse_card', 'nameless_trinkets:missing_page',
    'nameless_trinkets:broken_magnet', 'nameless_trinkets:experience_magnet',
    'nameless_trinkets:experience_battery', 'nameless_trinkets:what_magnet',
    'nameless_trinkets:callus',
]

// ============ 抗排异：biomancy:healing_additive — 副手用药清除器官排斥标签 ============
ItemEvents.rightClicked('biomancy:healing_additive', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() == "off_hand") {
        let organ = player.getMainHandItem()
        if (organ.hasNBT() && organ.nbt.contains('chestcavity:organ_compatibility')) {
            organ.nbt.remove('chestcavity:organ_compatibility')
            item.shrink(1)
        } else {
            player.tell('似乎该物品不需要进行抗排异')
        }
    } else {
        player.tell('如果要使用抗排异功能，请将药物放在副手，器官置于主手')
    }
})

// ============ 不毁核心：unbreakable_core — 给>8级耐久附魔的物品加不毁标签 ============
ItemEvents.rightClicked('kubejs:unbreakable_core', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用不毁加持功能，请将不毁核心放在副手，物品置于主手')
        return
    }
    let unbreakone = player.getMainHandItem()
    if (unbreakone?.nbt && unbreakone.nbt?.Unbreakable) {
        player.tell('该物品已进行过不毁加持！')
        return
    }
    if (!unbreakone.hasEnchantment('minecraft:unbreaking', 1)) {
        player.tell('不满足耐久要求！')
        return
    }
    let enchantlevel = unbreakone.getEnchantmentLevel('minecraft:unbreaking')
    if (enchantlevel < 8) {
        player.tell('不满足耐久要求！')
        return
    }
    unbreakone.nbt.Enchantments = unbreakone.nbt.Enchantments.filter(function (e) {
        return e.id != 'minecraft:unbreaking'
    })
    unbreakone.nbt.merge({ Unbreakable: 1 })
    item.shrink(1)
})

// ============ 祛魔书：disenchantment_book — 随机取下一件附魔 ============
ItemEvents.rightClicked('kubejs:disenchantment_book', event => {
    let player = event.player
    let item = event.item
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用祛魔功能，请将祛魔书放在副手，物品置于主手')
        return
    }
    let weapon = player.getMainHandItem()
    if (!weapon || !weapon.isEnchanted()) {
        player.tell('没有可取下的附魔！')
        return
    }

    let enchantList = []
    let levelList = []
    weapon.allEnchantments.forEach((name, level) => {
        enchantList.push(name)
        levelList.push(level)
    })
    if (enchantList.length <= 0 || levelList.length <= 0) return
    let setlength = enchantList.length
    let random = Math.ceil((Math.random() * setlength))

    if (item.getCount() > 1) {
        item.shrink(1)
    } else {
        player.setOffHandItem(Item.of('minecraft:air'))
    }
    if (weapon.getCount() > 1) {
        weapon.shrink(1)
    } else {
        player.setMainHandItem(Item.of('minecraft:air'))
    }

    player.give(Item.of('minecraft:enchanted_book').enchant(enchantList[random - 1], levelList[random - 1]))
})

// ============ 辉光粉合成血月魔棒：selenite_shard + 全套邪教徒套 + 血之杖 ============
ItemEvents.rightClicked('hexerei:selenite_shard', event => {
    if (event.level.isNight()
        && event.player.headArmorItem == 'irons_spellbooks:cultist_helmet'
        && event.player.chestArmorItem == 'irons_spellbooks:cultist_chestplate'
        && event.player.legsArmorItem == 'irons_spellbooks:cultist_leggings'
        && event.player.feetArmorItem == 'irons_spellbooks:cultist_boots'
        && (event.player.mainHandItem == 'irons_spellbooks:blood_staff' || event.player.offHandItem == 'irons_spellbooks:blood_staff')) {
        event.item.shrink(1)
        event.player.give(Item.of('kubejs:blood_moon_wand'))
    }
})

// ============ 神秘饰品：mysterious_trinket — 随机给一个 nameless_trinkets 物品 ============
ItemEvents.rightClicked('kubejs:mysterious_trinket', event => {
    event.item.shrink(1)
    event.player.give(randomGet(trinketList))
})

// ============ 先进开胸器：advanced_chest_opener — 对目标/自己打开胸腔 GUI ============
ItemEvents.rightClicked('kubejs:advanced_chest_opener', event => {
    let player = event.player
    let ench = event.item.enchantments
    let teleOper = ench && ench.containsKey('kubejs:tele_operation')
    let dist = 5
    if (teleOper) {
        let teleOperLevel = event.item.getEnchantmentLevel('kubejs:tele_operation')
        dist = Math.min(dist + teleOperLevel * 3, 20)
    }
    let ray = player.rayTrace(dist, false)
    let target = player
    let selfTag = true
    let safeOper = ench && ench.containsKey('kubejs:safe_operation')
    if (ray.entity && ray.entity.isAlive() && !ray.entity.isPlayer()) {
        selfTag = false
        target = ray.entity
    } else if (safeOper) {
        return
    }

    if (target.type == 'iceandfire:fire_dragon' || target.type == 'iceandfire:ice_dragon' || target.type == 'iceandfire:lightning_dragon') {
        let getAgeTicks = target.nbt.AgeTicks
        let getDeathStage = target.nbt.DeathStage
        let curStage = ((getAgeTicks / 24000) / 5) / 2
        if (getDeathStage + 1 >= curStage) return
    }

    player.swing()
    let painlessOper = ench && ench.containsKey('kubejs:painless_operation')
    let creativeOper = ench && ench.containsKey('kubejs:creative_operation')

    let invName = target.getDisplayName().getString() + "'s "
    let optional = $ChestCavityEntity.of(target)
    if (optional.isPresent()) {
        let chestCavityEntity = optional.get()
        let cc = chestCavityEntity.getChestCavityInstance()
        // 先进开胸器强制打开任何有胸腔的生物（跳过 isOpenable 的胸甲/血量限制）
        if (cc.getOrganScore($CCOrganScores.EASE_OF_ACCESS) <= 0 && !painlessOper) {
            target.attack(target.damageSources().generic(), 4)
        }
        if (target.isAlive()) {
            // 初始化胸腔
            ChestCavityUtils.openChestCavity(cc)
            // 使用 SimpleMenuProvider + 3 参数构造器（与 ChestOpener.java 一致）
            player.openMenu(new $SimpleMenuProvider(
                (syncId, playerInventory, playerEntity) => new $ChestCavityScreenHandler(syncId, playerInventory, chestCavityEntity),
                Text.translatable(invName + "Chest Cavity")
            ))
        }
    }
})
