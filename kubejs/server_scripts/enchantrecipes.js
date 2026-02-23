//remove enchanting from books
ServerEvents.recipes(event=> {
    //custom enchants

//Archon 
    //arcane 1 -> 3 (coût mana--)
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "archon:arcane","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "archon:pixie_leaves"},{"item" : "archon:pixie_leaves"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "archon:arcane","force": false,
        "ingredients": [{"item" : "archon:mana_catalyst"},{"item" : "minecraft:amethyst_shard"},{"item" : "runes:arcane_stone"},{"item" : "runes:arcane_stone"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "archon:arcane","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "archon:arcane","force": false,
        "ingredients": [{"item" : "archon:diamond_mana_catalyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "runes:arcane_stone"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "archon:arcane","min_level": 2}, 
        "level": 3})

    //reaping(mobs drop souls on death)
    event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "archon:reaping","force": false,
    "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "runes:soul_stone"},{"item" : "minecraft:soul_soil"},{"item" : "minecraft:soul_soil"},{"item" : "runes:soul_stone"}],
    "level": 1})




//create
    //capacity
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:capacity","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "create:white_sail"},{"item" : "create:white_sail"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:capacity","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "morerunes:wind_rune"},{"item" : "minecraft:copper_block"},{"item" : "minecraft:copper_block"},{"item" : "morerunes:wind_rune"}],
        "input": {"enchantment": "create:capacity","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:capacity","force": false,
        "ingredients": [{"item" : "hexalia:air_node"},{"item" : "hexcasting:charged_amethyst"},{"item" : "morerunes:wind_rune"},{"item" : "morerunes:wind_rune"},{"item" : "morerunes:wind_rune"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "create:capacity","min_level": 2}, 
        "level": 3})

    //potato_recovery
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:potato_recovery","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:potato"},{"item" : "minecraft:potato"} ],
        "level": 1})

        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:potato_recovery","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:potato"},{"item" : "runes:healing_stone"},{"item" : "runes:healing_stone"},{"item" : "minecraft:potato"}],
        "input": {"enchantment": "create:potato_recovery","min_level": 1},
        "level": 2})

        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "create:potato_recovery","force": false,
        "ingredients": [{"item" : "minecraft:potato"},{"item" : "minecraft:potato"},{"item" : "hexcasting:charged_amethyst"},{"item" : "morerunes:nature_rune"},{"item" : "runes:healing_stone"},{"item" : "morerunes:nature_rune"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:potato"}],
        "input": {"enchantment": "create:potato_recovery","min_level": 2},
        "level": 3})




//dimdoors
    //string_theory (useless??)




//things (--)
    //retribution (strength if block)
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "things:retribution","force": false,
  "ingredients": [{"item" : "archon:fist_of_fury"},{"item" : "create:iron_sheet"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "create:iron_sheet"},],
        "level": 1})




//netherdepthsupgrade (--)
    // hell_strider 1-> 2 (swim lava)
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherdepthsupgrade:hell_strider","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:obsidian"},{"item" : "minecraft:obsidian"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherdepthsupgrade:hell_strider","force": false,
  "ingredients": [{"item" : "runes:fire_stone"},{"item" : "minecraft:obsidian"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:obsidian"}],
  "input": {"enchantment": "netherdepthsupgrade:hell_strider","min_level": 1}, 
        "level": 2})



  
