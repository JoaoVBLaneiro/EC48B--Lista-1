//Ex. 1
function fatorial(num){
    let resultado = 1;
    for (let index = num; index > 1; index--) {
        resultado = resultado * index;
    }
    return resultado;
}

console.log(fatorial(5));


//Ex. 2
function geraMensagem(mensagem, n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado = resultado + mensagem + " "; //coloquei um espaço no final pq acho que o usuário n faria isso e fica feio se n tiver
    }
    return resultado; 
}

console.log(geraMensagem("Salve Salve Família", 4));


//Ex. 3
function operacao(num1, num2, op){
    let resultado = 1;
    switch(op){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                return null;
            }
            resultado = num1 / num2;
            break;
        default:
            return null;
    }
    return resultado;
}

console.log(operacao(10,5,'+'));
console.log(operacao(10,5,'-'));
console.log(operacao(10,5,'*'));
console.log(operacao(10,5,'/'));
console.log(operacao(10,0,'/'));
console.log(operacao(10,5,'eu quando'));


//Ex. 4
function tabuada(num){
    let vetor_tab = [];
    for (let i = 0; i < 11; i++) {
        vetor_tab[i] = num * i;
    }
    return vetor_tab;
}

console.log(tabuada(7));


//Ex. 5
function inverteNum(num){
    let invertido = parseInt(num.toString().split('').reverse().join(''));
    return invertido;
}

console.log(inverteNum(389));


//Ex. 6
function contaVogais(palavra){
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'í', 'Í', 'ã', 'Ã', 'â', 'Â', 'á', 'Á', 'à', 'À', 'é', 'É', 'ê', 'Ê', 'ó', 'Ó', 'ô', 'Ô'];
    let contador = 0;

    for(let char of palavra){
        if(vogais.includes(char)){
            contador++;
        }
    }
    return contador;
}

console.log(contaVogais("Paralelepípedo"));


//Ex. 7
function checaParenteses(chaves){
    const pilha = [];
    const pares = {
        ')': '(',
        ']': '['
    };

    for (let i = 0; i < chaves.length; i++) {
        const char = chaves[i];

        if (char === '(' || char === '[') {
            pilha.push(char);
        }else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pilha.pop() !== pares[char]) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

console.log(checaParenteses('[()]'));
console.log(checaParenteses('[(][['));


//Ex. 8
function geraDinamico(quantidade){
    const nomes = [
        'Alessandro', 'Alison', 'Allisson', 'Amanda', 'Andre', 'Arthur', 'Beatriz', 'Bernardo', 'Breno', 'Bruna', 
        'Daniel', 'Diego', 'Evelise', 'Felipe', 'Fernanda', 'Fernando', 'Gabrielle', 'Guilherme', 'Gustavo', 
        'Jeffrey', 'Joao', 'Jonas', 'Jose', 'Leonardo', 'Levi', 'Lucas', 'Lucca', 'Luiz', 'Maria', 'Marina', 
        'Mateus', 'Matheus', 'Nicolas', 'Patrik', 'Pedro', 'Ricardo', 'Roberto', 'Rodolfo', 'Romulo', 'Samilly', 
        'Sidney', 'Victor', 'Vinicius', 'Willker'
    ];
    const listaObjetos = [];

    for (let i = 1; i <= quantidade; i++) {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18; // Gera idades entre 18 e 90
        const objeto = {
            id: i,
            nome: nome,
            idade: idade
        };
        listaObjetos.push(objeto);
    }
    
    return listaObjetos;
}

listaDinamica = geraDinamico(4);

console.log(listaDinamica);


//Ex. 9
function mediaIdades(lista){
    const somaIdades = lista.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    const media = somaIdades / lista.length;
    return media;
}

console.log(mediaIdades(listaDinamica));


//Ex. 10
function ordenaLista(lista, atributo){
    return lista.sort((a, b) => {
        if (a[atributo] < b[atributo]) return -1;
        if (a[atributo] > b[atributo]) return 1;
        return 0;
    });
}

console.log(ordenaLista(listaDinamica, 'id'));
console.log(ordenaLista(listaDinamica, 'nome'));
console.log(ordenaLista(listaDinamica, 'idade'));