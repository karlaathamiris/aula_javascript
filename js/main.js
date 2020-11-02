function clicou(){
document.getElementById("agradecimento").innerHTML = "Obrigada por clicar, estamos testando o site";
//console.log(document.getElementById("agradecimento"));
    //    alert("Obrigada por clicar")
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=b2uWplCQOUI");
    //window.location.href = "https://www.youtube.com/watch?v=b2uWplCQOUI"; Outra forma de redirecionar, porém abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML =  "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    // alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada ♥");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*Variáveis locais e globais
function soma (n1, n2){
    return n1 + n2;}


function validarIdade(idade){
    var validar
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt ("Digite sua idade: ")
console.log(validarIdade(idade)); 

alert (soma(5, 10));
*/

/*Data
var d = new Date();
alert (d);
//alert (d.getDay()); aparece somente o dia do mês
//alert (d.getHours());
//alert (d.getMinutes());
*/

/* Laços de repetição
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/

/* Condicionais
var idade = prompt ("Qual sua idade?") //prompt é um comando que faz pergunta ao usuário
if (idade >= 18){
    alert("Acesso concedido a maior de idade");
}else{
    alert("Acesso negado a menores de idade");
}
*/


/* Dicionário
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"goiaba", cor:"roséo"}];
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome:"maçã", cor:"vermelho"};
console.log(fruta.nome);
*/


//var lista = ["maçã", "goiaba", "pêra"];
//console.log(lista);



//lista.push("uva"); // Adicionar elemento a lista, entrará no final
//lista.pop(); Para retirar um elemento da lista


//console.log(lista.reverse); Imprimir os elementos da lista do último ao primeiro
//console.log(lista.toString()) // Transforma em string
//console.log(lista.join(" - ")) // Transforma em string e ainda separa da forma como colocada entre as aspas


//alert(lista[2]);


//var nome = "Karla";
//var idade = "25";
//alert(nome + " atualmente tem " + idade + " anos");