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

let resultado = document.querySelector('#resultado')

let formula = document.querySelector('#formula')
let calculo00 = document.querySelector('#calculo00')
let calculo01 = document.querySelector('#calculo01')
let calculo02 = document.querySelector('#calculo02')
let calculo03 = document.querySelector('#calculo03')
let calculo04 = document.querySelector('#calculo04')
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
var maxHeight = window.matchMedia('(max-height: 720px)')

var n = 0

function quadrado() {

    n = 1

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

    check.style.marginTop = '25px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgQuadrado.style.animation = '360s rotateForma infinite'

    }, 500)

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    } else {

        medidas.style.left = '9.75%'

    }

}

function retangulo() {

    n = 2

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

    check.style.marginTop = '80.5px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgRetangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    base.disabled = false
    altura.disabled = false

    button.disabled = false

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    n = 3

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
    
    check.style.marginTop = '137px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTriangulo.style.animation = '360s rotateForma infinite'

    }, 500)

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    n = 4

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

    check.style.marginTop = '196px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgLosango.style.animation = '360s rotateForma infinite'

    }, 500)

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    n = 5

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

    check.style.marginTop = '264px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    setTimeout(function () {

        imgTrapezio.style.animation = '360s rotateForma infinite'

    }, 500)

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    n = 6

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

    check.style.marginTop = '319px'
    check.style.opacity = '1'
    check.style.transition = '250ms'

    formula.style.display = 'none'
    calculo00.style.display = 'none'
    calculo01.style.display = 'none'
    calculo02.style.display = 'none'
    calculo03.style.display = 'none'
    calculo04.style.display = 'none'
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

    if (imgTrapezio.style.display == 'block' && baseMenor.value.length == 0) {

        alert('[ERRO] Preencha todos os dados')

        location.reload()

    } else {
        
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

        let widthRetangulo = imgRetangulo.offsetWidth
        let heightRetangulo = imgRetangulo.offsetHeight
        
        let widthTriangulo = imgTriangulo.offsetWidth
        let heightTriangulo = imgTriangulo.offsetWidth
        
        let widthLosango = imgLosango.offsetWidth
        let heightLosango = imgLosango.offsetHeight
        
        let widthTrapezio = imgTrapezio.offsetWidth
        let widthMenorTrapezio = imgTrapezio.offsetWidth
        let heightTrapezio = imgTrapezio.offsetHeight
        
        let widthCirculo = imgCirculo.offsetWidth
    
        // -------------------- // -------------------- //

        let resQuadradoWidth = b + widthQuadrado

        let resRetanguloWidth = b + widthRetangulo
        let resRetanguloHeight = h + heightRetangulo

        let resTrianguloWidth = b + widthTriangulo
        let resTrianguloHeight = h + heightTriangulo

        let resLosangoWidth = b + widthLosango
        let resLosangoHeight = h + heightLosango

        let resTrapezioWidth = b + widthTrapezio + (widthMenorTrapezio/2)
        let resTrapezioHeight = h + heightTrapezio

        let resCirculoWidth = b + widthCirculo

        // --------------- // --------------- // --------------- // --------------- //

        if (base.value.length == 0 || altura.value.length == 0 && altura.disabled != true) {

            alert('[ERRO] Preencha todos os dados')

            location.reload()

            area.replace('Área: 0m²', '')

        } else if (bM >= 500 || base.value >= 500 || altura.value >= 500) {

            alert('[ERRO] Limite atingido')

            location.reload()

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

            if (maxWidth.matches != true && (bM >= 100 || b >= 100 || h >= 100)) {

                imgQuadrado.style.width = 350 + 'px'
                imgQuadrado.style.height = 350 + 'px'
                
                imgRetangulo.style.width = 400 + 'px'
                imgRetangulo.style.height = 300 + 'px'

                imgTriangulo.style.width = 300 + 'px'
                imgTriangulo.style.height = 280 + 'px'

                imgLosango.style.width = 300 + 'px'
                imgLosango.style.height = 480 + 'px'

                imgTrapezio.style.width = 450 + 'px'
                imgTrapezio.style.height = 350 + 'px'

                imgCirculo.style.width = 350 + 'px'
                imgCirculo.style.height = 350 + 'px'
            
            } else if (maxWidth.matches == true || (bM.value >= 75 || b.value >= 75 || h.value >= 75)) {

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

        if (maxWidth.matches != true) {

            setTimeout(function calcularArea() {

                formula.style.display = 'block'

                if (n == 1) { // Quadrado

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '82%'
                    formula.innerHTML = `<strong>Fórmula: A = L²</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.display = 'none'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaQuadrado00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '82%'
                        calculo00.innerHTML = `<strong>A = ${base.value}²</strong>`
                        
                    }, 1500)

                    setTimeout(function areaQuadrado01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '82%'
                        calculo01.innerHTML = `<strong>A = ${Number(base.value)**2}</strong>`
                        
                    }, 2500)

                    setTimeout(function areaQuadrado02() {

                        calculo01.style.borderRightWidth = '0px'
                        
                        area.style.display = 'block'
                        area.style.top = '19%'  
                        area.style.left = '82%'
                        area.innerHTML = `<strong>Área: ${Number(base.value) * Number(base.value)}m²</strong>`

                    }, 3500)

                } else if (n == 2) { // Retângulo

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '81%'
                    formula.innerHTML = `<strong>Fórmula: A = B x h</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.display = 'none'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaRetangulo00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '81%'
                        calculo00.innerHTML = `<strong>A = ${base.value} x ${altura.value}</strong>`
                        
                    }, 1500)

                    setTimeout(function areaRetangulo01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '81%'
                        calculo01.innerHTML = `<strong>A = ${Number(base.value) * Number(altura.value)}</strong>`
                        
                    }, 2500)

                    setTimeout(function areaRetangulo02() {

                        calculo01.style.borderRightWidth = '0px'
                        
                        area.style.display = 'block'
                        area.style.top = '19%'  
                        area.style.left = '81%'
                        area.innerHTML = `<strong>Área: ${Number(base.value) * Number(altura.value)}m²</strong>`

                    }, 3500)

                } else if (n == 3) { // Triângulo

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '78%'
                    formula.innerHTML = `<strong>Fórmula: A = (B x h)/2</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.borderRightWidth = '2px'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaTriangulo00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '78%'
                        calculo00.innerHTML = `<strong>A = (${base.value} x ${altura.value})/2</strong>`
                        
                    }, 2000)

                    setTimeout(function areaTriangulo01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '78%'
                        calculo01.innerHTML = `<strong>A = ${(Number(base.value) * Number(altura.value))}/2</strong>`
                        
                    }, 3000)

                    setTimeout(function areaTriangulo02() {

                        calculo01.style.borderRightWidth = '0px'
                        
                        calculo02.style.display = 'block'
                        calculo02.style.top = '19%'  
                        calculo02.style.left = '78%'
                        calculo02.innerHTML = `<strong>A = ${(Number(base.value) * Number(altura.value))/2}</strong>`

                    }, 4000)
                    
                    setTimeout(function areaTriangulo03() {

                        calculo02.style.borderRightWidth = '0px'
                        
                        area.style.display = 'block'
                        area.style.top = '23%'  
                        area.style.left = '78%'
                        area.innerHTML = `<strong>Área: ${(Number(base.value) * Number(altura.value))/2}m²</strong>`

                    }, 5000)

                } else if (n == 4) { // Losango

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '78%'
                    formula.innerHTML = `<strong>Fórmula: A = (D x d)/2</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.borderRightWidth = '2px'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaLosango00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '78%'
                        calculo00.innerHTML = `<strong>A = (${altura.value} x ${base.value})/2</strong>`
                        
                    }, 2000)

                    setTimeout(function areaLosango01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '78%'
                        calculo01.innerHTML = `<strong>A = ${(Number(altura.value) * Number(base.value))}/2</strong>`
                        
                    }, 3000)

                    setTimeout(function areaLosango02() {

                        calculo01.style.borderRightWidth = '0px'
                        
                        calculo02.style.display = 'block'
                        calculo02.style.top = '19%'  
                        calculo02.style.left = '78%'
                        calculo02.innerHTML = `<strong>A: ${(Number(altura.value) * Number(base.value))/2}</strong>`

                    }, 4000)
                    
                    setTimeout(function areaLosango03() {

                        calculo02.style.borderRightWidth = '0px'
                        
                        area.style.display = 'block'
                        area.style.top = '23%'  
                        area.style.left = '78%'
                        area.innerHTML = `<strong>Área: ${(Number(altura.value) * Number(base.value))/2}m²</strong>`

                    }, 5000)

                } else if (n == 5) { // Trapézio

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '74%'
                    formula.innerHTML = `<strong>Fórmula: A = ((B + b) x h)/2</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.borderRightWidth = '2px'

                    calculo03.style.borderRightWidth = '2px'

                    calculo04.style.borderRightWidth = '2px'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaTrapezio00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '74%'
                        calculo00.innerHTML = `<strong>A = ((${base.value} + ${baseMenor.value}) x ${altura.value})/2</strong>`
                        
                    }, 3000)

                    setTimeout(function areaTrapezio01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '74%'
                        calculo01.innerHTML = `<strong>A = (${(Number(base.value) + Number(baseMenor.value))} x ${Number(altura.value)})/2</strong>`
                        
                    }, 4000)

                    setTimeout(function areaTrapezio02() {

                        calculo01.style.borderRightWidth = '0px'
                        
                        calculo02.style.display = 'block'
                        calculo02.style.top = '19%'  
                        calculo02.style.left = '74%'
                        calculo02.innerHTML = `<strong>A = ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value))}/2</strong>`

                    }, 6000)

                    setTimeout(function areaTrapezio03() {

                        calculo02.style.borderRightWidth = '0px'
                        
                        calculo03.style.display = 'block'
                        calculo03.style.top = '23%'  
                        calculo03.style.left = '74%'
                        calculo03.innerHTML = `<strong>A = ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value))/2}</strong>`

                    }, 6500)
                    
                    setTimeout(function areaTrapezio04() {

                        calculo03.style.borderRightWidth = '0px'
                        
                        calculo04.style.display = 'block'
                        calculo04.style.top = '27%'  
                        calculo04.style.left = '74%'
                        calculo04.innerHTML = `<strong>Área: ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value)/2)}m²</strong>`

                    }, 7500)

                } else { // Circulo

                    formula.style.borderRightWidth = '2px'  
                    formula.style.top = '7%'
                    formula.style.left = '80%'
                    formula.innerHTML = `<strong>Fórmula: A = 𝜋 × r²</strong>`

                    calculo00.style.borderRightWidth = '2px'  

                    calculo01.style.borderRightWidth = '2px'

                    calculo02.style.borderRightWidth = '2px'

                    area.style.borderRightWidth = '2px'

                    setTimeout(function areaCirculo00() {

                        formula.style.borderRightWidth = '0px'

                        calculo00.style.display = 'block'
                        calculo00.style.top = '11%'
                        calculo00.style.left = '80%'
                        calculo00.innerHTML = `<strong>A = 3.14 x ${base.value}²</strong>`
                        
                    }, 2000)

                    setTimeout(function areaCirculo01() {

                        calculo00.style.borderRightWidth = '0px'

                        calculo01.style.display = 'block'
                        calculo01.style.top = '15%'  
                        calculo01.style.left = '80%'
                        calculo01.innerHTML = `<strong>A = 3.14 x ${Number(base.value)**2}</strong>`
                        
                    }, 3000)

                    setTimeout(function areaCirculo02() {

                        calculo01.style.borderRightWidth = '0px'

                        calculo02.style.display = 'block'
                        calculo02.style.top = '19%'  
                        calculo02.style.left = '80%'
                        calculo02.innerHTML = `<strong>A = ${3.14 * (Number(base.value)**2)}</strong>`
                        
                    }, 4000)

                    setTimeout(function areaCirculo03() {

                        calculo02.style.borderRightWidth = '0px'
                        
                        area.style.display = 'block'
                        area.style.top = '23%'  
                        area.style.left = '80%'
                        area.innerHTML = `<strong>Área: ${3.14 * (Number(base.value)**2)}m²</strong>`

                    }, 5000)

                }  

            }, 1500)

        }
        
        if (maxWidth.matches == true) {

            setTimeout(function () {

                if (n == 1) {

                    alert(`\nFórmula: A = L²\n\nA = ${base.value}²\n\nA = ${Number(base.value)**2}\n\nÁrea: ${Number(base.value)**2}m²\n`)

                } else if (n == 2) {

                    alert(`\nFórmula: A = B x h\n\nA = ${base.value} x ${altura.value}\n\nA = ${Number(base.value) * Number(altura.value)}\n\nÁrea: ${Number(base.value) * Number(altura.value)}m²\n`)

                } else if (n == 3) {

                    alert(`\nFórmula: A = (B x h)/2\n\nA = (${base.value} x ${altura.value})/2\n\nA = ${Number(base.value) * Number(altura.value)}/2\n\nA = ${(Number(base.value) * Number(altura.value))/2}\n\nÁrea: ${(Number(base.value) * Number(altura.value))/2}m²\n`)

                } else if (n == 4) {

                    alert(`\nFórmula: A = (D x d)/2\n\nA = (${base.value} x ${altura.value})/2\n\nA = ${Number(base.value) * Number(altura.value)}/2\n\nA = ${(Number(base.value) * Number(altura.value))/2}\n\nÁrea = ${(Number(base.value) * Number(altura.value))/2}m²\n`)

                } else if (n == 5) {

                    alert(`\nFórmula: A = ((B + b) x h)/2\n\nA = ((${base.value} + ${baseMenor.value}) x ${altura.value})/2\n\nA = (${(Number(base.value) + Number(baseMenor.value))} x ${(Number(altura.value))})/2\n\nA = ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value))}/2\n\nA = ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value))/2}\n\nÁrea: ${(Number(base.value) + Number(baseMenor.value)) * (Number(altura.value))/2}m²\n`)

                } else {

                    alert(`\nFórmula: A = 𝜋 × r²\n\nA = 3.14 x ${base.value}²\n\nA = 3.14 x ${(Number(base.value)**2)}\n\nA = ${3.14 * (Number(base.value)**2)}\n\nÁrea: ${3.14 * (Number(base.value)**2)}m²\n`)

                }

            }, 1250)

        }

    }

}