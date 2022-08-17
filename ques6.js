// let string="good Will Hunting";

// function titleCaseEdit(title){
//     let word=title.split(' ');
//     for(let  i=0;i<word[i].length();i++){
//       return word[i].charAt(0).toUpperCase()+word[i].slice(1);

// }
// console.log
// }

// console.log(titleCaseEdit());
// function titleCaseEdit(title){
//     let words=[];
//     for(let i=0;i<title.length();i++){
//         let word=title.split("");
//         for(let i=0;i<word.length();i++){
//             let upper=word[i].charAt(0).toUpperCase()+word[i].slice(1);
//             return upper;
//         }
//         return words.join();
//     }

// }
// titleCaseEdit("the Road not taken");

function titleCaseEdit(title){
    return title.split(' ').map((word)=>word[0].toUpperCase()+word.slice(1).toLowerCase())
    .join(' ');
}
console.log(titleCaseEdit("the Road not taken"));
