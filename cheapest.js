const phones = [ 
    { name :'Samsung', camera :'12', storage: '32gb', price: 36000, color: 'silver'},
    { name :'Walton', camera :'10', storage: '32gb', price: 25000, color: 'black'},
    { name :'Iphone', camera :'10', storage: '32gb', price: 45000, color: 'black'},
    { name :'Xiaomi', camera :'10', storage: '32gb', price: 30000, color: 'black'},
    { name :'Opoo', camera :'10', storage: '32gb', price: 45000, color: 'black'},
    { name :'OnePlus', camera :'10', storage: '32gb', price: 65000, color: 'black'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);