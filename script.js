'use strict'
//---Easy console.log();
var c=Object.assign(console).log;
//---variables---
var  amountValue=document.getElementById('principal');
var  rateValue=document.getElementById('rate');
var  percentageValue=document.getElementById('percentage'); //Put in value of input range
var  yearValue=document.getElementById('years');   
var  button=document.getElementById('btnCompute');
	//--- Variables to present all the results
var resultDiv=document.querySelector('.textBox');
var resultAmount=document.getElementById('amountInsert');
var resultRate=document.getElementById('rateInserted');
var resultYear=document.getElementById('yearResult');
var resultValue=document.getElementById('result');	

//---Functions---
function validations() {
	if(parseInt(amountValue.value)===0 || parseInt(amountValue.value)<=0 || amountValue.value==='' || amountValue.value==null) {
		setTimeout(()=>{
			alert('Enter a positive number');
			amountValue.value='';
        	resultDiv.hidden=true;
        	return
		}, 500)
		return true;
	}
	return false;
}

function getYear() {
	let date=new Date();
	return  date.getFullYear();
}

function rateInterest() {
    percentageValue.innerHTML=`${rateValue.value}%`;
}

function computeInterest() {
	let rate=parseFloat(rateValue.value), amount=parseFloat(amountValue.value), year=parseInt(yearValue.value);
	c(`${rate} ${amount} ${year}`);
	return rate*amount*year;
}

function setResult() {
	if(validations()) {
        resultDiv.hidden=true;
		resultAmount.innerHTML='';
		resultRate.innerHTML='';
		resultYear.innerHTML='';
		resultValue.innerHTML='';
		return;
	};
	let result=computeInterest();
    resultDiv.hidden=false;
	resultAmount.innerHTML=amountValue.value;
	resultRate.innerHTML=rateValue.value;
	resultYear.innerHTML=getYear()+parseInt(yearValue.value);
	resultValue.innerHTML=result;
}

//-->Call to functions
rateValue.onpointermove=rateInterest;
button.onclick=setResult;
amountValue.oninput=validations;
//-->Call window at the begin
window.onload=function() {
    rateInterest();
}

