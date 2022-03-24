# O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

JavaScript Demo: Array.find()

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12



# O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

Array.prototype.findIndex()

Veja também o método find(), que retorna o valor de um elemento encontrado no array em vez de seu índice.



# O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
Array.prototype.splice()