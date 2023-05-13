const getFilteredItems = () => {
    console.log("OK")
    return equipmentResponse.equipped_items.filter(item => item.slot.type != "TABARD" && item.slot.type != "SHIRT" )
}

const calculateIlvl = (equipmentArray) => {
    let totalIlvl = 0;
    equipmentArray.forEach(element => {
        totalIlvl += element.level.value
    });
    return totalIlvl/equipmentArray.length
}

export default {
    getFilteredItems, calculateIlvl
}