function load() {

    var forma = document.querySelector('#forma')
    const imgQuadrado = document.createElement('img')

    imgQuadrado.setAttribute('src', 'Imagens/quadrado.png')

    forma.appendChild(imgQuadrado)
    forma.style.animation = '500ms increaseOut'

    imgQuadrado.style.width = '300px'
    imgQuadrado.style.marginTop = '-250px'
    imgQuadrado.style.marginLeft = '600px'

}