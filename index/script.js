const forma = document.querySelector('#forma')

let check = document.querySelector('#check')

let imgQuadrado = document.createElement('img')
let imgRetangulo = document.createElement('img')
let imgTriangulo = document.createElement('img')

let imgLosango = document.createElement('img')
let imgTrapezio = document.createElement('img')
let imgCirculo = document.createElement('img')

let medidas = document.querySelector('#medidas')

let base = document.querySelector('#baseForma')
let altura = document.querySelector('#alturaForma')

function quadrado() {

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgQuadrado.setAttribute('src', 'Imagens/quadrado.png')
    imgQuadrado.style.display = 'block'

    forma.appendChild(imgQuadrado)
    forma.style.animation = '500ms increaseOut'

    imgQuadrado.style.width = '200px'
    imgQuadrado.style.position = 'relative'
    imgQuadrado.style.top = '-210px'
    imgQuadrado.style.margin = 'auto'

    check.style.marginTop = '15px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgQuadrado.style.animation = '360s rotateForma infinite'

    }, 500)

    medidas.style.marginTop = '-66px'

}

function calcular() {

    if (base.value.length == 0 || altura.value.length == 0) {

        alert('[ERRO] Preencha todos as medidas')

    } else {

        var b = Number(base.value) 
        var h = Number(altura.value)
        
        b *= 10
        h *= 10

        var widthQuadrado = parseInt(imgQuadrado.style.width, 10)
        var heightQuadrado = parseInt(imgQuadrado.style.height, 10)

        imgQuadrado
        
    }

}

function retangulo() {

    imgQuadrado.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'
    
    imgRetangulo.setAttribute('src', 'Imagens/retangulo.png')
    imgRetangulo.style.display = 'block'

    forma.appendChild(imgRetangulo)
    forma.style.animation = '500ms increaseOut'

    imgRetangulo.style.width = '250px'
    imgRetangulo.style.position = 'relative'
    imgRetangulo.style.top = '-210px'
    imgRetangulo.style.margin = 'auto'

    check.style.marginTop = '83px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgRetangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    medidas.style.marginTop = '-33px'

}

function triangulo() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgTriangulo.setAttribute('src', 'Imagens/triangulo.png')
    imgTriangulo.style.display = 'block'

    forma.appendChild(imgTriangulo)
    forma.style.animation = '500ms increaseOut'

    imgTriangulo.style.width = '200px'
    imgTriangulo.style.position = 'relative'
    imgTriangulo.style.top = '-210px'
    imgTriangulo.style.margin = 'auto'

    check.style.marginTop = '143px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTriangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    medidas.style.marginTop = '-40px'

}

function losango() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgLosango.setAttribute('src', 'Imagens/losango.png')
    imgLosango.style.display = 'block'

    forma.appendChild(imgLosango)
    forma.style.animation = '500ms increaseOut'

    imgLosango.style.width = '200px'
    imgLosango.style.position = 'relative'
    imgLosango.style.top = '-210px'
    imgLosango.style.margin = 'auto'

    check.style.marginTop = '200px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgLosango.style.animation = '360s rotateForma infinite'

    }, 500)

    medidas.style.marginTop = '-133px'

}

function trapezio() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgTrapezio.setAttribute('src', 'Imagens/trapezio.png')
    imgTrapezio.style.display = 'block'

    forma.appendChild(imgTrapezio)
    forma.style.animation = '500ms increaseOut'

    imgTrapezio.style.width = '200px'
    imgTrapezio.style.position = 'relative'
    imgTrapezio.style.top = '-200px'
    imgTrapezio.style.margin = 'auto'

    check.style.marginTop = '280px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTrapezio.style.animation = '360s rotateForma infinite'

    }, 500)

    medidas.style.marginTop = '1px'

}

function circulo() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.setAttribute('src', 'Imagens/circulo.png')
    imgCirculo.style.display = 'block'

    forma.appendChild(imgCirculo)
    forma.style.animation = '500ms increaseOut'

    imgCirculo.style.width = '200px'
    imgCirculo.style.position = 'relative'
    imgCirculo.style.top = '-210px'
    imgCirculo.style.margin = 'auto'

    check.style.marginTop = '348px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    medidas.style.marginTop = '-65px'

}