// priority: 0
/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!
  //ritual table hexalia

  event.shaped(Item.of("hexalia:ritual_table",1),
    [
      'AAA',
      'ABA',
      'BBB'
    ],
    {
      A : "minecraft:moss_block",
      B : "minecraft:deepslate"
    }
  )
  event.shaped(Item.of("hexalia:ritual_brazier",2),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A : "minecraft:amethyst_shard",
      B : "minecraft:campfire"
    }
  )
  event.shapeless(
    Item.of("runes:soul_stone",1),
    ["#fabric:roost/souls","#minecraft:stone_tool_materials"]
  )

    event.shapeless(
    Item.of("hexcasting:staff/oak",1),
    ["#hexcasting:staves"]
  )
  //replace runes to use the blank rune for whichever
  //cryptic eye for end
  event.custom({
  "type": "enchantment_infusion:simple_infusion",
  "ingredients": [
    {"item": "archon:diamond_mana_catalyst"},
    {"item": "create:experience_block"},
    {"item": "hexcasting:focus"},
    {"item":  "archon:ender_tome"},
    {"item": "create:experience_block"},
    {"item": "hexalia:tempest_idol"},
    {"item": "hexcasting:focus"},
    {"item": "create:experience_block"},
    
    
  ],
  "input": {"item": "minecraft:ender_eye",},
  "output": {"Count": 1,   "id": "endrem:cryptic_eye"},
  "copy_nbt": false
})

  //enlever les plates de mcda pour les remplacer avec des iron sheets de create
  event.replaceInput(
    {input:"mcda:iron_plate"}, //filter
    "mcda:iron_plate", //item to remove
    "create:iron_sheet" //item to replace with
  )

  //gilded glory armor remove
  event.remove({output: "mcda:gilded_glory_helmet"})
  event.remove({output: "mcda:gilded_glory_chestplate"})
  event.remove({output: "mcda:gilded_glory_leggings"})
  event.remove({output: "mcda:gilded_glory_boots"})

  //eyes for end!
  event.remove({output: "endrem:witch_eye"})
  event.remove({output: "endrem:undead_eye"})
  
  
