// declara uma constante que contém um array de objetos
const perguntas = [
    {
      pergunta: "Qual é a função usada para imprimir algo no console?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "declare",
        "var"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado em JavaScript?",
      respostas: [
        "Boolean",
        "String",
        "Both A and B"
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Verifica igualdade de valor e tipo",
        "Verifica igualdade de valor",
        "Nenhuma das opções anteriores"
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "função minhaFuncao()",
        "ambas as opções acima"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array?",
      respostas: [
        "pop()",
        "remove()",
        "delete()"
      ],
      correta: 0
    },
    {
      pergunta: "O que a função 'parseInt()' faz em JavaScript?",
      respostas: [
        "Analisa uma string e retorna um número inteiro",
        "Analisa uma string e retorna um número de ponto flutuante",
        "Nenhuma das opções anteriores"
      ],
      correta: 0
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um loop em JavaScript?",
      respostas: [
        "for loop",
        "while loop",
        "Ambas as opções acima"
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para um número específico de casas decimais",
        "Converte um número em uma string",
        "Nenhuma das opções anteriores"
      ],
      correta: 0
    }
  ];
  
  // seleciona o elemento HTML com o id 'quiz' e armazena na constante 'quiz'
  const quiz = document.querySelector('#quiz')
  //seleciona o elemento HTML <template> e armazena na constante 'template'
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop que percorre cada objeto dentro do array 'perguntas'
  for(const item of perguntas) {
    // clona o conteúdo do 'template' para criar um novo elemento que representará uma pergunta, o 'true' indica que todo conteúdo interno do template também deve ser clonado 
    const quizItem = template.content.cloneNode(true)
    // define o texto da tag <h3> no elemento recém-criado com a pergunta correspondente do objeto 'item'
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // inicia um loop para percorrer as opções de resposta de cada pergunta
    for(let resposta of item.respostas) {
      // clona o elemento <dt> do template para representar uma opção de resposta 
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // define o texto da tag <span> dentro do elemento <dt> com a opção de resposta correspondente
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // adiciona o elemento <dt> ao elemento <dl> na pergunta
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove o primeiro item <dt> do elemento <dl>, isso é feito para evitar duplicatas, já que o primeiro <dt> é apenas um modelo
    quizItem.querySelector('dl dt').remove()
  
    // adiciona o elemento quizItem ao elemento com id 'quiz' na tela
    quiz.appendChild(quizItem)
  }