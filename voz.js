document.getElementById('hablar').addEventListener("click",()=> {
    decir(document.getElementById("text").value);
});

function decir(text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
