const forma = document.querySelector('#forma')

let check = document.querySelector('#check')

let imgQuadrado = document.createElement('img')
let imgRetangulo = document.createElement('img')
let imgTriangulo = document.createElement('img')

let imgLosango = document.createElement('img')
let imgTrapezio = document.createElement('img')
let imgCirculo = document.createElement('img')

let medida00 = document.querySelector('#medida00')
let medida01 = document.querySelector('#medida01')

let area = document.querySelector('#area')

let medidas = document.querySelector('#medidas')
medidas.style.display = 'none'

var baseMenor = document.querySelector('#baseMenorForma')
var base = document.querySelector('#baseForma')
var altura = document.querySelector('#alturaForma') 

var bM = Number(baseMenor.value) 
var b = Number(base.value) 
var h = Number(altura.value)

let labelBaseMenor = document.querySelector('#labelBaseMenor')
let labelBase = document.querySelector('#labelBase')
let labelAltura = document.querySelector('#labelAltura')

let button = document.querySelector('#button')

var maxWidth = window.matchMedia('(max-width: 500px)')

function quadrado() {

    medidas.style.display = 'block'
        
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

    area.style.display = 'none'

    base.disabled = false
    altura.disabled = true

    button.disabled = false

    labelBaseMenor.style.display = 'none'
    
    baseMenor.style.display = 'none'

    baseMenor.value = ''

    labelBase.innerHTML = '<strong>Base e Altura: </strong>'

    base.value = ''

    labelAltura.style.display = 'none'
    
    altura.style.display = 'none'

    altura.value = ''

    if (maxWidth.matches == true) {

        imgQuadrado.style.width = '120px'
        imgQuadrado.style.height = '120px'

        medidas.style.left = '41%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '9.75%'

    }

}

function retangulo() {

    medidas.style.display = 'block'

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

    button.disabled = false

    area.style.display = 'none'

    labelBaseMenor.style.display = 'none'
    
    baseMenor.style.display = 'none'

    baseMenor.value = ''

    labelBase.innerHTML = '<strong>Base: </strong>'

    base.value = ''

    labelAltura.style.display = 'block'
    
    labelAltura.innerHTML = '<strong>Altura: </strong>'

    altura.style.display = 'block'

    altura.value = ''

    altura.style.marginTop = '-19px'
    altura.style.marginLeft = '76px'

    if (maxWidth.matches == true) {

        imgRetangulo.style.width = '170px'
        imgRetangulo.style.height = '100px'

        medidas.style.left = '32%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '7.5%'

    } 

}

function triangulo() {

    medidas.style.display = 'block'

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

    area.style.display = 'none'

    base.disabled = false
    altura.disabled = false

    button.disabled = false

    labelBaseMenor.style.display = 'none'

    baseMenor.style.display = 'none'

    baseMenor.value = ''

    labelBase.innerHTML = '<strong>Base: </strong>'

    base.value = ''

    labelAltura.style.display = 'block'
    labelAltura.innerHTML = '<strong>Altura: </strong>'
    
    altura.style.display = 'block'

    altura.value = ''

    altura.style.marginTop = '-19px'
    altura.style.marginLeft = '76px'

    if (maxWidth.matches == true) {

        imgTriangulo.style.width = '130px'
        imgTriangulo.style.height = '110px'

        medidas.style.left = '32%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '7.5%'

    }

}

function losango() {

    medidas.style.display = 'block'

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.style.display = 'none'

    imgLosango.setAttribute('src', 'Imagens/losango.png')

    imgLosango.style.width = '200px'
    imgLosango.style.height = '280px'

    imgLosango.style.display = 'block'

    imgLosango.style.animation = '500ms increaseOut'

    forma.appendChild(imgLosango)

    check.style.marginTop = '205px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgLosango.style.animation = '360s rotateForma infinite'

    }, 500)

    area.style.display = 'none'

    base.disabled = false
    altura.disabled = false

    button.disabled = false

    labelBaseMenor.style.display = 'none'

    baseMenor.style.display = 'none'

    baseMenor.value = ''

    labelBase.innerHTML = '<strong>Diagonal Menor: </strong>'

    base.value = ''

    labelAltura.style.display = 'block'
    
    labelAltura.innerHTML = '<strong>Diagonal Maior: </strong>'

    altura.style.display = 'block'

    altura.value = ''

    altura.style.marginTop = '-19px'
    altura.style.marginLeft = '163px'

    if (maxWidth.matches == true) {

        imgLosango.style.width = '110px'
        imgLosango.style.height = '190px'

        medidas.style.left = '44%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '10.35%'

    }

}

