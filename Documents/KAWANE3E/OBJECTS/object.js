let pessoa = {  //O objeto sempre será dado e valor
    nome: `Bruna`,
    idade: 16,
    altura: 1.63,
    enderecos:[
        {
            tipo: 'Residencial',
            rua: 'Rua E',
            cidade: 'Maceió',
        },
        {
            tipo: 'Comercial',
            rua: 'Rua B',
            cidade: 'Salvador',
        }
    ],
    saudacao(){
        return `Olá, mundo`
    }
  };
// console.log(pessoa.nome)
// console.log(pessoa.saudacao())
// console.log(pessoa.enderecos[0].rua)

//Listar todos os endereços deste objeto

// const enderecos = pessoa.enderecos.map((elementos)=>elementos)
// console.log(enderecos)

// Resolução do professor:

pessoa.enderecos.forEach((elementos, indice)=>{
    console.log(`${indice + 1} - ${elementos.cidade}`)
})