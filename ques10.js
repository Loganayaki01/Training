function productOfNumbers(...num){
   
    let product=1;
    for(let i=0;i<num.length;i++){
      
      product=product*num[i];
    }
    return product;
}

console.log(productOfNumbers(1,2,3));