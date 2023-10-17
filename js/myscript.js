function trocarFrase(){
    var fraseAtual = document.getElementById("frase")
    fraseAtual.innerHTML= "Funcionou, a frase muudou!";
    fraseAtual.style.color= "red";
    fraseAtual.style.fontSize = "25px";
    fraseAtual.style.backgroundColor= "yellow";
      //altera o fundo da página
      document.body.style.backgroundColor = "blue";
    fraseAtual.innerHTML = "<img src=\'img/a.jpeg\' />"
}