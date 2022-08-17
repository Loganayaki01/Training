//  let arr=[1,[2,3,4]];
//  let len=0;
//  function res(array){
//     for(let i in array)
//     if(Array.isArray(array[i])){
//         res(array[i])
//     }
//         else{
//             len++;
//         }
// return len;
//     }

//  res(arr);
console.log("hi");

let arr=[1,[2,[3,4]]];
console.log(arr.flat(Infinity).length);