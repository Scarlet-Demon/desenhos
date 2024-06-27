# Obras de arte

## Introdução

Criamos uma linha de codigo, baseando-se em C.R.U.D (criação de cadastro).

Começamos a linha de comando com o processo `readline`, para aparecer a interface de bivlioteca e salvar as entradas e saidas.

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

A partir disso, criamos uma vaiavel chamada `arte`, para receber os objetos que seriam adicionados pelo usuario.

Construimos uma função chamada `exibirMenu`, para aparecer as opções que o usuario iria escolher. As opções eram:

### 1. `Adicionar Arte`
### 2. `Listar Todas as Arte`
### 3. `Editar Arte`
### 4. `Remover Arte`
### 5. `Sair`

A partir dai, criamos uma condicional para receber as respostas do usuario, essas repostas do menu seriam encaminhadas para as novas funções criadas.
```javascript
rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarArte();
                break;
            case '2':
                listarArtes();
                break;
            case '3':
                editarArte();
                break;
            case '4':
                removerArte();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    });
```

# Desenvolvimento

Como dito anteriormente, criamos funções, onde cada uma recebe as informações do usuario referente ao menu. 

Direcionando para a função que irá ser executada. As funções são:

### `Função AdicionarArte`
### `Função ListarArte`
### `Função EditarArte`
### `Função RemoverArte`

## Função Adicionar

Está função, irá salvar as informações que o usuário colocar.

As informações a serem salvas são:

### `Nome da Arte`
### `Nome do Artista`
### `Data de Criação`
### `Descrição da Arte`
### `Categoria da Arte`
### `Estilo da Arte`

Quando colocadas essas informações, o codigo irá salva-las dentro da variavel `arte`, como objetos em seguida apresentará a seguinte mensagem: `Arte cadastrada com sucesso`

```javascript
function cadastrarArte() {
    rl.question('Digite o nome da arte: ', (nome) => {
        rl.question('Digite o autor da arte: ', (artista) => {
            rl.question('Digite a data de criação: ', (criacao) => {
                rl.question('Digite a descrição da arte: ', (descricao) => {
                    rl.question('Digite a categoria da arte: ', (categoria) => {
                        rl.question('Digite o estilo da arte: ', (estilo) => {
                            arte.push({
                                nome: nome,
                                autor: artista,
                                criacao: criacao,
                                descricao: descricao,
                                categoria: categoria,
                                estilo: estilo
                            });
                            console.log('Arte cadastrada com sucesso!');
                            exibirMenu();
                        });
                    });
                });
            });
        });
    });
}
```

## Função Listar

Essa função, irá listar as informações que o usuário adicionou (os objetos) dentro da variavel `arte`.

Caso não seja adicionado nenhuma informação, aparecerá a seguinte mensagem: `nenhuma arte salva`, caso contrario, ele irá listar todas as informações colocadas.

```javascript
function ListarArtes() {
    if(arte ==''){
    console.log('nenhuma arte cadastrado')
    exibirMenu()
    }else{
    console.log(arte)
    exibirMenu()
    }
}
```

## Função Editar

Essa função, pega os elementos que estão dentro da variavel `arte` e as edita, ou seja, ele reescreve as informações dentro da variavel.

```javascript
function editarArte() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada para editar.');
        exibirMenu();
    } else {
        for (let i = 0; i < arte.length; i++) {
            console.log(`${i+1}:${arte[i].nome},${arte[i].autor},${arte[i].criacao},${arte[i].descricao},${arte[i].categoria},${arte[i].estilo}`)
        }
        rl.question('Digite o número da arte que deseja editar: ', (numero) => {
            const index = parseInt(numero) - 1;
            if (index >= 0 && index < arte.length) {
                rl.question('Digite o novo nome da arte: ', (nome) => {
                    rl.question('Digite o novo autor da arte: ', (artista) => {
                        rl.question('Digite a nova data de criação: ', (criacao) => {
                            rl.question('Digite a nova descrição da arte: ', (descricao) => {
                                rl.question('Digite a nova categoria da arte: ', (categoria) => {
                                    rl.question('Digite o novo estilo da arte: ', (estilo) => {
                                        arte[index] = {
                                            nome: nome,
                                            autor: artista,
                                            criacao: criacao,
                                            descricao: descricao,
                                            categoria: categoria,
                                            estilo: estilo
                                        };
                                        console.log('Arte editada com sucesso!');
                                        exibirMenu();
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                console.log('Número de arte inválido, tente novamente.');
                editarArte();
            }
        });
    }
}
```

