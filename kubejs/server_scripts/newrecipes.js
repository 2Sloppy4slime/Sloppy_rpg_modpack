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
  event.custom({"type": "create:mixing",
    "ingredients": [{"item": "biomesoplenty:flesh"},{"item": "biomesoplenty:flesh"},{"item": "biomesoplenty:flesh"},{"item": "biomesoplenty:flesh"},{"item": "minecraft:bucket"}],
    "results": [{"item" : "biomesoplenty:blood_bucket"}]});
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

    event.shapeless(Item.of("hexcasting:staff/oak",1),["#hexcasting:staves"])
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

//spellbook crafting
  //fallen paladign
  event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "netherexp:weeping_polished_blackstone_bricks"},{"item": "hexcasting:edified_panel"},{"item":  "minecraft:black_glazed_terracotta"},{"item": "archon:diamond_mana_catalyst"},{"item": "netherexp:weeping_polished_blackstone_bricks"},{"item": "hexcasting:edified_panel"},{"item": "minecraft:black_glazed_terracotta"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "fpapmod:fell_paladin_spell_book"},"copy_nbt": false})
  //lightning
    event.custom({
  "type": "enchantment_infusion:simple_infusion",
  "ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:lightning_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:lightning_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:lightning_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:lightning_infused_iron_block"},],
  "input": {"item": "hexcasting:spellbook",},
  "output": {"Count": 1,"id": "morewizardsmod:more_wizards_lightning_spell_book"},
  "copy_nbt": false
})
  //battlemage fire
    event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:fire_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:fire_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:fire_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:fire_infused_iron_block"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "battlemages:battlemages_fire_spell_book"},"copy_nbt": false})
  //battlemage frost
    event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:frost_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:frost_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:frost_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:frost_infused_iron_block"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "battlemages:battlemages_frost_spell_book"},"copy_nbt": false})
  //battlemage arcane
    event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:arcane_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:arcane_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:arcane_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:arcane_infused_iron_block"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "battlemages:battlemages_arcane_spell_book"},"copy_nbt": false})
  //druid
    event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:healing_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:healing_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:healing_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:healing_infused_iron_block"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "druid:druids_spell_book"},"copy_nbt": false})
  //soul/priest (unholy book)
    event.custom({"type": "enchantment_infusion:simple_infusion","ingredients": [{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:soul_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item":  "elemental_metals:soul_infused_iron_block"},{"item": "archon:diamond_mana_catalyst"},{"item": "elemental_metals:soul_infused_iron_block"},{"item": "hexcasting:edified_panel"},{"item": "elemental_metals:soul_infused_iron_block"},],"input": {"item": "hexcasting:spellbook",},"output": {"Count": 1,"id": "fpapmod:fell_priest_spell_book"},"copy_nbt": false})
 

    
    event.custom({
  "type": "enchantment_infusion:simple_infusion",
  "ingredients": [{"item" : "betterdeepdark:wardens_horn"},{"item" : "betterdeepdark:wardens_horn"},{"item" : "betterdeepdark:wardens_horn"},{"item" : "betterdeepdark:wardens_horn"}],
  "input": {"item": "mcda:upgrade_core_void",},
  "output": {"Count": 2,"id": "dimdoors:rift_signature"},
  "copy_nbt": false
})
    //enlever les plates de mcda pour les remplacer avec des iron sheets de create
  event.replaceInput(
    {input:"mcda:iron_plate"}, //filter
    "mcda:iron_plate", //item to remove
    "create:iron_sheet" //item to replace with
  )
    event.replaceInput(
    {output:"create:goggles"}, //filter
    "#c:glass_blocks", //item to remove
    "hexcasting:lens" //item to replace with
  )
    event.replaceOutput(
    {output:"create:goggles"}, //filter
    "create:goggles", //item to remove 
    Item.of("create:goggles",'{AttributeModifiers:[{Slot:"head",AttributeName:"hexcasting:grid_zoom",Name:"hexcasting:grid_zoom",Amount:0.66,Operation:1,UUID:[I;1303713627,1041451887,-2131963930,-855724358]},{Slot:"head",AttributeName:"hexcasting:scry_sight",Name:"hexcasting:scry_sight",Amount:1,Operation:0,UUID:[I;1303713627,1041451887,-2131963930,-855724359]}],TrinketAttributeModifiers:[{Slot:"head/face",AttributeName:"hexcasting:grid_zoom",Name:"hexcasting:grid_zoom",Amount:0.66,Operation:1,UUID:[I;1303743627,1041451887,-2131963930,-855724358]},{Slot:"head/face",AttributeName:"hexcasting:scry_sight",Name:"hexcasting:scry_sight",Amount:1,Operation:0,UUID:[I;1303713627,1041851887,-2131963930,-855724359]}]}') //item to replace with
  )

  //gilded glory armor remove
  event.remove({output: "mcda:gilded_glory_helmet"})
  event.remove({output: "mcda:gilded_glory_chestplate"})
  event.remove({output: "mcda:gilded_glory_leggings"})
  event.remove({output: "mcda:gilded_glory_boots"})

  //eyes for end!
  event.remove({output: "endrem:witch_eye"})
  event.remove({output: "endrem:undead_eye"})
  
  event.remove({output: "dimdoors:item_ag_dim_dimdoors_quartz_door"})
    event.shaped(
    Item.of("dimdoors:item_ag_dim_dimdoors_quartz_door",1),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: "minecraft:diamond",
      B: "minecraft:gold_block",
      C: "dimdoors:quartz_door",
      D: "archon:mana_catalyst"
    }
  )
//chicken soul
  event.replaceInput(
    {input:"minecraft:soul_sand"}, //filter
    "minecraft:soul_sand", //item to remove
    "chicken_roost:chicken_essence_tier_5" //item to replace with)
  )
  //fix the wrong recipes
    event.replaceInput({output:"netherexp:soul_candle"},"chicken_roost:chicken_essence_tier_5","minecraft:soul_sand")
    event.replaceInput({output:"netherexp:ecto_soul_sand"},"chicken_roost:chicken_essence_tier_5","minecraft:soul_sand")
    event.replaceInput({output:"netherexp:soul_magma_block"},"minecraft:magma_cream","minecraft:soul_sand")
  event.shapeless(Item.of("runes:soul_stone",1),["#fabric:roost/souls","morerunes:blank_rune"])

  event.shapeless(Item.of("archon:soul",1),["#fabric:roost/souls"])
  event.shapeless(Item.of("endrem:undead_soul",1),["#fabric:roost/souls"])



  
  //rosequartz
  event.remove({output: "biomesoplenty:rose_quartz_block"})
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
      A: "end_reborn:remnant_upgrade_smithing_template",
      B: "minecraft:netherite_ingot",
      C: "minecraft:nether_star",
      D: "chicken_roost:chicken_essence_tier_6"
    }
  )

  //event.recipes.create.pressing() marche pas
  for (let index = 1; index <= 7; index++) {
    event.custom({"type": "create:pressing","ingredients": [ { "tag" : "fabric:roost/tier"+String(index)}],"results": [ {"item" : "chicken_roost:chicken_essence_tier_"+String(index)}]});
  }
  //dupli poulet
  //tier1
  let chickens = [["cobble","oakwood","andesite","sand","vanilla","gravel","granite","honeycomb","feather","wool","stone","diorite"],
  ["melon","netherrack","snow","glass","sugar","flint","apple","bone","coal","carrot","ink","beetroot","sweetberries","glowberries"],
  ["soulsoil","string","basalt","copper","clay","soulsand","sponge","leather"],
  ["netherwart","redstone","lapis","obsidian","magmacream","iron","rotten","slime"],
  ["chorusfruit","glowstone","endstone","gold","blazerod","netherquartz","tnt","enderpearl"],
  ["emerald","ghasttear"],
  ["diamond","netherite","netherstar"]]
  for (let tier = 0; tier < chickens.length; tier++) {
    for (let chicken = 0; chicken < chickens[tier].length; chicken++) {  
      event.custom({"type": "create:mixing","ingredients": [ { "item" : "chicken_roost:c_"+chickens[tier][chicken]},{ "item" : "chicken_roost:chicken_essence_tier_"+String(tier+1) }],"results": [ {"item" : "chicken_roost:c_"+chickens[tier][chicken]},{"item" : "chicken_roost:c_"+chickens[tier][chicken]}]});
    }
  }

  console.log('BOK BOK! The chicken recipes event has fired!')


  let wings = ["winged:wing_elytra_light_blue","winged:wing_julianclark_cape_alt","winged:wing_mrmessiah_cape","winged:wing_elytra_gray","winged:wing_julianclark_cape",
    "winged:wing_minecon_2016_cape","winged:wing_millionth_cape","winged:wing_green_dragon","winged:wing_elytra_yellow","winged:wing_minecon_2012_cape","winged:wing_fairyonline","winged:wing_minecon_2019_cape",
  "winged:wing_tiny_bird","winged:wing_greenwing_macaw","winged:wing_mech_dragon","winged:wing_eagle","winged:wing_golden_beetle","winged:wing_green_beetle",
"winged:wing_elytra_light_gray","winged:wing_bat_alt","winged:wing_spooky","winged:wing_fried_chicken","winged:wing_mojang_cape_alt","winged:wing_minecon_2015_cape","winged:wing_elytra_lime",
  "winged:wing_elytra_blue","winged:wing_creamy_white","winged:wing_scrolls_cape","winged:wing_elytra_white","winged:wing_mojira_mod_cape","winged:wing_xmas_tree","winged:wing_elytra_purple",
"winged:wing_phantom_alt","winged:wing_brazil","winged:wing_elytra_orange","winged:wing_elytra_cyan","winged:wing_vex","winged:wing_elytra_black","winged:wing_angel","winged:wing_earth","winged:wing_dragonfly",
"winged:wing_elytra_green","winged:wing_template","winged:wing_usa","winged:wing_turtle_cape","winged:wing_crowdin_cape","winged:wing_glider","winged:wing_cobalt_cape","winged:wing_tnt","winged:wing_demon","winged:wing_random",
"winged:wing_elytra_red","winged:wing_redstone","winged:wing_fire_dragon","winged:wing_minecon_2011_cape","winged:wing_phantom","winged:wing_rainbow","winged:wing_irreality","winged:wing_mapmaker_cape","winged:wing_elytra_pink",
"winged:wing_elytra","winged:wing_prismarine_cape","winged:wing_elytra_magenta","winged:wing_red_dragon","winged:wing_phoenix","winged:wing_mojang_cape","winged:wing_minecon_2013_cape","winged:wing_xmas_star","winged:wing_bat",
"winged:wing_shulker","winged:wing_purple_beetle","winged:wing_phantom_membrane","winged:wing_elytra_brown","winged:wing_dannybstyle_cape","winged:wing_glass"]
  //OMFG ITS OVER, FUCKASS CREATOR DIDN'T MAKE A TAG
let creative_wings = wings.map((a ) => {
    return a+"_creative_flight"
  })

  wings.forEach(element => {
      wings.forEach(element2 => {
        event.stonecutting(element,element2)
  });
  });
    creative_wings.forEach(element => {
      creative_wings.forEach(element2 => {
        event.stonecutting(element,element2)
  });
  });
})