//mcdar
    //beast_boss (summon dmg++)
      //1
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_boss","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "netherexp:bone_rod"},{"item" : "netherexp:bone_rod"}],
  "level": 1})
      //2
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_boss","force": false,
  "ingredients": [{"item" : "morerunes:nature_rune"},{"item" : "mcda:wolf_pelt"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "mcda:ocelot_pelt"}],
  "input": {"enchantment": "mcdar:beast_boss","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_boss","force": false,
  "ingredients": [{"item" : "mcda:black_wolf_armor_helmet"},{"item" : "hexcasting:charged_amethyst"},{"item" : "mcdw:item_bee_stinger"},{"item" : "minecraft:blue_carpet"},{"item" : "netherexp:skull_on_a_stick"},{"item" : "minecraft:iron_block"},{"item" : "hexalia:morphora"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "mcdar:beast_boss","min_level": 2}, 
  "level": 3})

    //beast_burst (boom heal)
        //1
    event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_burst","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:gunpowder"},{"item" : "netherexp:bone_rod"}],
  "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_burst","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:tnt"},{"item" : "minecraft:tnt"},{"item" : "minecraft:tnt"}],
  "input": {"enchantment": "mcdar:beast_burst","min_level": 1}, 
  "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_burst","force": false,
  "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:tnt"},{"item" : "mcdw:crossbow_exploding_crossbow"},{"item" : "minecraft:tnt"}],
  "input": {"enchantment": "mcdar:beast_burst","min_level": 2}, 
  "level": 3})

    //beast_surge (heal stronk)
      //1
    event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_surge","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "things:mining_gloves"},{"item" : "netherexp:bone_rod"}],
  "level": 1})
      //2
  event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_surge","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "mcdar:beast_surge","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:beast_surge","force": false,
  "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "mcdar:beast_surge","min_level": 2}, 
  "level": 3})

    //cooldown
      //1
    event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:cooldown","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:clock"},{"item" : "minecraft:redstone_block"}],
  "level": 1})
      //2
  event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:cooldown","force": false,
  "ingredients": [{"item" : "create:speedometer"},{"item" : "minecraft:amethyst_shard"},{"item" : "runes:lightning_stone"},{"item" : "runes:lightning_stone"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "mcdar:cooldown","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdar:cooldown","force": false,
  "ingredients": [{"item" : "create:clockwork_bearing"},{"item" : "hexcasting:charged_amethyst"},{"item" : "archon:thunder_staff"},{"item" : "minecraft:lightning_rod"},{"item" : "minecraft:lightning_rod"},{"item" : "archon:thunder_staff"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "mcdar:cooldown","min_level": 2}, 
  "level": 3})




//more_spell_attributes
    //fertility
      //1
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:fertility","force": false,
  "ingredients": [
    {"item" : "morerunes:nature_rune"}
  ],
  "level": 1})
      //2
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:fertility","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "naturescompass:naturescompass"},{"item" : "naturescompass:naturescompass"},{"item" : "naturescompass:naturescompass"},{"item" : "naturescompass:naturescompass"}],
  "input": {"enchantment": "more_spell_attributes:fertility","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:fertility","force": false,
  "ingredients": [{"item" : "hexalia:morphora"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "more_spell_attributes:fertility","min_level": 2}, 
  "level": 3})
      //4
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:fertility","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "hexalia:morphora"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:morphora"}],
  "input": {"enchantment": "more_spell_attributes:fertility","min_level": 3}, 
  "level": 4})
      //5
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:fertility","force": false,
  "ingredients": [{"item" : "endrem:rogue_eye"},{"item" : "hexalia:morphora"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:morphora"}],
  "input": {"enchantment": "more_spell_attributes:fertility","min_level": 4}, 
  "level": 5})

