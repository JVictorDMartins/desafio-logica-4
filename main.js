/*1 - crie uma função que exiba uma mensagem no console

2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

5 - crie uma função que retorne o triplo do número recebido no parâmetro da função */


function boaTarde(){
    console.log("Boa Tarde!")
 }
 
 boaTarde()




 function name(nome){
    console.log(`${nome}`)
 }
 
 name("João Victor Dias Martins")




 function frase(nome, idade, musica){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade e meu estilo músical favorito é ${musica}`)
 }
 
 frase("João", 21, "Metalcore")





 function qualquercoisa(filme, musica){
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}`)
 }
 
 qualquercoisa("Jhon Wick","I Prevail - Bow Down ")




 function triplicar(x, y){
    return x * y
 
 }
 triplicar(7,3);
 console.log(triplicar(7,3))
