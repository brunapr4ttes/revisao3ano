// Dado dois arrays de objetos que representam produtos e preços.

// let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
// let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

// // Crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.

// const array3 = produtos.concat(precos);
// function filtrarpreco(query) {
//     return precos.filter(function (el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     });
    
//   }
  
// //   console.log(filtrarpreco("pre")); 
 

// // const listarDados = (elemento) => console.log(elemento)
// // array3.forEach(listarDados)

//         //resolução do professor:

// function combinarProdutoPreco(produtos,precos){
//     return produtos.map((produto)=> {
//         //Encontrar o objeto correspondente do array de preços
//         let precoProduto = precos.find((preco)=> preco.nome === produto.nome)

//         return {
//             nome: produto.nome,
//             categoria:produto.categoria,
//             preco: precoProduto.preco
//         }
//     }
        
// )}

// let combinaProduto = combinarProdutoPreco(produtos, precos)
// console.log(combinaProduto)

//         // ATIVIDADE 02 - resolução do professor:

// //Utilizando o array de produtos do exercício anterior, crie uma função que recebe a categoria desejada e retorna um novo array contendo apenas os produtos dessa categoria.

// function buscarPorCategoria(arrayDeProduto, categoria){
//     return arrayDeProduto.filter((produto)=>produto.categoria === categoria);
// }

// const categoriaProduto = buscarPorCategoria(combinaProduto, "Eletrônicos")
// console.log(categoriaProduto)

        // ATIVIDADE 03 - resolução do professor:
// Dados um array de objetos que representam produtos e um array que representa as quantidades compradas de cada produto:

// let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
// let quantidades = [3, 1];

// //Crie uma função que calcule o preço total da compra, considerando as quantidades compradas de cada produto.

// function precoTotal(produtos, quantidades){
//     return produtos.map((produto, index)=>{
//         let precoVenda = produto.preco * quantidades[index]

//         return{
//             nome: produto.nome,
//             preco: produto.preco,
//             valorTotal: precoVenda
//         }
//     })
// }

// const precoVendaProduto =precoTotal(produtos, quantidades)
// console.log(precoVendaProduto)

        // ATIVIDADE 04 - resolução do professor:

// Dado um array de objetos que representam produtos:

        let produtos = [
            { nome: 'Camiseta', preco: 20 },
            { nome: 'Celular', preco: 500 },
            { nome: 'Caneca', preco: 10 }
          ];

// Crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

function precoMinimo(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto)=>produto.preco >= valorMinimo)
}

const produtoAcimaDoMinimo = precoMinimo(produtos, 500)
console.log(produtoAcimaDoMinimo)