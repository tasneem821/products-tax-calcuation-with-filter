let products =[
    {name:"tea",price:50,category:"drinks",priceAfterTax:null},
    {name:"salmon",price:200,category:"fish",priceAfterTax:null},
    {name:"apple",price:75,category:"fruits",priceAfterTax:null},
    {name:"carrot",price:120,category:"vegetable",priceAfterTax:null},

]

let taxRate = 0.14;
let taxcalculation = products.map((ele)=>{
    return ele.price+(ele.price * taxRate);
})
for(let num =0;num<products.length;num++){
   products[num].priceAfterTax= taxcalculation[num]
}
let answer = document.getElementById("answer");
for(let i=0;i<products.length;i++){
answer.innerHTML+=`
<li>
<h3>${products[i].name}</h3>
<p>the real price: ${products[i].price}</p>
<p>price after tax calcuation: ${products[i].priceAfterTax}</p>
<p>category: ${products[i].category}</p>
</li>
`
}


let showButton = document.getElementById("productFitler");

showButton.addEventListener("click",()=>{
answer.innerHTML=``;
let productsafterFilter = products.filter((ele)=>{
    return ele.priceAfterTax>=100;
})
for(let i=0;i<productsafterFilter.length;i++){
answer.innerHTML+=`
<li>
<h3>${productsafterFilter[i].name}</h3>
<p>the real price: ${productsafterFilter[i].price}</p>
<p>price after tax calcuation: ${productsafterFilter[i].priceAfterTax}</p>
<p>category: ${productsafterFilter[i].category}</p>
</li>
`
}

})