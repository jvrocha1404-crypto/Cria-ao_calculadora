const tela = document.getElementById("tela")//pega o elemento <imput> (ou textarea) com id "tela" e guarda na constante 'tela'

//Adciona um número ou operador para a tela
function adicionarValor(valor){ //declara a função adicionarValor
    tela.value += valor; //passei um valor que mostra meu número e resultados
}


//limpar/apagar
function limparTela(){ //declara a função limparTela
    tela.value = ""; //passei um valor vazio q apaga meu número e resultados
}

function apagarUltimo(){  //declara a função apagarUltimo
    tela.value = tela.value.slice(0,-1); //passei um valor que apagou o resultado e um número
}

function calcularResultado(){  //declara a função calcularResultado
    try{ // tenta executar o bloco a seguir - se der erro, vai para o catch
        tela.value = eval(tela.value) //eval executa código JavaScript-funciona para expressões matemáticas simples,mas requer cuidado com entrada do usuário
    } catch(erro) // captura qualquer erro vindo do try
    {
        tela.value = "Erro" //passei um valor que mostra erro quando erro
    }
}

//evento para capturar os "cliques" do teclado
document.addEventListener("keydown", function(evento){ //nova declaração de função
    const tecla = evento.key; //pega o valorda tecla pressionada (ex: "1", "+", "Enter", "Backspace")
    console.log(tecla)


    if("0123456789+-*/.".includes(tecla)){
        adicionarValor(tecla)
    }
    if (tecla === "Enter"|| tecla === "="){
        calcularResultado()// executa o calcolo
    }

//para apagar o último número
    if (tecla === "Backspace"){
        calcularUltimo
        apagarUltimo();
    }

})

//ESC para limpar tudo