//spell_channeling
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:spell_channeling","force": false,
        "ingredients": [{"item" : "hexalia:celestial_crystal"}],
        "level": 1})
        //2
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:spell_channeling","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "hexalia:celestial_crystal"},{"item" : "hexalia:celestial_crystal"},{"item" : "hexalia:celestial_crystal"},{"item" : "hexalia:celestial_crystal"}],
  "input": {"enchantment": "more_spell_attributes:spell_channeling","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:spell_channeling","force": false,
  "ingredients": [{"item": "create:experience_nugget"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "more_spell_attributes:spell_channeling","min_level": 2}, 
  "level": 3})
      //4
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:spell_channeling","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "hexcasting:charged_amethyst"},{"item" : "create:experience_block"},{"item" : "create:experience_block"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "more_spell_attributes:spell_channeling","min_level": 3}, 
  "level": 4})
      //5
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:spell_channeling","force": false,
  "ingredients": [{"item" : "endrem:cryptic_eye"},{"item" : "create:experience_block"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "create:experience_block"}],
  "input": {"enchantment": "more_spell_attributes:spell_channeling","min_level": 4}, 
  "level": 5})

    //viscosity
      //1
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:viscosity","force": false,
  "ingredients": [
    {"item" : "morerunes:blood_rune"}
  ],
  "level": 1})
      //2
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:viscosity","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:blood_rune"},{"item" : "morerunes:blood_rune"},{"item" : "morerunes:blood_rune"},{"item" : "morerunes:blood_rune"}],
  "input": {"enchantment": "more_spell_attributes:viscosity","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:viscosity","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item": "winged:demonic_flesh"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "more_spell_attributes:viscosity","min_level": 2}, 
  "level": 3})
      //4
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:viscosity","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "hexcasting:charged_amethyst"},{"item" : "things:gleaming_compound"},{"item" : "things:gleaming_compound"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "more_spell_attributes:viscosity","min_level": 3}, 
  "level": 4})
      //5
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:viscosity","force": false,
  "ingredients": [{"item" : "endrem:lost_eye"},{"item" : "create:experience_block"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "create:experience_block"}],
  "input": {"enchantment": "more_spell_attributes:viscosity","min_level": 4}, 
  "level": 5})

    //volatility (X)
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:volatility","force": false,
  "ingredients": [
    {"item" : "morerunes:wind_rune"},
  ],
  "level": 1})
      //2
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:volatility","force": false,
  "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:wind_rune"},{"item" : "morerunes:wind_rune"},{"item" : "morerunes:wind_rune"},{"item" : "morerunes:wind_rune"}],
  "input": {"enchantment": "more_spell_attributes:volatility","min_level": 1}, 
  "level": 2})
      //3
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:volatility","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "hexalia:air_node"},{"item" : "minecraft:amethyst_shard"}],
  "input": {"enchantment": "more_spell_attributes:volatility","min_level": 2}, 
  "level": 3})
      //4
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:volatility","force": false,
  "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:windsong"},{"item" : "hexalia:windsong"},{"item" : "hexcasting:charged_amethyst"}],
  "input": {"enchantment": "more_spell_attributes:volatility","min_level": 3}, 
  "level": 4})
      //5
      event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "more_spell_attributes:volatility","force": false,
  "ingredients": [{"item" : "endrem:wither_eye"},{"item" : "create:experience_block"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "create:experience_block"}],
  "input": {"enchantment": "more_spell_attributes:volatility","min_level": 4}, 
  "level": 5})




