var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");
var Form4 = document.getElementById("form4");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");

var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");

var progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left="40px";
    progress.style.width="240px"
}

Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left="450px";
    progress.style.width="110px"
}

Next2.onclick = function(){
    Form2.style.left = "-450px";
    Form3.style.left="40px";
    progress.style.width="360px";
}

Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left="450px";
    progress.style.width="240px";
}

Next3.onclick = function(){
    Form3.style.left = "-450px";
    Form4.style.left="40px";
    progress.style.width="468px";
}

Back3.onclick = function(){
    Form3.style.left = "40px";
    Form4.style.left="450px";
    progress.style.width="360px";
}