const countButton = document.getElementById("countButton")
countButton.addEventListener("click", (e) => {
    const userText = document.getElementById("userText").value
    if(userText.trim()) {
        const lettersCount = userText.replace(/[^A-Za-zА-Яа-я]/gu, '').length;
        const wordsCount = userText.split(/\s+/).filter((word) => word.length > 0).length;
        const sentencesCount = userText.split(/[.!?]+/).filter((sentence) => sentence.length > 0).length;

        const letters = document.getElementById("letters")
        letters.innerHTML = lettersCount || "0"
        const words = document.getElementById("words")
        words.innerHTML = wordsCount || "0"
        const sentences = document.getElementById("sentences")
        sentences.innerHTML = sentencesCount  || "0"
    } else {
        document.getElementById("letters").innerHTML = "0"
        document.getElementById("words").innerHTML = "0"
        document.getElementById("sentences").innerHTML = "0"
    }
})

const rndColor = document.getElementById("rndColor").addEventListener("click", () => {
    const rootBox = document.getElementById("root").style.backgroundColor = randomBackgroundColor()
})

const resetColor = document.getElementById("resetColor").addEventListener("click", () => {
    const rootBox = document.getElementById("root").style.backgroundColor = `rgb(255,255,255)`
})

function randomBackgroundColor() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}