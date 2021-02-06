const forma = document.querySelector('#forma')

let imgQuadrado = document.createElement('img')
let imgRetangulo = document.createElement('img')

let check = document.querySelector('#check')

function quadrado() {

    imgRetangulo.style.opacity = '0'

    imgQuadrado.setAttribute('src', 'Imagens/quadrado.png')
    imgQuadrado.style.opacity = '1'

    forma.appendChild(imgQuadrado)
    forma.style.animation = '500ms increaseOut'

    imgQuadrado.style.width = '300px'
    imgQuadrado.style.marginTop = '-250px'
    imgQuadrado.style.marginLeft = '600px'

    check.style.transition = '250ms'
    check.style.marginTop = '15px'
    check.style.opacity = '1'

    setTimeout(function () {

        imgQuadrado.style.animation = '360s rotateForma infinite'

    }, 500)

}

function retangulo() {

    imgQuadrado.style.opacity = '0'
    
    imgRetangulo.setAttribute('src', 'Imagens/retangulo.png')
    imgRetangulo.style.opacity = '1'

    forma.appendChild(imgRetangulo)
    forma.style.animation = '500ms increaseOut'

    imgRetangulo.style.width = '400px'
    imgRetangulo.style.marginTop = '-240px'
    imgRetangulo.style.marginLeft = '550px'

    check.style.marginTop = '83px'
    check.style.opacity = '1'

    setTimeout(function () {

        imgRetangulo.style.animation = '360s rotateForma infinite'

    }, 500)

}