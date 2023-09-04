function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('anoNasc')
    var res = document.getElementById('res')
    var idadeMax = ano -100
    var corFundo = document.getElementById('corFundo')
    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < idadeMax){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsexo[0].checked){
            corFundo.style.background='blue'
            genero='Homem'
            if(idade >=0 && idade <5){
                //bebe
                genero='um Bebe'
                img.setAttribute('src', 'imagens/bebeMenino.png')
            }else if (idade <12){
                //criança
                genero='uma Criança'
                img.setAttribute('src', 'imagens/criancaMenino.png')
            }else if (idade < 20){
                //adolecente
                genero='um Adolescente'
                img.setAttribute('src', 'imagens/adolescenteHomen.png')
            }else if(idade<30){
                //jovem
                genero='um Jovem'
                img.setAttribute('src', 'imagens/jovemHomen.png')
            }else if (idade < 65){
                //adulto
                img.setAttribute('src', 'imagens/adultoHomem.png')
            }else{
                //idoso
                genero='um Idoso'
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fsexo[1].checked){
            genero='Mulher'
            corFundo.style.background='pink'
            if(idade>=0 && idade <5){
                //bebe
                genero='um Bebe'
                img.setAttribute('src', 'imagens/bebeMenina.png')
            }else if(idade <12){
                //criança
                genero='uma Menina'
                img.setAttribute('src', 'imagens/criancaMenina.png')
            }else if(idade <20){
                //adolecente
                genero='um Adolescente'
                img.setAttribute('src', 'imagens/adolescenteMulher.png')
            }else if(idade<30){
                //jovem
                genero='uma Jovem'
                img.setAttribute('src', 'imagens/jovemMulher.png')
            }else if(idade <65){
                //adulto
                img.setAttribute('src', 'imagens/adultoMulher.png')
            }else{
                //idoso
                genero='uma Idosa'
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}