function trapezio() {

    medidas.style.display = 'block'

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

    area.style.display = 'none'

    baseMenor.disabled = false
    base.disabled = false
    altura.disabled = false

    button.disabled = false

    labelBaseMenor.style.display = 'block'

    baseMenor.style.display = 'block'

    baseMenor.value = ''

    baseMenor.style.marginTop = '-19px'
    baseMenor.style.marginLeft = '115px'

    labelBase.innerHTML = '<strong>Base Maior: </strong>'

    base.value = ''

    labelAltura.innerHTML = '<strong>Altura: </strong>'

    labelAltura.style.display = 'block'

    altura.style.display = 'block'

    altura.value = ''
    
    altura.style.marginTop = '-19px'
    altura.style.marginLeft = '76px'
    
    if (maxWidth.matches == true) {

        imgTrapezio.style.width = '170px'
        imgTrapezio.style.height = '95px'

        medidas.style.left = '37.4%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '8.8%'

    }

}

function circulo() {

    medidas.style.display = 'block'

    imgQuadrado.style.display = 'none'

    imgRetangulo.style.display = 'none'

    imgTriangulo.style.display = 'none'

    imgLosango.style.display = 'none'

    imgTrapezio.style.display = 'none'

    imgCirculo.setAttribute('src', 'Imagens/circulo.png')

    imgCirculo.style.width = '200px'
    imgCirculo.style.height = '200px'
    
    imgCirculo.style.display = 'block'

    imgCirculo.style.animation = '500ms increaseOut'

    forma.appendChild(imgCirculo)

    check.style.marginTop = '348px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    area.style.display = 'none'

    button.disabled = false
    base.disabled = false
    
    labelBaseMenor.style.display = 'none'

    baseMenor.style.display = 'none'

    baseMenor.value = ''

    base.value = ''
    
    labelBase.innerHTML = '<strong>Raio: </strong>'

    labelAltura.style.display = 'none'

    altura.style.display = 'none'

    altura.value = ''

    if (maxWidth.matches == true) {

        imgCirculo.style.width = '120px'
        imgCirculo.style.height = '120px'

        medidas.style.left = '29.5%'

    } else if (maxWidth.matches != true) {

        medidas.style.left = '6.93%'

    }

}

