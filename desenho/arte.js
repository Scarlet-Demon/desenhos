const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arte = [];
exibirMenu()


function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar arte
    2. Listar todas as artes
    3. Editar arte
    4. Remover arte
    5. Sair
    `);

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
}

function listarMenu() {
    console.log(`
    Menu:
    1. Listar todas as artes
    2. Listar ano das obras
    3. Listar as categorias das artes
    4. Listar os estilos das artes
    5. Sair
    `);

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                listarObras();
                break;
            case '2':
                listarAnos();
                break;
            case '3':
                listarCategorias();
                break;
            case '4':
                listarEstilos();
                break;
            case '5':
                exibirMenu();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    });
}

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

function listarArtes() {
    listarMenu()
}

function listarObras() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        arte.forEach((obra, index) => {
            console.log(`${index + 1}: ${obra.nome}, ${obra.autor}, ${obra.criacao}, ${obra.descricao}, ${obra.categoria}, ${obra.estilo}`);
        });
    }
    listarMenu();
}

function listarAnos() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const anos = arte.map(obra => obra.criacao);
        const anosUnicos = [...new Set(anos)]; // Obter apenas valores únicos
        console.log('Anos das obras:');
        anosUnicos.forEach(ano => console.log(ano));
    }
    listarMenu();
}

function listarCategorias() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const categorias = arte.map(obra => obra.categoria);
        const categoriasUnicas = [...new Set(categorias)]; // Obter apenas valores únicos
        console.log('Categorias das artes:');
        categoriasUnicas.forEach(categoria => console.log(categoria));
    }
    listarMenu();
}

function listarEstilos() {
    if (arte.length === 0) {
        console.log('Nenhuma arte cadastrada.');
    } else {
        const estilos = arte.map(obra => obra.estilo);
        const estilosUnicos = [...new Set(estilos)]; // Obter apenas valores únicos
        console.log('Estilos das artes:');
        estilosUnicos.forEach(estilo => console.log(estilo));
    }
    listarMenu();
}

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