//netherexp
    //artemis
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:artemis","force": false,
        "ingredients": [{"item" : "endrem:undead_soul"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:artemis","force": false,
        "ingredients": [{"item" : "endrem:undead_soul"},{"item" : "hexcasting:charged_amethyst"},{"item" : "endrem:undead_soul"},{"item" : "endrem:undead_soul"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "netherexp:artemis","min_level": 1}, 
        "level": 2})

    //bloodshed
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:bloodshed","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:blood_rune"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:blood_rune"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:bloodshed","force": false,
        "ingredients": [{"item" : "biomesoplenty:blood_bucket"},{"item" : "morerunes:blood_rune"},{"item" : "minecraft:amethyst_shard"},{"item" : "morerunes:blood_rune"},{"item" : "morerunes:blood_rune"},{"item" : "minecraft:amethyst_shard"},{"item" : "morerunes:blood_rune"}],
        "input": {"enchantment": "netherexp:bloodshed","min_level": 1},
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:bloodshed","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:brew_of_bloodlust"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:brew_of_bloodlust"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:brew_of_bloodlust"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:brew_of_bloodlust"}],
        "input": {"enchantment": "netherexp:bloodshed","min_level": 2},
        "level": 3})

    //cartridge
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:cartridge","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:chest"},{"item" : "minecraft:dispenser"},{"item" : "minecraft:chest"},{"item" : "minecraft:amethyst_shard"}  ],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:cartridge","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:ender_chest"},{"item" : "create:portable_storage_interface"},{"item" : "minecraft:ender_chest"},{"item" : "hexcasting:charged_amethyst"}  ],
        "input": {"enchantment": "netherexp:cartridge","min_level": 1},
        "level": 2})

    //phantasm_hull
    event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:phantasm_hull","force": false,
    "ingredients": [{"item" : "sleepy_hollows:reins_of_the_spectral_horse"},{"item" : "hexalia:spirit_powder"},{"item" : "hexcasting:charged_amethyst"},{"item" : "netherexp:ectoplasm_bucket"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:spirit_powder"},],
    "level": 1})

    //recoil
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:recoil","force": false,
        "ingredients": [{ "item" : "minecraft:gunpowder"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:recoil","force": false,
        "ingredients": [{ "item" : "runes:fire_stone"},{ "item" : "minecraft:tnt"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{ "item" : "minecraft:tnt"}],
        "input": {"enchantment": "netherexp:recoil","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "netherexp:recoil","force": false,
        "ingredients": [{"item" : "bosses_of_mass_destruction:monolith_block"},{"item" : "hexalia:fire_node"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:fire_charge"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexalia:fire_node"}],
        "input": {"enchantment": "netherexp:recoil","min_level": 2}, 
        "level": 3})



//spell_engine
    //spell_infinity (too op?)



//spell_power
    //critical_chance IGN : Spell volatility
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_chance","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:blood_rune"},{"item" : "morerunes:blood_rune"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})

        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_chance","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:critical_chance","min_level": 1}, 
        "level": 2})

        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_chance","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:critical_chance","min_level": 2}, 
        "level": 3})

        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_chance","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:critical_chance","min_level": 3}, 
        "level": 4})

        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_chance","force": false,
        "ingredients": [{"item" : "blood_mages:netherite_blood_staff"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:critical_chance","min_level": 4}, 
        "level": 5})

    //critical_damage IGN : Amplify spell
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_damage","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:sound_rune"},{"item" : "morerunes:corruption_rune"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_damage","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:critical_damage","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_damage","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:critical_damage","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_damage","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:critical_damage","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:critical_damage","force": false,
        "ingredients": [{"item" : "mcdw:bow_call_of_the_void"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:critical_damage","min_level": 4}, 
        "level": 5}) 

    //energize
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:energize","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "runes:healing_stone"},{"item" : "runes:lightning_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:energize","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:energize","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:energize","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:energize","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:energize","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:energize","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:energize","force": false,
        "ingredients": [{"item" : "morewizardsmod:netherite_lightning_staff"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:energize","min_level": 4}, 
        "level": 5})

    //haste
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:haste","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "runes:arcane_stone"},{"item" : "runes:lightning_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:haste","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:haste","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:haste","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:haste","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:haste","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:haste","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:haste","force": false,
        "ingredients": [{"item" : "mcda:ocelot_armor_helmet"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:haste","min_level": 4}, 
        "level": 5})

    //magic_protection
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:magic_protection","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "morerunes:water_rune"},{"item" : "runes:soul_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:magic_protection","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:magic_protection","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:magic_protection","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "hexcasting:charged_amethyst"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:magic_protection","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:magic_protection","force": false,
        "ingredients": [{"item" : "oneironaut:hex_resistant_block"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:magic_protection","min_level": 3}, 
        "level": 4})

    //soulfrost
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:soulfrost","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "runes:soul_stone"},{"item" : "runes:frost_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:soulfrost","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:soulfrost","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:soulfrost","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:soulfrost","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:soulfrost","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:soulfrost","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:soulfrost","force": false,
        "ingredients": [{"item" : "mcdw:sword_frost_slayer"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:soulfrost","min_level": 4}, 
        "level": 5})

    //spell_power
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:spell_power","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "runes:arcane_stone"},{"item" : "runes:arcane_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:spell_power","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:spell_power","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:spell_power","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:spell_power","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:spell_power","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:spell_power","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:spell_power","force": false,
        "ingredients": [{"item" : "hextended:staff/long/mindsplice"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}], //oneironauts stuff here hold on
        "input": {"enchantment": "spell_power:spell_power","min_level": 4}, 
        "level": 5})

    //sunfire
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:sunfire","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "runes:arcane_stone"},{"item" : "runes:fire_stone"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:sunfire","force": false,
        "ingredients": [{"item" : "archon:spry_dust"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "spell_power:sunfire","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:sunfire","force": false,
        "ingredients": [{"item" : "archon:glisteel_block"},{"item" : "archon:pixie_leaves"},{"item" : "minecraft:amethyst_shard"},{"item" : "archon:pixie_leaves"},{"item" : "archon:glisteel_block"}],
        "input": {"enchantment": "spell_power:sunfire","min_level": 2}, 
        "level": 3})
        //4
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:sunfire","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "spell_power:sunfire","min_level": 3}, 
        "level": 4})
        //5
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "spell_power:sunfire","force": false,
        "ingredients": [{"item" : "battlemages:netherite_fire_flamberge"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "spell_power:sunfire","min_level": 4}, 
        "level": 5})


