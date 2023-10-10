/*
fixed : per item wood requirements 
1.chair --> 3 cft
2.table --> 10 cft 
3.bed --> 50 cft
vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalwood = chairWood + tableWood + bedWood;
    return totalwood;

}
const totalwood = woodCalculator(1, 4, 3);
console.log('total wood required: ',totalwood);