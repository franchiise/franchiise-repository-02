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

    imgQuadrado.style.width = '200px'
    imgQuadrado.style.height = '200px'

    imgQuadrado.style.display = 'block'

    imgQuadrado.style.animation = '500ms increaseOut'

    forma.appendChild(imgQuadrado)

    check.style.marginTop = '15px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgQuadrado.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

}

function retangulo() {

    imgQuadrado.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'
    
    imgRetangulo.setAttribute('src', 'Imagens/retangulo.png')

    imgRetangulo.style.width = '250px'
    imgRetangulo.style.height = '180px'

    imgRetangulo.style.display = 'block'

    imgRetangulo.style.animation = '500ms increaseOut'

    forma.appendChild(imgRetangulo)

    check.style.marginTop = '83px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgRetangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

}

function triangulo() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgTriangulo.setAttribute('src', 'Imagens/triangulo.png')

    imgTriangulo.style.width = '200px'
    imgTriangulo.style.height = '180px'

    imgTriangulo.style.display = 'block'

    imgTriangulo.style.animation = '500ms increaseOut'

    forma.appendChild(imgTriangulo)
    
    check.style.marginTop = '143px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTriangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

}

function losango() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgLosango.setAttribute('src', 'Imagens/losango.png')

    imgLosango.style.width = '200px'

    imgLosango.style.display = 'block'

    imgLosango.style.animation = '500ms increaseOut'

    forma.appendChild(imgLosango)

    check.style.marginTop = '200px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgLosango.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

}

function trapezio() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgTrapezio.setAttribute('src', 'Imagens/trapezio.png')

    imgTrapezio.style.width = '250px'
    imgTrapezio.style.height = '150px'
    
    imgTrapezio.style.display = 'block'

    imgTrapezio.style.animation = '500ms increaseOut'

    forma.appendChild(imgTrapezio)

    check.style.marginTop = '280px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTrapezio.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

}

function circulo() {

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.setAttribute('src', 'Imagens/circulo.png')

    imgCirculo.style.width = '200px'
    
    imgCirculo.style.display = 'block'

    imgCirculo.style.animation = '500ms increaseOut'

    forma.appendChild(imgCirculo)

    check.style.marginTop = '348px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    base.disabled = false
    altura.disabled = false

}

function calcular() {

    if (base.value.length == 0 || altura.value.length == 0) {

        alert('[ERRO] Preencha todos os dados')

    } else {

        imgQuadrado.style.transition = '250ms'
        imgRetangulo.style.transition = '250ms'
        imgTriangulo.style.transition = '250ms'
        
        imgLosango.style.transition = '250ms'
        imgTrapezio.style.transition = '250ms'
        imgCirculo.style.transition = '250ms'

        var b = Number(base.value) 
        var h = Number(altura.value) 
        
        b = b * 10
        h = h * 10

        if (b >= 200) {

            imgQuadrado.style.width = 380 + 'px'
            imgQuadrado.style.height = 380 + 'px'
            
            imgRetangulo.style.width = 520 + 'px'
            imgRetangulo.style.height = 520 + 'px'

            imgTriangulo.style.width = 400 + 'px'
            imgTriangulo.style.height = 380 + 'px'

        } else {

            let widthQuadrado = parseInt(imgQuadrado.style.width, 10)
           
            let widthRetangulo = parseInt(imgRetangulo.style.width, 10)
            let heightRetangulo = parseInt(imgRetangulo.style.height, 10)

            let widthTriangulo = parseInt(imgRetangulo.style.width, 10)
            let heightTriangulo = parseInt(imgRetangulo.style.height, 10)

            // ------------------------- // ------------------------- //

            let resQuadradoWidth = b + widthQuadrado

            let resRetanguloWidth = b + widthRetangulo
            let resRetanguloHeight = h + heightRetangulo

            let resTrianguloWidth = b + widthTriangulo
            let resTrianguloHeight = h + heightTriangulo

            // ------------------------- // ------------------------- //

            imgQuadrado.style.width = resQuadradoWidth + 'px'
            imgQuadrado.style.height = resQuadradoWidth + 'px'

            imgRetangulo.style.width = resRetanguloWidth + 'px'
            imgRetangulo.style.height = resRetanguloHeight + 'px'

            imgTriangulo.style.width = resTrianguloWidth + 'px'
            imgTriangulo.style.height = resTrianguloHeight + 'px'

        }

        imgQuadrado.style.animation = '2s resetRotateForma'
        imgRetangulo.style.animation = '2s resetRotateForma'
        imgTriangulo.style.animation = '2s resetRotateForma'

        base.value = ''
        altura.value = ''

    }

}