//chicken soul
  event.shaped(
    Item.of("minecraft:torch",1),
    [
      'A  ',
      'B  ',
      '   '
    ],
    {
      A : "chicken_roost:chicken_essence_tier_1",
      B : "minecraft:stick"
    }
  )
  event.shapeless(
    Item.of("runes:soul_stone",1),
    ["#fabric:roost/souls","#minecraft:stone_tool_materials"]
  )
  event.remove({output: "biomesoplenty:rose_quartz_block"})
  
  //rosequartz
  event.custom(
   { 
    "type" : "create:compacting",
    "ingredients" : 
    [
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"biomesoplenty:rose_quartz_chunk"},
      { "item" :"minecraft:redstone"},
      { "item" :"minecraft:redstone"},
      { "item" :"minecraft:redstone"},
      { "item" :"minecraft:redstone"},
    ],
    "results" : [{"item" : "biomesoplenty:rose_quartz_block"}]
   }
  )

  event.shapeless(
    Item.of( "biomesoplenty:rose_quartz_cluster",4),
    ["biomesoplenty:rose_quartz_block"]
  )
  event.custom(
   { 
    "type" : "create:splashing",
    "ingredients" : [{"item" : "biomesoplenty:rose_quartz_chunk"}],
    "results" : [{"item" : "create:rose_quartz"}]
   }
  )

  event.custom(
   { 
    "type" : "create:haunting",
    "ingredients" : [{"item" : "biomesoplenty:rose_quartz_chunk"}],
    "results" : [{"item" : "minecraft:amethyst_shard"}]
   }
  )

  //crafts de poulets de roost
  event.smelting("chicken_roost:c_glass","chicken_roost:c_sand") //(res du smelt, ingredient a smelt)
  event.shaped(
    Item.of("chicken_roost:c_netherite",1),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: "minecraft:netherite_upgrade_smithing_template",
      B: "minecraft:netherite_ingot",
      C: "minecraft:nether_star",
      D: "chicken_roost:chicken_essence_tier_6"
    }
  )

  //event.recipes.create.pressing() marche pas
  // donc on custom mais custom supporte pas les tags
  //tier 1
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier1"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_1"}]});

  //tier 2
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier2"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_2"}]});
  //tier 3
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier3"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_3"}]});
  //tier 4
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier4"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_4"}]});
  //tier 5
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier5"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_5"}]});
  //tier 6
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier6"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_6"}]});
  //tier 7
  event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier7"}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_7"}]});

  //dupli poulet
  //tier1
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_cobble"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_cobble"},{"item" : "chicken_roost:c_c_cobble"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_oakwood"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_oakwood"},{"item" : "chicken_roost:c_oakwood"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_andesite"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_andesite"},{"item" : "chicken_roost:c_andesite"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_sand"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_sand"},{"item" : "chicken_roost:c_sand"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_vanilla"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_vanilla"},{"item" : "chicken_roost:c_vanilla"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_gravel"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_gravel"},{"item" : "chicken_roost:c_gravel"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_granite"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_granite"},{"item" : "chicken_roost:c_granite"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_honeycomb"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_honeycomb"},{"item" : "chicken_roost:c_honeycomb"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_feather"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_feather"},{"item" : "chicken_roost:c_feather"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_wool"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_wool"},{"item" : "chicken_roost:c_wool"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_stone"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_stone"},{"item" : "chicken_roost:c_stone"}]});
  event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_diorite"},{ "item" : "chicken_roost:chicken_essence_tier_1" }],"results": [ {"item" : "chicken_roost:c_diorite"},{"item" : "chicken_roost:c_diorite"}]});
  
 //tier2
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_melon"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_melon"},{"item" : "chicken_roost:c_melon"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_netherrack"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_netherrack"},{"item" : "chicken_roost:c_netherrack"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_snow"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_snow"},{"item" : "chicken_roost:c_snow"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_glass"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_glass"},{"item" : "chicken_roost:c_glass"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_sugar"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_sugar"},{"item" : "chicken_roost:c_sugar"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_flint"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_flint"},{"item" : "chicken_roost:c_flint"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_apple"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_apple"},{"item" : "chicken_roost:c_apple"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_bone"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_bone"},{"item" : "chicken_roost:c_bone"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_coal"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_coal"},{"item" : "chicken_roost:c_coal"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_carrot"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_carrot"},{"item" : "chicken_roost:c_carrot"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_ink"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_ink"},{"item" : "chicken_roost:c_ink"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_beetroot"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_beetroot"},{"item" : "chicken_roost:c_beetroot"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_sweetberries"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_sweetberries"},{"item" : "chicken_roost:c_sweetberries"}]}); 
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_glowberries"},{ "item" : "chicken_roost:chicken_essence_tier_2" }],"results": [ {"item" : "chicken_roost:c_glowberries"},{"item" : "chicken_roost:c_glowberries"}]}); 
 
 //tier3
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_soulsoil"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_soulsoil"},{"item" : "chicken_roost:c_soulsoil"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_string"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_string"},{"item" : "chicken_roost:c_string"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_basalt"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_basalt"},{"item" : "chicken_roost:c_basalt"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_copper"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_copper"},{"item" : "chicken_roost:c_copper"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_clay"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_clay"},{"item" : "chicken_roost:c_clay"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_soulsand"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_soulsand"},{"item" : "chicken_roost:c_soulsand"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_sponge"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_sponge"},{"item" : "chicken_roost:c_sponge"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_leather"},{ "item" : "chicken_roost:chicken_essence_tier_3" }],"results": [ {"item" : "chicken_roost:c_leather"},{"item" : "chicken_roost:c_leather"}]});

 //tier4
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_netherwart"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_netherwart"},{"item" : "chicken_roost:c_netherwart"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_redstone"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_redstone"},{"item" : "chicken_roost:c_redstone"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_lapis"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_lapis"},{"item" : "chicken_roost:c_lapis"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_obsidian"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_obsidian"},{"item" : "chicken_roost:c_obsidian"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_magmacream"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_magmacream"},{"item" : "chicken_roost:c_magmacream"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_iron"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_iron"},{"item" : "chicken_roost:c_iron"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_rotten"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_rotten"},{"item" : "chicken_roost:c_rotten"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_slime"},{ "item" : "chicken_roost:chicken_essence_tier_4" }],"results": [ {"item" : "chicken_roost:c_slime"},{"item" : "chicken_roost:c_slime"}]});

 //tier5
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_chorusfruit"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_chorusfruit"},{"item" : "chicken_roost:c_chorusfruit"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_glowstone"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_glowstone"},{"item" : "chicken_roost:c_glowstone"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_endstone"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_endstone"},{"item" : "chicken_roost:c_endstone"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_gold"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_gold"},{"item" : "chicken_roost:c_gold"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_blazerod"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_blazerod"},{"item" : "chicken_roost:c_blazerod"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_netherquartz"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_netherquartz"},{"item" : "chicken_roost:c_netherquartz"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_tnt"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_tnt"},{"item" : "chicken_roost:c_tnt"}]});
 event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_enderpearl"},{ "item" : "chicken_roost:chicken_essence_tier_5" }],"results": [ {"item" : "chicken_roost:c_enderpearl"},{"item" : "chicken_roost:c_enderpearl"}]});

 //tier6
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_emerald"},{ "item" : "chicken_roost:chicken_essence_tier_6" }],"results": [ {"item" : "chicken_roost:c_emerald"},{"item" : "chicken_roost:c_emerald"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_ghasttear"},{ "item" : "chicken_roost:chicken_essence_tier_6" }],"results": [ {"item" : "chicken_roost:c_ghasttear"},{"item" : "chicken_roost:c_ghasttear"}]});

//tier7
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_diamond"},{ "item" : "chicken_roost:chicken_essence_tier_7" }],"results": [ {"item" : "chicken_roost:c_diamond"},{"item" : "chicken_roost:c_diamond"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_netherite"},{ "item" : "chicken_roost:chicken_essence_tier_7" }],"results": [ {"item" : "chicken_roost:c_netherite"},{"item" : "chicken_roost:c_netherite"}]});
event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_netherstar"},{ "item" : "chicken_roost:chicken_essence_tier_7" }],"results": [ {"item" : "chicken_roost:c_netherstar"},{"item" : "chicken_roost:c_netherstar"}]});


  console.log('BOK BOK! The chicken recipes event has fired!')
})