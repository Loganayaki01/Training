let bookList =  
[
{name:'Javascript Good parts', author:'Douglas Crockford', stock:'10'},
{name:'A Smarter Way to Learn JavaScript', author:'Mark Meyers', stock:'12'},
{name:'Effective Javascript', author:'David Herman', stock: '0'}
]
let arr=bookList.filter((e)=>e.stock!=0)
arr.map((e)=>{
    console.log(JSON.stringify(e,(key,value)=>key==='stock'?undefined:value))
});
