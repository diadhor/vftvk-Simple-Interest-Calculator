'use strict'
//---variables---
var  rateValue=document.getElementById('rate');
var  percentageValue=document.getElementById('percentage');
var  yearValue=document.getElementById('years');   

//--> Functions---
function rateInterest() {
    percentageValue.innerHTML=`${rateValue.value}%`;
}

function computeInterest(){
    let rate=parseInt(rateValue.value);
    let percentage=parseInt(percentageValue.value);
    let year=parseInt(yearValue.value);
   let result=rate*percentage*year;
    console.log(result);
}
computeInterest();

//-->Call to functions

window.onload=function() {
    rateInterest();
}

rateValue.onpointermove=rateInterest;

