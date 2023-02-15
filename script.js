function rateInterest() {
    let rate=document.getElementById('rate');
    let percentage=document.getElementById('percentage');
    percentage.innerHTML=rate.value;
}

window.onload=function() {
    rateInterest();
}