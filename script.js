'use strict'
//---variables---
var  rateValue=document.getElementById('rate');
var  percentageValue=document.getElementById('percentage');

//---Functions---
function rateInterest() {
    percentageValue.innerHTML=`${rateValue.value}%`;
}


//-->Call to functions

window.onload=function() {
    rateInterest();
}
/*
document.getElementById('rate').onpointermove=function(){rateInterest()};
console.log(document.getElementById('rate'));
*/