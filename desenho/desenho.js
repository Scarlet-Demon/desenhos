const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let arte = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
    1. Cadastrar arte
    2. Listar todas as artes
    3. Edtar
    4. Remover
    5. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarArte()
				break
			case '2':
				listarArtes()
				break
			case '3':
                editar()
                break
            case '4':
                remover()
                break
            case '5':
                rl.close()
                break
            default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarArte() {
	rl.question('Digite o nome da arte ', (nome) => {
		rl.question('Digite a autor da arte: ', (artista) => {
			rl.question('Digite a data de criação: ', (criacao) => {
                rl.question('Digite a descrição da Arte: ', (descricao) => {
                    rl.question('Digite a categoria da arte: ', (camada) => {
                        rl.question('Digite o estilo da arte: ', (estilo) => {
                            arte.push({ nome:nome, autor:artista, criacao:criacao, descricao:descricao, categoria:camada, estilo:estilo })
                            console.log('Arte cadastrado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
			})
		})
	})
}

function listarArtes() {
    if(arte ==''){
    console.log('nenhuma Arte cadastrado')
    exibirMenu()
    }else{
    console.log(arte)
    exibirMenu()
    }
}

function editar() {
    if(arte == '') {
        console.log('Arte não cadastrado')
        exibirMenu()
    } else {
        for (let i = 0; i < arte.length; i++) {
            console.log(`${i+1}:${arte[i].nome},${arte[i].autor},${arte[i].criacao},${arte[i].descricao},${arte[i].categoria},${arte[i].estilo}`)
        }
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if (numero > 0 && numero <= arte.length) {
                rl.question('Digite o novo nome da arte: ', (nome) => {
                    rl.question('Digite o novo autor: ', (artista) => {
                        rl.question('Digite a nova data de criação: ', (criacao) => {
                            rl.question('Digite a nova descrição: ', (descricao) => {
                                rl.question('Digite a nova categoria: ', (camada) => {
                                    rl.question('Digite a novo estilo: ', (estilo) => {
                                    arte[numero - 1] = {nome,artista,criacao,descricao,camada,estilo}
                                    console.log('editado com sucesso!')
                                    exibirMenu()
                                    })
                                })
                            })
                        })
                    })
                 })
            } else {
                console.log('Arte inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}

function remover() {
    if (arte.length == '') {
        console.log('Nada cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de elementos')
        arte.forEach((elemento, i) => {
            console.log(`${i+1}:${arte[i].nome},${arte[i].autor},${arte[i].criacao},${arte[i].descricao},${arte[i].categoria},${arte[i].estilo}`)
        })
        rl.question('Digite o número do elemento que deseja remover:', (numero) => {
            if (numero > 0 && numero <= arte.length) {
                arte.splice(numero - 1, 1)
                console.log('Elemento removido com sucesso!')
                exibirMenu()
            }else {
                console.log('Arte inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}