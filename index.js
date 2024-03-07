document.getElementById("countButton").addEventListener("click", (e) => {
    const userText = document.getElementById("userText").value
    if(userText.trim()) {
        document.getElementById("letters").innerHTML = userText.replace(/[^A-Za-zА-Яа-я]/gu, '').length || "0"
        document.getElementById("words").innerHTML = userText.split(/\s+/).filter((word) => word.length > 0).length || "0"
        document.getElementById("sentences").innerHTML = userText.split(/\s+/).filter(str => str.length && /\w[.?!]+(\s|$)/.test(str)).length || "0"
    } else {
        document.getElementById("letters").innerHTML = "0"
        document.getElementById("words").innerHTML = "0"
        document.getElementById("sentences").innerHTML = "0"
    }
})

document.getElementById("rndColor").addEventListener("click", () => {
    document.getElementById("root").style.backgroundColor = randomBackgroundColor()
})

document.getElementById("resetColor").addEventListener("click", () => {
    document.getElementById("root").style.backgroundColor = `rgb(255,255,255)`
})

function randomBackgroundColor() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}