//mcdw
    //accelerate 1 -> 3 (machine gun)
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:accelerate","force": false,
        "ingredients": [{"item": "hexcasting:amethyst_dust"},{"item": "minecraft:arrow"},{"item": "minecraft:gold_ingot"},{"item": "minecraft:arrow"},{"item": "minecraft:gold_ingot"}],
        "level": 1})

        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:accelerate","force": false,
        "ingredients": [{"item": "create:golden_sheet"},{"item": "create:golden_sheet"},{"item": "minecraft:arrow"},{"item": "minecraft:amethyst_shard"},{"item": "minecraft:amethyst_shard"},],
        "input": {"enchantment": "mcdw:accelerate","min_level": 1}, 
        "level": 2})

        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:accelerate","force": false,
        "ingredients": [{"item": "minecraft:spectral_arrow"},{"item": "minecraft:amethyst_shard"},{"item": "mcdw:bow_twisting_vine_bow"},{"item": "minecraft:spectral_arrow"},{"item": "hexcasting:charged_amethyst"},{"item": "minecraft:spectral_arrow"},{"item": "mcdw:bow_weeping_vine_bow"},{"item": "minecraft:amethyst_shard"}],
        "input": {"enchantment": "mcdw:accelerate","min_level": 2}, 
        "level": 3})


    //ambush 1 -> 3 (+dmg sneak/invis)
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:ambush","force": false,
        "ingredients": [{"item": "hexcasting:amethyst_dust"},{"tag": "minecraft:wool"},{"tag": "minecraft:wool"},{"tag": "minecraft:wool"},{"tag": "minecraft:wool"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:ambush","force": false,
        "ingredients": [{"item": "mcda:thief_armor_helmet"},{"item": "minecraft:amethyst_shard"},{"item": "minecraft:amethyst_shard"},{"item" : "mcda:thief_armor_boots"},{"item": "minecraft:amethyst_shard"},{"item": "minecraft:amethyst_shard"}],
        "input": {"enchantment": "mcdw:ambush","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:ambush","force": false,
        "ingredients": [{"item": "artifacts:scarf_of_invisibility"},{"item": "hexcasting:charged_amethyst"},{"item": "hexcasting:charged_amethyst"},{"item": "hexcasting:charged_amethyst"},{"item": "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "mcdw:ambush","min_level": 2}, 
        "level": 3})


    //anima conduit 1-3 (Xp -> hp)
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:anima_conduit","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "create:experience_nugget"},{"item" : "create:experience_nugget"},{"item" : "create:experience_nugget"},{"item" : "create:experience_nugget"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:anima_conduit","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "create:experience_block"},{"item" : "create:experience_block"},{"item" : "create:experience_block"},{"item" : "create:experience_block"}],
        "input": {"enchantment": "mcdw:anima_conduit","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:anima_conduit","force": false,
        "ingredients": [{"item" : "hexcasting:quenched_allay_shard"},{"item" : "minecraft:experience_bottle"},{"item" : "minecraft:experience_bottle"},{"item" : "minecraft:experience_bottle"},{"item" : "minecraft:experience_bottle"},{"item" : "minecraft:experience_bottle"},{"item" : "minecraft:experience_bottle"}],
        "input": {"enchantment": "mcdw:anima_conduit","min_level": 2}, 
        "level": 3})


    //bonus shot 1 -> 3 (+1 arrow) 
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:bonus_shot","force": false,
        "ingredients": [{"item" : "mcdw:bow_haunted_bow"},{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:spectral_arrow"},{"item" : "minecraft:spectral_arrow"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:bonus_shot","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:shifting_pseudoamethyst"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:shifting_pseudoamethyst"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:shifting_pseudoamethyst"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:shifting_pseudoamethyst"}],
        "input": {"enchantment": "mcdw:bonus_shot","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:bonus_shot","force": false,
        "ingredients": [{"item" : "archon:twin_knights_soul_tome"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "archon:twin_knights_soul_tome"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "mcdw:bonus_shot","min_level": 2}, 
        "level": 3})


    //burst bowstring 1 -> 3 (shoot when jump) // nofunctionnal

    //busy bee (summon bee) //no functionnal

    //chain reaction 1 -> 3 (chain [nao functionna?]) //no functionnal

    //chains 
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:chains","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:chain"},{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:chain"},{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:chain"},{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:chain"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:chains","force": false,
        "ingredients": [{"item" : "species:birt_egg"},{"item" : "minecraft:amethyst_shard"},{"item" : "species:birt_egg"},{"item" : "minecraft:amethyst_shard"},{"item" : "species:birt_egg"},{"item" : "minecraft:amethyst_shard"},{"item" : "species:birt_egg"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "mcdw:chains","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:chains","force": false,
        "ingredients": [{"item" : "minecraft:turtle_helmet"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "mcda:turtle_armor_helmet"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "mcdw:chains","min_level": 2}, 
        "level": 3})


    //charge //no functionnal

    //cobweb shot
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:cobweb_shot","force": false,
        "ingredients": [{"item" : "mcda:spider_armor_helmet"},{"item" : "hexcasting:quenched_allay"},{"item" : "minecraft:cobweb"},{"item" : "mcdw:bow_web_bow"},{"item" : "biomesoplenty:hanging_cobweb"},{"item" : "hexcasting:quenched_allay"}],
        "level": 1})    

    //commited //no functionnal

    //critical hit
        //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:critical_hit","force": false,
        "ingredients": [{"item" : "hexcasting:amethyst_dust"},{"item" : "minecraft:rabbit_foot"},{"item" : "minecraft:rabbit_foot"}],
        "level": 1})
        //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:critical_hit","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "mcdw:critical_hit","min_level": 1}, 
        "level": 2})
        //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:critical_hit","force": false,
        "ingredients": [{"item" : "artifacts:bunny_hoppers"},{"item" : "hexcasting:charged_amethyst"},{"item" : "species:springling_egg"},{"item" : "hexcasting:charged_amethyst"},{"item" : "species:springling_egg"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "mcdw:critical_hit","min_level": 2}, 
        "level": 3})

        
    //dipping poison //only level 1
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:dipping_poison","force": false,
        "ingredients": [{"item" : "hexcasting:quenched_allay"},{"item" : "artifacts:crystal_heart"},{"item" : "mcdar:corrupted_seeds"},{"item" : "mcdar:corrupted_seeds"},{"item" : "artifacts:crystal_heart"}],
        "level": 1})


    //dynamo
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:dynamo","force": false,
        "ingredients": [{"item" : "mcdw:bow_ancient_bow"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:spellbook"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:dynamo","force": false,
        "ingredients": [{"item" : "endrem:nether_eye"},{"item" : "endrem:nether_eye"},{"item" : "mcdw:bow_ancient_bow"},{"item" : "mcdw:crossbow_corrupted_crossbow"},{"item" : "mcdw:sword_great_axeblade"},{"item" : "endrem:nether_eye"}],
        "input": {"enchantment": "mcdw:dynamo","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment":"mcdw:dynamo","force": false,
        "ingredients": [{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"},{"item" : "hexcasting:akashic_record"}],
        "input": {"enchantment": "mcdw:dynamo","min_level": 2}, 
        "level": 3})


    //echo
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:echo","force": false,
        "ingredients": [{"item" : "mcdw:spear_whispering_spear"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:spellbook"},{"item" : "hexcasting:amethyst_dust"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:echo","force": false,
        "ingredients": [{"item" : "fpapmod:fell_priest_spell_book"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:echo_shard"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:amethyst_shard"}],
        "input": {"enchantment": "mcdw:echo","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:echo","force": false,
        "ingredients": [{"item" : "betterdeepdark:echo_upgrade_smithing_template"},{"item" : "hexcasting:charged_amethyst"},{"item" : "betterdeepdark:echo_upgrade_smithing_template"},{"item" : "hexcasting:charged_amethyst"},{"item" : "betterdeepdark:echo_upgrade_smithing_template"},{"item" : "hexcasting:charged_amethyst"}],
        "input": {"enchantment": "mcdw:echo","min_level": 2}, 
        "level": 3})

    //enigma resonator
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:enigma_resonator","force": false,
        "ingredients": [{"item" : "mcdw:crossbow_soul_hunter_crossbow"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "morewizardsmod:more_wizards_soul_spell_book"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:enigma_resonator","force": false,
        "ingredients": [{"item" : "morewizardsmod:soul_staff"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexical:sentinel_bed"},{"item" : "hexcasting:quenched_allay_shard"},{"item" : "hexical:sentinel_bed"},{"item" : "hexcasting:quenched_allay_shard"}],
        "input": {"enchantment": "mcdw:enigma_resonator","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:enigma_resonator","force": false,
        "ingredients": [{"item" : "create:experience_block"},{"item" : "slate_work:save_loci"},{"item" : "create:experience_block"},{"item" : "hexcasting:akashic_record"},{"item" : "create:experience_block"},{"item" : "slate_work:save_loci"}],
        "input": {"enchantment": "mcdw:enigma_resonator","min_level": 2}, 
        "level": 3})


    //exploding
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:exploding","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_block"},{"item" : "minecraft:amethyst_block"},{"item" : "immersive_aircraft:bomb_bay"},{"item" : "immersive_aircraft:bomb_bay"},{"item" : "minecraft:amethyst_block"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:exploding","force": false,
        "ingredients": [{"item" : "mcdar:blast_fungus"},{"item" : "minecraft:bone"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:bone"}],
        "input": {"enchantment": "mcdw:exploding","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:exploding","force": false,
        "ingredients": [{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"}],
        "input": {"enchantment": "mcdw:exploding","min_level": 2}, 
        "level": 3})


    //freezing
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:freezing","force": false,
        "ingredients": [{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:media_ice"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:media_ice"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:media_ice"},{"item" : "minecraft:amethyst_shard"},{"item" : "oneironaut:media_ice"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:freezing","force": false,
        "ingredients": [{"item" : "mcda:arctic_fox_armor_helmet"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "mcda:arctic_fox_armor_boots"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},],
        "input": {"enchantment": "mcdw:freezing","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:freezing","force": false,
        "ingredients": [{"item" : "endrem:cold_eye"},{"item" : "hexcasting:quenched_allay"},{"item" : "hexcasting:quenched_allay"}],
        "input": {"enchantment": "mcdw:freezing","min_level": 2}, 
        "level": 3})


    //fuse shot
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:fuse_shot","force": false,
        "ingredients": [{"item" : "createbigcannons:impact_fuze"},{"item" : "minecraft:amethyst_shard"},{"item" : "minecraft:gunpowder"},{"item" : "minecraft:gunpowder"},{"item" : "minecraft:amethyst_shard"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:fuse_shot","force": false,
        "ingredients": [{"item" : "hexcasting:charged_amethyst"},{"item" : "createbigcannons:congealed_nitro"},{"item" : "createbigcannons:congealed_nitro"},{"item" : "createbigcannons:congealed_nitro"},{"item" : "createbigcannons:congealed_nitro"}],
        "input": {"enchantment": "mcdw:fuse_shot","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:fuse_shot","force": false,
        "ingredients": [{"item" : "createbigcannons:he_shell"},{"item" : "hexcasting:quenched_allay"},{"item" : "createbigcannons:powder_charge"},{"item" : "createbigcannons:powder_charge"},{"item" : "hexcasting:quenched_allay"}],
        "input": {"enchantment": "mcdw:fuse_shot","min_level": 2}, 
        "level": 3})
    //gravity
            //1
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:gravity","force": false,
        "ingredients": [{"item" : "things:item_magnet"},{"item" : "hexcasting:amethyst_dust"},{"item" : "things:item_magnet"},{"item" : "hexcasting:amethyst_dust"},{"item" : "things:item_magnet"},{"item" : "hexcasting:amethyst_dust"}],
        "level": 1})
            //2
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:gravity","force": false,
        "ingredients": [{"item" : "elemental_metals:lightning_infused_iron_block"},{"item" : "minecraft:amethyst_shard"},{"item" : "elemental_metals:lightning_infused_iron_block"},{"item" : "minecraft:amethyst_shard"},{"item" : "elemental_metals:lightning_infused_iron_block"},{"item" : "minecraft:amethyst_shard"},{"item" : "elemental_metals:lightning_infused_iron_block"},{"item" : "minecraft:amethyst_shard"},],
        "input": {"enchantment": "mcdw:fuse_shot","min_level": 1}, 
        "level": 2})
            //3
        event.custom({"type": "enchantment_infusion:enchantment_infusion","enchantment": "mcdw:gravity","force": false,
        "ingredients": [{"item" : "mcdw:bow_wind_bow"},{"item" : "minecraft:lightning_rod"},{"item" : "hexcasting:charged_amethyst"},{"item" : "hexcasting:charged_amethyst"},{"item" : "minecraft:lightning_rod"}],
        "input": {"enchantment": "mcdw:fuse_shot","min_level": 2}, 
        "level": 3})
//beta 0.1.0 here
    //growing
    //guarding strike
    //illager's bane
    //jungle poison
    //leeching
    //levitation shot
    //multishot
    //overcharge
    //pain cycle
    //phantom's mark
    //poison cloud
    //prospector
    //radiance
    //rampaging
    //replenish
    //refreshement
    //ricochet
    //rushdown
    //shadow barb
    //shadow shot
//beta 0.1.1 here
    //shared pain
    //shockwave
    //smiting
    //soul devorer
    //soul siphon
    //stunning
    //swirling
    //tempo theft
    //thundering
    //void shot
    //void strike
    //weakening
    //wild rage

//mcda
    //bag_of_souls
    //burning
    //chilling
    //cowardice
    //death_barter
    //deflect
    //fire_focus
//beta 0.1.2 here
    //fire_trail
    //food_reserves
    //frenzied
    //heal_allies
    //lucky_explorer
    //poison_focus
    //poison_barrier
    //reckless
    //recycler
    //snowball
    //surprise_gift
    //swiftfooted
    
})

