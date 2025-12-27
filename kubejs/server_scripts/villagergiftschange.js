
//on change les cadeaux de villageois pour l'armurer

LootJS.modifiers(event => {
  event.addLootTableModifier("minecraft:gameplay/hero_of_the_village/armorer_gift").removeLoot(Ingredient.all)
  event.addLootTypeModifier(LootType.GIFT).removeLoot('*')
  event.addLootTableModifier("minecraft:gameplay/hero_of_the_village/armorer_gift").removeLoot("mcda:gilded_glory_helmet")
  event.addLootTableModifier("minecraft:gameplay/hero_of_the_village/armorer_gift").removeLoot("mcda:gilded_glory_leggings")
  event.addLootTableModifier("minecraft:gameplay/hero_of_the_village/armorer_gift").removeLoot("mcda:gilded_glory_boots")
  event.addLootTableModifier("minecraft:gameplay/hero_of_the_village/armorer_gift").removeLoot("mcda:gilded_glory_chestplate")





  event.addLootTableModifier("minecraft:chests/igloo_chest").removeLoot("endrem:cold_eye")
})

ServerEvents.giftLootTables(event => {

    event.modify("minecraft:gameplay/hero_of_the_village/armorer_gift",l=>{
        l.clearPools()
    })
    /*
    we should remove all of these items however I can't figure it out :
  "mcda:gilded_glory_helmet"
  "mcda:gilded_glory_chestplate"
  "mcda:gilded_glory_leggings"
  "mcda:gilded_glory_boots"
  */
})