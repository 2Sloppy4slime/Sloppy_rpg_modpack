PlayerEvents.inventoryOpened('minecraft:anvil', event => {
    let player = event.getPlayer()
    let inventory = event.inventoryContainer
    let rightslot = inventory.getSlot(1)
    let leftslot = inventory.getSlot(0)
    Utils.runAsync(function checkInventory () {
        if (!(inventory === player.containerMenu)) {
            return
        }
        
            for ( var i = 0 ; i < leftslot.getItem().getEnchantments().keySet().length; i++){
                
                for ( var j = 0 ; j < rightslot.getItem().getEnchantments().keySet().length; j++){
                    if (rightslot.getItem().getEnchantments()[rightslot.getItem().getEnchantments().keySet()[j]] == leftslot.getItem().getEnchantments()[leftslot.getItem().getEnchantments().keySet()[i]] && leftslot.getItem().getEnchantments().keySet()[i] == rightslot.getItem().getEnchantments().keySet()[j])
                    { player.tell("tried to fuse enchant level, rank one up in the infusion table")
                        inventory.clicked(0, 1, 'quick_move', player)
                        inventory.clicked(1, 1, 'quick_move', player)
                    }
                }
            }
       Utils.server.scheduleInTicks(1,() => {
        checkInventory()
       })
        return
    })
})
