// priority: 800
// 旧版 curios/charm_event.js 迁移 — 护身符任务事件
// 1.20.1 使用 CuriosCapabilities.INVENTORY 替代旧版 $CuriosApi；避免 Rhino 不支持的 ?. 语法
EntityEvents.death(event => {
    let entity = event.entity
    let player = event.source.player
    if (!player) return
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'kill')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.killTask) return
    if (nbt.killTask.mobType != entity.getType()) return
    if (nbt.killTask.minHealth && nbt.killTask.minHealth > entity.getMaxHealth()) return
    nbt.killTask.counter++
    if (nbt.killTask.counter >= nbt.killTask.killAmount) {
        nbt.organ.id = nbt.targetOrgan
        nbt.status = 1
    }
})

ItemEvents.foodEaten(event => {
    let player = event.player
    if (!player) return
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'diet')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.dietTask) return
    if (nbt.dietTask.minHunger > event.item.item.foodProperties.getNutrition()) return
    if (!nbt.dietTask.foodTypeList.some(ele => ele == event.item.id)) {
        nbt.dietTask.foodTypeList.push(event.item.id)
    }
    if (nbt.dietTask.foodTypeList.length >= nbt.dietTask.foodTypeAmount) {
        nbt.organ.id = nbt.targetOrgan
        nbt.status = 1
    }
})

BlockEvents.broken(event => {
    let player = event.player
    if (!player) return
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'mining')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.miningTask) return
    if (nbt.miningTask.targetblock) {
        if (!nbt.miningTask.targetblock.some(ctx => ctx == event.block.id)) return
    }
    nbt.miningTask.counter++
    if (nbt.miningTask.counter >= nbt.miningTask.miningAmount) {
        nbt.organ.id = nbt.targetOrgan
        nbt.status = 1
    }
    if (nbt.miningTask.consume) {
        event.block.set('minecraft:air')
        event.cancel()
    }
})

function organCharmPlayerHurtByOthers(event, data) {
    let player = event.entity
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'bear')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.bearTask) return
    if (event.amount < nbt.bearTask.minDamage) return
    nbt.bearTask.counter = nbt.bearTask.counter + event.amount
    if (nbt.bearTask.counter >= nbt.bearTask.bearAmount) {
        nbt.organ.id = nbt.targetOrgan
        nbt.status = 1
    }
}

function organCharmEntityHurtByPlayer(event, data) {
    let player = event.source.player
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'damage')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.damageTask) return
    if (event.amount < nbt.damageTask.minDamage) return
    if (nbt.damageTask.type) {
        let type = 'other'
        switch (true) {
            case (event.source.getType() == 'player'): type = 'melee'; break
            case (event.source.getType() == 'arrow'): type = 'projectile'; break
            case (event.source.getType().startsWith('irons_spellbooks')): type = 'magic'; break
            default: type = 'other'
        }
        if (nbt.damageTask.type != type) return
    }
    nbt.damageTask.counter = nbt.damageTask.counter + event.amount
    if (nbt.damageTask.counter >= nbt.damageTask.damageAmount) {
        nbt.organ.id = nbt.targetOrgan
        nbt.status = 1
    }
}

global.organCharmPlayerWarpTask = (player) => {
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    let nbt = getOrganCharmNbt(curiosItem, 'warp')
    if (!nbt) return
    if (nbt.status == 1) return
    if (!nbt.warpTask) return
    if (player.persistentData.getInt(warpCount) < nbt.warpTask.warpMin) return
    nbt.organ.id = nbt.targetOrgan
    nbt.status = 1
}

function getOrganCharmNbt(item, type) {
    if (!item || item.isEmpty()) return null
    if (item.id != 'kubejs:organ_charm') return null
    if (!item.nbt) return null
    if (item.nbt.type != type) return null
    return item.nbt
}

function getCuriosItem(player, itemId) {
    if (!player) return null
    let curiosCap = GetCuriosInventoryCap(player)
    if (!curiosCap) return null
    let curios = curiosCap.getCurios()
    if (!curios) return null
    for (let typeName of curios.keySet()) {
        let slotHandler = curios.get(typeName)
        if (!slotHandler) continue
        let stacks = slotHandler.getStacks()
        for (let slot = 0; slot < slotHandler.getSlots(); slot++) {
            let item = stacks.getStackInSlot(slot)
            if (item && !item.isEmpty() && item.id == itemId) return item
        }
    }
    return null
}
