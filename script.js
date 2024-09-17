// Selección de elementos
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let screen5 = document.getElementById("screen5");
let screen6 = document.getElementById("screen6");

document.getElementById("next1").addEventListener("click", function() {
    screen1.style.display = "none";
    screen2.style.display = "block";
});

document.getElementById("yesButton").addEventListener("click", function() {
    screen2.style.display = "none";
    screen3.style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
    alert("Amor, sabes que sí 😜");
});

document.getElementById("next2").addEventListener("click", function() {
    screen3.style.display = "none";
    screen4.style.display = "block";
});

document.getElementById("next3").addEventListener("click", function() {
    screen4.style.display = "none";
    screen5.style.display = "block";
});

document.getElementById("next4").addEventListener("click", function() {
    screen5.style.display = "none";
    screen6.style.display = "block";
});
