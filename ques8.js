let car = {name:'Audi', model:'X400',color:'white'}
function properties(cars){
for(let prop in car){
    console.log(prop);
}
}
properties(car);