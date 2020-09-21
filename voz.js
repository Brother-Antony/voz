document.getElementById('hablar').addEventListener("click",()=> {
    decir(document.getElementById("text").value);
});

function decir(texto) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
