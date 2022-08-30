let statusQuizz = false;

function finishQuiz (){
    const contenerResponse = document.querySelector ("#respostas")
    const contenerThanks = document.querySelector ("#thanks")
    if (!statusQuizz) {
        contenerResponse.style = "display: none";
        contenerThanks.style = "display: flex ;font-size:20px";
        
    } else {
        contenerResponse.style = "display: flex";
        contenerThanks.style = "display: none";
    }

    
}