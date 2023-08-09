let purple = document.querySelector('.purple')
let gold = document.querySelector('.gold')
let silver = document.querySelector('.silver')
let spaceBlack = document.querySelector('.spaceBlack')
let img = document.querySelector('.img_iphone')

purple.onclick = () => {
    img.style.backgroundImage = `url("./img/black.png")`
    img.style.backgroundSize = `cover`
}
gold.onclick = () => {
    img.style.backgroundImage = `url("./img/goldish.png")`
    img.style.backgroundSize = `cover`

}
silver.onclick = () => {
    img.style.backgroundImage = `url("./img/silverish.png")`
    img.style.backgroundSize = `cover`

}
spaceBlack.onclick = () => {
    img.style.backgroundImage = `url("./img/gray.png")`
    img.style.backgroundSize = `cover`

}

let colorText = document.querySelector('.col_text')

purple.onmouseenter = () => {
    colorText.innerHTML = ' - Deep Purple'
    colorText.style.fontSize = '19px' 
    colorText.style.fontWeight = '700'
}
gold.onmouseenter = () => {
    colorText.innerHTML = ' - Gold'
    colorText.style.fontSize = '19px' 
    colorText.style.fontWeight = '700'
}
silver.onmouseenter = () => {
    colorText.innerHTML = ' - Silver'
    colorText.style.fontSize = '19px' 
    colorText.style.fontWeight = '700'
}
spaceBlack.onmouseenter = () => {
    colorText.innerHTML = ' - Space Black'
    colorText.style.fontSize = '19px' 
    colorText.style.fontWeight = '700'
}

