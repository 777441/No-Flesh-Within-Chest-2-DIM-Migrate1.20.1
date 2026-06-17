// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ id: 'biomancy:decomposing/bloomlight' })

    // ===== 来自暗光 — decomposing 配方 =====
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('#kubejs:organ'),
        results: [{ countRange: { type: 'uniform', max: 5, min: 2 }, item: 'biomancy:organic_matter' }],
        nutrientsCost: 2,
        processingTime: 160,
    })
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('twilightforest:raw_venison'),
        results: [
            { countRange: { type: 'uniform', max: 5, min: 2 }, item: 'biomancy:flesh_bits' },
            { countRange: { type: 'uniform', max: 3, min: 1 }, item: 'biomancy:elastic_fibers' },
            { countRange: { type: 'uniform', max: 4, min: 2 }, item: 'biomancy:bone_fragments' },
        ],
        nutrientsCost: 2,
        processingTime: 160,
    })
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('twilightforest:raw_meef'),
        results: [{ countRange: { type: 'uniform', max: 10, min: 5 }, item: 'biomancy:flesh_bits' }],
        nutrientsCost: 2,
        processingTime: 160,
    })
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('twilightforest:moonworm_queen'),
        results: [
            { countRange: { type: 'uniform', max: 10, min: 5 }, item: 'biomancy:tough_fibers' },
            { countRange: { type: 'uniform', max: 3, min: 2 }, item: 'biomancy:exotic_dust' },
            { countRange: { type: 'uniform', max: 4, min: 3 }, item: 'biomancy:bio_lumens' },
        ],
        nutrientsCost: 2,
        processingTime: 160,
    })
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('twilightforest:firefly'),
        results: [
            { countRange: { type: 'uniform', max: 5, min: 2 }, item: 'biomancy:tough_fibers' },
            { countRange: { type: 'uniform', max: 2, min: 1 }, item: 'biomancy:bio_lumens' },
        ],
        nutrientsCost: 2,
        processingTime: 160,
    })
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: Ingredient.of('twilightforest:cicada'),
        results: [
            { countRange: { type: 'uniform', max: 6, min: 3 }, item: 'biomancy:tough_fibers' },
            { countRange: { type: 'uniform', max: 2, min: 1 }, item: 'biomancy:flesh_bits' },
        ],
        nutrientsCost: 2,
        processingTime: 160,
    })
})