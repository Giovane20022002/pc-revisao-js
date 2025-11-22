// Desconto em compra
// Regras negócio:
// - Se valorCompra >= 100 -> 10% de desconto 
// Cria uma função que execute isso 
// - Se valorCompra < 100 -> sem  desconto 


let escopoGlobal = 10  // escopo global 

function calcularDesconto(valorCompra) {
    let desconto = 0 //escopo de fiunção 

    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10  
    }
    valorFinal = valorCompra - desconto

    return{
        valorCompra,
        desconto,
        valorFinal
    }


}

console.log(calcularDesconto(1200));