const colors = ["cyan", "red", "purple", "orange", "#7cb490", "#ffff00", "#002c2b", "#2e1437" , "rgba(34, 166, 179,1.0)" , "rgba(106, 176, 76,1.0)"]; 
const btn = document.getElementById('btn');
const color = document.querySelector('.color')


btn.addEventListener('click' , function () {
    // const randomNumber = getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[getRandomNumber()];
    color.textContent = colors[getRandomNumber()]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

console.log(getRandomNumber());