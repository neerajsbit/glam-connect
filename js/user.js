var Form5 = document.getElementById("form5");
var Form6 = document.getElementById("form6");
var Form7 = document.getElementById("form7");
var Form8 = document.getElementById("form8");

var Next4 = document.getElementById("Next4");
var Next5 = document.getElementById("Next5");
var Next6 = document.getElementById("Next6");

var Back4 = document.getElementById("Back4");
var Back5 = document.getElementById("Back5");
var Back6 = document.getElementById("Back6");

var progress1 = document.getElementById("progress1");

Next4.onclick = function(){
    Form5.style.left = "-450px";
    Form6.style.left="40px";
    progress1.style.width="240px"
}

Back4.onclick = function(){
    Form5.style.left = "40px";
    Form6.style.left="450px";
    progress1.style.width="110px"
}

Next5.onclick = function(){
    Form6.style.left = "-450px";
    Form7.style.left="40px";
    progress1.style.width="360px";
}

Back5.onclick = function(){
    Form6.style.left = "40px";
    Form7.style.left="450px";
    progress1.style.width="240px";
}

Next6.onclick = function(){
    Form7.style.left = "-450px";
    Form8.style.left="40px";
    progress1.style.width="468px";
}

Back6.onclick = function(){
    Form7.style.left = "40px";
    Form8.style.left="450px";
    progress1.style.width="360px";
}