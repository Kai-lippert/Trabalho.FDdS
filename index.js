let botao = document.querySelector("#botao");
botao.style.backgroundColor = "#a8cca4";
let primeiroClique=false;

botao.addEventListener("mouseover", e => {
    if (!primeiroClique) 
    botao.innerHTML = "Clique para ver uma mensagem!";
    botao.style.color = "rgb(107, 2, 228)";
});

botao.addEventListener("mouseout", e => {
    botao.style.color = "black";
});

botao.addEventListener("click", e => {
    botao.innerHTML = "Obrigada por acessar minha primeira página!";
    botao.style.color = "black";
    primeiroClique = true;
});