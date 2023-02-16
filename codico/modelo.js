let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");

let valores = []; // array paara guardar os valores do input(num)

function isNumero(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    // funcao com o intuito de apenas numeros de 1 a 100 serao possiveis no input
    return true;
  } else {
    return false;
  }
}

function inLista(numero, list) {
  if (list.indexOf(Number(numero)) != -1) {
    // funcao com o objetiv de: se ja estiver um valor digitado dentro de (valores), retorna falso, senao verdadeiro
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    //condicao: se for um numero e nao estar na lista.
    valores.push(Number(num.value)); // esta guardando todos os valores que foi inserido em (valores)
    let item = document.createElement("option"); // criando as options por js
    item.textContent = `Valor ${num.value} adicionado`;
    lista.appendChild(item); // inserindo as option e valores dentro da lista
    res.innerHTML = "";
  } else {
    window.alert("Valor invalido ou ja encontrado na lista.");
  }
  num.value = ""; // esta limpando a caixa de testo depois que for adicionado um valor
  num.focus(); // esta fazendo com que fiqye piscando para escrever dentro da caixa de texto
}
function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];

      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total;
    res.innerHTML = "";
    res.innerHTML += `<p> ao todo temos ${total} numeros cadastrados</p>`;
    res.innerHTML += `<p> o maior numero e ${maior}</p>`;
    res.innerHTML += `<p> o menor numero e ${menor}</p>`;
    res.innerHTML += `<p> somando todos os valores temos ${soma}</p>`;
    res.innerHTML += `<p> a media dos valores digitados e ${media}</p>`;
  }
}
