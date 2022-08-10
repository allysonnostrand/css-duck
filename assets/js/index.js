let duckHead = document.getElementById('duckHead');
let duckBody = document.getElementById('duckBody');
let duckWing = document.getElementById('duckWing');

document.getElementById('pinkBtn').addEventListener('click', e => {
    duckHead.style.backgroundColor = '#fce1e4';
    duckBody.style.backgroundColor = '#fce1e4';
    duckWing.style.backgroundColor = '#fce1e4';
})

document.getElementById('blueBtn').addEventListener('click', e => {
    duckHead.style.backgroundColor = '#daeaf6';
    duckBody.style.backgroundColor = '#daeaf6';
    duckWing.style.backgroundColor = '#daeaf6';
})

document.getElementById('greenBtn').addEventListener('click', e => {
    duckHead.style.backgroundColor = '#ddedea';
    duckBody.style.backgroundColor = '#ddedea';
    duckWing.style.backgroundColor = '#ddedea';
})

document.getElementById('yellowBtn').addEventListener('click', e => {
    duckHead.style.backgroundColor = '#fcf4dd';
    duckBody.style.backgroundColor = '#fcf4dd';
    duckWing.style.backgroundColor = '#fcf4dd';
})

document.getElementById('brownBtn').addEventListener('click', e => {
    duckHead.style.backgroundColor = '#eddcd2';
    duckBody.style.backgroundColor = '#eddcd2';
    duckWing.style.backgroundColor = '#eddcd2';
})

document.getElementById('sproutBtn').addEventListener('click', e => {
    let sproutStem = document.createElement("div")
    sproutStem.style.cssText = `
        background-color: green;
        height: 50px;
        width: 8px;
        position: relative;
        bottom: 130px;
    `
    duckHead.appendChild(sproutStem)
    let sproutLeafLeft = document.createElement("div");
    sproutLeafLeft.style.cssText = `
        background-color: green;
        border-radius: 30% 70% 0% 100% / 30% 100% 0% 70%;
        height: 30px;
        width: 30px;
        position: relative;
        bottom: 200px;
        right: 15px;
    `
    duckHead.appendChild(sproutLeafLeft)

    let sproutLeafRight = document.createElement("div");
    sproutLeafRight.style.cssText = `
        background-color: green;
        border-radius: 30% 70% 0% 100% / 30% 100% 0% 70%;
        height: 30px;
        width: 30px;
        position: relative;
        bottom: 230px;
        left: 15px;
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    `
    duckHead.appendChild(sproutLeafRight)
})