function calcular() {
    
    medidas.style.display = 'block'

    // ---------- // ---------- //

    var bM = Number(baseMenor.value) 
    var b = Number(base.value) 
    var h = Number(altura.value) 

    bM = bM * 3.780        
    b = b * 3.780
    h = h * 3.780

    // -------------------- // -------------------- //

    let widthQuadrado = imgQuadrado.offsetWidth
    
        let medida00HeightValue = medida00.offsetHeight
        let medida00LeftValue = medida00.offsetLeft

        let medida01WidthValue = medida01.offsetWidth
        let medida01TopValue = medida01.offsetTop

    let widthRetangulo = imgRetangulo.offsetWidth
    let heightRetangulo = imgRetangulo.offsetHeight
    
    let widthTriangulo = imgTriangulo.offsetWidth
    let heightTriangulo = imgTriangulo.offsetWidth
    
    let widthLosango = imgLosango.offsetWidth
    let heightLosango = imgLosango.offsetHeight
    
    let widthTrapezio = imgTrapezio.offsetWidth
    let heightTrapezio = imgTrapezio.offsetWidth
    
    let widthCirculo = imgCirculo.offsetWidth
 
    // -------------------- // -------------------- //

    let resQuadradoWidth = b + widthQuadrado

    let resRetanguloWidth = b + widthRetangulo
    let resRetanguloHeight = h + heightRetangulo

    let resTrianguloWidth = b + widthTriangulo
    let resTrianguloHeight = h + heightTriangulo

    let resLosangoWidth = b + widthLosango
    let resLosangoHeight = h + heightLosango

    let resTrapezioWidth = b + widthTrapezio
    let resTrapezioHeight = h + heightTrapezio

    let resCirculoWidth = b + widthCirculo

    // --------------- // --------------- // --------------- // --------------- //

    if (base.value.length == 0 || altura.value.length == 0 && altura.disabled != true) {

        alert('[ERRO] Preencha todos os dados')

        location.reload()

        area.replace('Área: 0m²', '')

    } else {

        imgQuadrado.style.transition = '250ms'
        imgRetangulo.style.transition = '250ms'
        imgTriangulo.style.transition = '250ms'
        
        imgLosango.style.transition = '250ms'
        imgTrapezio.style.transition = '250ms'
        imgCirculo.style.transition = '250ms'

        imgQuadrado.style.animation = '2s resetRotateForma'
        imgRetangulo.style.animation = '2s resetRotateForma'
        imgTriangulo.style.animation = '2s resetRotateForma'

        imgLosango.style.animation = '2s resetRotateForma'
        imgTrapezio.style.animation = '2s resetRotateForma'
        imgCirculo.style.animation = '2s resetRotateForma'

        baseMenor.disabled = true
        base.disabled = true
        altura.disabled = true

        button.disabled = true

        if (maxWidth.matches != true && (b >= 150 || h >= 150)) {

            imgQuadrado.style.width = 350 + 'px'
            imgQuadrado.style.height = 350 + 'px'
            
            imgRetangulo.style.width = 400 + 'px'
            imgRetangulo.style.height = 300 + 'px'

            imgTriangulo.style.width = 300 + 'px'
            imgTriangulo.style.height = 280 + 'px'

            imgLosango.style.width = 300 + 'px'
            imgLosango.style.height = 480 + 'px'

            imgTrapezio.style.width = 400 + 'px'
            imgTrapezio.style.height = 250 + 'px'

            imgCirculo.style.width = 350 + 'px'
            imgCirculo.style.height = 350 + 'px'
        
        } else if (maxWidth.matches == true && (b >= 75 || h >= 75)) {

            imgQuadrado.style.width = 190 + 'px'
            imgQuadrado.style.height = 190 + 'px'
                    
            imgRetangulo.style.width = 230 + 'px'
            imgRetangulo.style.height = 160 + 'px'
        
            imgTriangulo.style.width = 190 + 'px'
            imgTriangulo.style.height = 170 + 'px'
        
            imgLosango.style.width = 170 + 'px'
            imgLosango.style.height = 250 + 'px'
        
            imgTrapezio.style.width = 230 + 'px'
            imgTrapezio.style.height = 140 + 'px'
        
            imgCirculo.style.width = 190 + 'px'
            imgCirculo.style.height = 190 + 'px'

        } else {

            imgQuadrado.style.width = resQuadradoWidth + 'px'
            imgQuadrado.style.height = resQuadradoWidth + 'px'

            imgRetangulo.style.width = resRetanguloWidth + 'px'
            imgRetangulo.style.height = resRetanguloHeight + 'px'

            imgTriangulo.style.width = resTrianguloWidth + 'px'
            imgTriangulo.style.height = resTrianguloHeight + 'px'

            imgLosango.style.width = resLosangoWidth + 'px'
            imgLosango.style.height = resLosangoHeight + 'px'

            imgTrapezio.style.width = resTrapezioWidth + 'px'
            imgTrapezio.style.height = resTrapezioHeight + 'px'

            imgCirculo.style.width = resCirculoWidth + 'px'
            imgCirculo.style.height = resCirculoWidth + 'px'

        }

    }

    // --------------- // --------------- // --------------- // --------------- //

    setTimeout(function () {

        if (imgQuadrado.style.display == 'block') {

            area.innerHTML = `<strong>Área: ${Number(base.value) * Number(base.value)}m²</strong>`

            medida00.style.height = resQuadradoWidth

            if (maxWidth.matches != true && (b >= 150 || h >= 150)) {

                setTimeout(function medida00Quadrado() {

                    medida00.style.height = medida00HeightValue + 160 + 'px'
                    medida00.style.left = medida00LeftValue + (-100) + 'px'

                }, 250)

                setTimeout(function medida01Quadrado() {
                    
                    medida01.style.width = medida01WidthValue + 160 + 'px'
                    medida01.style.top = medida01TopValue + 100 + 'px'

                }, 500)

                medida00.style.transition = '250ms'
                medida00.style.opacity = '1'

                medida01.style.transition = '250ms'
                medida01.style.opacity = '1'

            } 

        } else if (imgRetangulo.style.display == 'block') {

            area.innerHTML = `<strong>Área: ${Number(base.value) * Number(altura.value)}m²</strong>`

        } else if (imgTriangulo.style.display == 'block') {

            area.innerHTML = `<strong>Área: ${Number(base.value) * Number(altura.value)}m²</strong>`

        } else if (imgLosango.style.display == 'block') {

            area.innerHTML = `<strong>Área: ${(Number(base.value) * Number(altura.value))/2}m²</strong>`

        } else if (imgTrapezio.style.display == 'block') {

            area.innerHTML = `<strong>Área: ${((Number(baseMenor.value) + Number(base.value)) * Number(altura.value))/2}m²</strong>`

        } else {

            area.innerHTML = `<strong>Área: ${(Number(base.value) ** 2) * 3.17}m²</strong>`

        }

        area.style.display = 'block';

    }, 1500)

}