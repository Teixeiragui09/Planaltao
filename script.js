window.onload = ()=>{
    initSlider()
}

function initSlider(){
    //iniciando o slider
    let sliderButtons = document.getElementsByClassName('slider-button')[0]
    sliderButtons.children[0].checked = true //marcando o checkbox do primeiro botao
    
    let slider = document.getElementsByClassName('slider-images')[0]
    slider.children[0].classList.add('active') //setando a primeira imagem como ativa
    
    let count = 0

    setInterval(() => {
        count = alterSlider(count, slider, sliderButtons)
    }, 2000)
    slider.children[0].classList.add('active')
}

function alterSlider(count, slider, sliderButtons){
    slider.children[count].classList.remove('active')
    count++
    if(count > 3) count = 0
    sliderButtons.children[count].checked = true
    slider.children[count].classList.add('active')
    return count
}

function showMenu(){
    document.getElementsByClassName('menu-lateral')[0].classList.add('menu-active')
    document.getElementsByClassName('menu-background')[0].style.display = 'block'
}
function hidenMenu(){
    console.log('teste')
    document.getElementsByClassName('menu-lateral')[0].classList.remove('menu-active')
    document.getElementsByClassName('menu-background')[0].style.display = 'none'
}