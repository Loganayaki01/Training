import fetch from "node-fetch";

const api_url = "https://demo7303877.mockable.io/"


const filteringBrandandRange = (products,brand,maxRange = Number.MAX_VALUE,minRange = Number.MIN_VALUE) => {
  let filterBrand = products?.filter((item) =>{
    return item.brand === brand && minRange<=item.price && maxRange>item.price;
    //return item.brand === brand;
  })
  return filterBrand;
}

const minMaxPrice = (products) => {
  let minPrice = Number.MAX_VALUE;
  let maxPrice = Number.MIN_VALUE;
  for (let i = 0;i<products.length;i++){
    if (minPrice>products[i].price)
      minPrice = products[i].price;
    else if (maxPrice<products[i].price)
      maxPrice = products[i].price;
  }
  return {MinimumPrice:minPrice,MaximumPrice:maxPrice};
}


const productListMethod = (productList,products)=> {
  let result = [];
  for (let i = 0;i<productList.length;i++){
    for (let j = 0;j<products.length;j++){
      if (productList[i] === products[j].productName)
        result.push(products[j].productName)
    }
  }
  return result;
}


const getApi = async function(url){
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();

  // console.log(data);
   let minMaxob = minMaxPrice(data.products);
   console.log(`Maximum Value : ${minMaxobj.MaximumPrice} And Minimum Value : ${minMaxobj.MinimumPrice}`);
   console.log(filteringBrandandRange(data.products,'HRX by Hrithik Roshan',1500,1000));
  console.log(productListMethod(["Fastrack Unisex Black & Green Reflex 2.0 Smart Band","Red Tape Men Black Leather Loafers","Roadster Men Black Solid Tailored Jacket","Just for Fun"],data.products));
}

getApi(api_url);
