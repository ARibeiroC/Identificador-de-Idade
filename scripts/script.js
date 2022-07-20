function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Dados incorretos ou faltam dados, favor tentar novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var genero = ''
        var foto = document.querySelector('#img')
        if (mas.checked){
            genero = "Homem"
            if (idade < 5){
                //bebe
                foto.src = './imagem/pessoas/menino-bebe250x250.png'
            }else if(idade < 10){
                //criança
                foto.src = './imagem/pessoas/menino-crianca250x250.png'
            }else if(idade < 18){
                //adolecente
                foto.src = './imagem/pessoas/adolescente-menino250x250.png'
            }else if (idade < 30){
                //rapaz
                foto.src = './imagem/pessoas/rapaz250x250.png'
            }else if (idade < 50){
                //homem
                foto.src = './imagem/pessoas/homem250x250.png'
            }else if (idade < 70){
                //Senhor
                foto.src = './imagem/pessoas/senhor250x250.png'
            }else {
                foto.src = './imagem/pessoas/idoso250x250.png'
            }
        }else if (fem.checked) {
            genero = 'Mulher'
            if (idade < 5){
                //bebe
                foto.src = 'imagem/pessoas/menina-bebe250x250.png'
            }else if(idade < 10){
                //criança
                foto.src = 'imagem/pessoas/menina-crianca250x250.png'
            }else if(idade < 18){
                //adolecente
                foto.src = 'imagem/pessoas/adolescente-menina250x250.png'
            }else if (idade < 30){
                //moça
                foto.src = 'imagem/pessoas/moca250x250.png'
            }else if (idade < 50){
                //Mulher
                foto.src = 'imagem/pessoas/mulher250x250.png'
            }else if (idade < 70){
                //Senhora
                foto.src = 'imagem/pessoas/senhora250x250.png'
            }else {
                foto.src = 'imagem/pessoas/idosa250x250.png'
            }
        }
        msg.innerHTML = `Você é ${genero} com ${idade} anos de idade`
        imgFoto.style.visibility = 'visible'
        img.appendChild(foto)
    }
}

function mouseEnter(){
    var mEnter = document.querySelector('#btn')
    mEnter.style.background = '#bee4e4'
}

function mouseOut(){
    var mEnter = document.querySelector('#btn')
    mEnter.style.background = 'cornflowerblue'
}