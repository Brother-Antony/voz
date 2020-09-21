document.getElementById('hablar').addEventListener("click",()=> {
    decir(document.getElementById("text").value);
});

function decir(texto) {
    SpeechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
