let vegetables=['carrot', 'tomato','cucumber','cabbage','potato'];
let colors=['orange','red','green','white','brown'];
function color(veg){
    let indexveg=vegetables.findIndex(element=>element==veg);
    console.log(colors[indexveg]);
}
color("tomato");
