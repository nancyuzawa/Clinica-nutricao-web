document.getElementById("btnAdicionar").addEventListener("click", function(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let gorduraCorporal = parseFloat(document.getElementById("por-gordura").value);
    console.log("nome " + nome);
  
    // Validar os dados de entrada do usuário
    if (nome === "") {
        alert("Coloque o nome");
    } else if (isNaN(peso) || isNaN(altura) || isNaN(gorduraCorporal)) {
        alert("Apenas coloque números nos campos de peso, altura e gordura corporal!");
    } else {
        let imc = peso / (Math.pow(altura, 2));
        adicionarLinha(nome, peso, altura, gorduraCorporal, imc);
    }
});

/* Função que adiciona a linha no HTML*/
function adicionarLinha(nome, peso, altura, gorduraCorporal, imc){
    let novaLinha = document.createElement("tr");
    novaLinha.classList.add('dadosTabela'); // Atribuindo uma classe para a minha linha
    
    /* Criando 4 colunas */
    for (let i = 0; i < 5; i++){
        let novaColuna = document.createElement("td"); 

        if ( i == 0){
            novaColuna.textContent = nome; // Recebe o conteúdo de nome
        }
        else if (i == 1){
            novaColuna.textContent = peso; // Recebe o conteúdo de peso
        }
        else if (i == 2){
            novaColuna.textContent = altura; // Recebe o conteúdo de altura
        }
        else if (i == 3){
            novaColuna.textContent = gorduraCorporal; // Recebe o conteúdo de gorsura corporal
        }
        else{
            novaColuna.textContent = imc.toFixed(2); // Recebe o conteúdo o IMC calculado
        }
        novaLinha.appendChild(novaColuna); // Adiciona a célula à linha
    } 
    
     // Adicionando a linha completa à tabela
    document.getElementById('tabela').append(novaLinha);
}