## Função Remover 

Essa função, pega os elementos que estão dentro da variavel `arte` e as exclui, ou seja, ele remove as informações dentro da variavel.

```javascript
function removerArte() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada para remover.');
        exibirMenu();
    } else {
        for (let i = 0; i < arte.length; i++) {
            console.log(`${i+1}:${arte[i].nome},${arte[i].autor},${arte[i].criacao},${arte[i].descricao},${arte[i].categoria},${arte[i].estilo}`)
        }
        rl.question('Digite o número da arte que deseja remover: ', (numero) => {
            const index = parseInt(numero) - 1;
            if (index >= 0 && index < arte.length) {
                arte.splice(index, 1);
                console.log('Arte removida com sucesso!');
                exibirMenu();
            } else {
                console.log('Número de arte inválido, tente novamente.');
                removerArte();
            }
        });
    }
}
```
# Alterações e Soluções

Restruturamos o codigo, dentro da função listar para exibir os anos, as categorias e os estilos das obras de arte.

Começamos criando um novo menu para essa funções, que exibirá as seguintes opções:

### 1. `Listar Todas as Obras`
### 2. `Listar os Anos das Obras`
### 3. `Listar as Categorias das Artes`
### 4. `Listar os Estilos das Artes`
### 5. `Sair`

Encontramos divergencias na execução do codigo, onde as informações repitidas não eram exibidas. 

Quando exibidas, se existisse alguma informações repetida ou parecidas, ele mostrava uma e desdconsiderava a outra. 

```javascript
const anos = arte.map(obra => obra.criacao);
        const anosUnicos = [...new Set(anos)];
        console.log('Anos das obras:');
        anosUnicos.forEach(ano => console.log(ano));
```

Dito isso, quando resolvemos esse problema em todas as linhas de codigo adicionais, o sistema rodou com 100% de acertos.

# Desenvolvimento dos Codigos Adicionais

Como mensionado anteriormente, criamos novas funções, onde mostrará as listas de acordo com o que o usuário solicitar.

## Listar Todas as Obras

Como o próprio nome diz, ele lista todas as informações das obras acicionadas pelo usuário na função `Função AdicionarArte`

```javascript
function listarObras() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        arte.forEach((obra, index) => {
            console.log(`${index + 1}: ${obra.nome}, ${obra.autor}, ${obra.criacao}, ${obra.descricao}, ${obra.categoria}, ${obra.estilo}`);
        });
    }
    listarMenu();
```
## Listar os Anos das Obras

Essa função, analisa o código, pega as informações referente aos anos das obras e mostra para o usuario em ordem.
```javascript
function listarAnos() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const anos = arte.map(obra => obra.criacao);
        console.log('Anos das obras:');
        anos.forEach(ano => console.log(ano));
    }
    listarMenu();
}
```
## Listar as Categorias das Artes

Essa função, analisa o código, pega as informações referente as categorias das obras e mostra para o usuario em ordem.
```javascript
function listarCategorias() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const categorias = arte.map(obra => obra.categoria);
        console.log('Categorias das artes:');
        categorias.forEach(categoria => console.log(categoria));
    }
    listarMenu();
}
```
## Listar os Estilos das Artes

Essa função, analisa o código, pega as informações referente aos estilos das obras e mostra para o usuario em ordem.
```javascript
function listarEstilos() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const estilos = arte.map(obra => obra.estilo);
        console.log('Estilos das artes:');
        estilos.forEach(estilo => console.log(estilo));
    }
    listarMenu();
}
```
## Vamos para a Pratica

Pessoal vamos colocar em pratica o que foi mostrado. 

Pesquisem para mim obras de arte que vocês gostem ou conhecem para adicionarmos ao código. Podem ser varios estilos de artes (expressionismo, barroco, impressionismo, surrealismo, realismo, entre outros). 
