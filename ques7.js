function getHashTags(str){
    let string=str.toLowerCase().replace(/[^a-z]/gi," ")
    .split(" ").sort((a,b)=>b.length-a.length)
    .map((word)=>"#"+word);
    return string.splice(0,3);
}




console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
