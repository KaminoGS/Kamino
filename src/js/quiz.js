let pontos = 0;
let botao = document.querySelector('#Btnenviar')

botao.addEventListener('click', function(event){
    event.preventDefault();
    if(document.querySelector('input[name="pergunta1"]:checked').value == '1'){
        pontos++
    }
    if(document.querySelector('input[name="pergunta2"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta3"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta4"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta5"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta6"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta7"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta8"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta9"]:checked').value == '1'){
        pontos++
    }

    if(document.querySelector('input[name="pergunta10"]:checked').value == '1'){
        pontos++
    }  
    
    if(pontos >= 5){
        alert(`Parabéns, você acertou ${pontos} pontos!\nNão esqueça de se manter informado(a).`)
    }else{
        alert(`Caramba, você acertou apenas ${pontos} pontos.\nTente procurar se informar sobre o tema e tenha segurança em casos assim.`)
    }
})

