let listadosAlunos = ["Cecilia", "Luisa", "Fabiana", "Alice"];

for(let contador = 0; contador < listadosAlunos.length; contador++){
    if(contador == 0){
        console.log("Esse número é: " + contador,  " isso mesmo, é ZERO!");
    } else if(contador % 2 == 0) {
        console.log("Esse número é: " + contador,  " um numero PAR!");
    } else if(contador % 2 == 1) {
        console.log("Esse número é: " + contador, " um numero ÍMPAR!");
    }
}

  

    
