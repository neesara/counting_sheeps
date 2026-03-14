let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let saveCount = count + ", "
    saveEl.textContent += saveCount
    countEl.innerText = 0
    console.log(saveEl.innerText)
    count = 0
}
