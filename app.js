var td1 = Number(document.getElementById('td1').innerHTML);
var td2 = Number(document.getElementById('td2').innerHTML);
var td3 = Number(document.getElementById('td3').innerHTML);
var td4 = Number(document.getElementById('td4').innerHTML);
var avg = document.getElementById('avg');

var array =[td1, td2, td3, td4];
var sum = 0;

for (var i = 0; i < array.length; i++) {
    sum = array[i] + sum;
}


function myFunction(){
    avg.innerHTML = sum/array.length
 }