const forma = document.querySelector('#forma')

let imgQuadrado = document.createElement('img')
let imgRetangulo = document.createElement('img')
let imgTriangulo = document.createElement('img')
let imgLosango = document.createElement('img')

let check = document.querySelector('#check')

function quadrado() {

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgQuadrado.setAttribute('src', 'Imagens/quadrado.png')
    imgQuadrado.style.display = 'block'

    forma.appendChild(imgQuadrado)
    forma.style.animation = '500ms increaseOut'

    imgQuadrado.style.width = '300px'
    imgQuadrado.style.marginTop = '-250px'
    imgQuadrado.style.marginLeft = '600px'

    check.style.marginTop = '15px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgQuadrado.style.animation = '360s rotateForma infinite'

    }, 500)

}

function retangulo() {

    imgQuadrado.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'
    
    imgRetangulo.setAttribute('src', 'Imagens/retangulo.png')
    imgRetangulo.style.display = 'block'

    forma.appendChild(imgRetangulo)
    forma.style.animation = '500ms increaseOut'

    imgRetangulo.style.width = '400px'
    imgRetangulo.style.marginTop = '-240px'
    imgRetangulo.style.marginLeft = '550px'

    check.style.marginTop = '83px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgRetangulo.style.animation = '360s rotateForma infinite'

    }, 500)

}

function triangulo() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTriangulo.setAttribute('src', 'Imagens/triangulo.png')
    imgTriangulo.style.display = 'block'

    forma.appendChild(imgTriangulo)
    forma.style.animation = '500ms increaseOut'

    imgTriangulo.style.width = '300px'
    imgTriangulo.style.marginTop = '-240px'
    imgTriangulo.style.marginLeft = '600px'

    check.style.marginTop = '143px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTriangulo.style.animation = '360s rotateForma infinite'

    }, 500)

}

function losango() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.setAttribute('src', 'Imagens/losango.png')
    imgLosango.style.display = 'block'

    forma.appendChild(imgLosango)
    forma.style.animation = '500ms increaseOut'

    imgLosango.style.width = '200px'
    imgLosango.style.marginTop = '-280px'
    imgLosango.style.marginLeft = '650px'

    check.style.marginTop = '205px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgLosango.style.animation = '360s rotateForma infinite'

    }, 500)

}