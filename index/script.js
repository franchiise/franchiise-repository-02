function quadrado() {

    const forma = document.querySelector('#forma')
    const imgQuadrado = document.createElement('img')

    imgQuadrado.setAttribute('src', 'Imagens/quadrado.png')
    imgQuadrado.style.width = '250px'
    imgQuadrado.style.animation = '100s rotate-quadrado'

    forma.appendChild(imgQuadrado)

}