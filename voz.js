document.getElementById('hablar').addEventListener("click",()=> {
    decir(document.getElementById("texto").value);
});

function decir(texto) {
    SpeechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
