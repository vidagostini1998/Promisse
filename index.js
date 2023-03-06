let aceitar = false

console.log('Pedir Uber');
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Carro Chegou')
    }
    return reject('Pedido negado')

})

console.log('Aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Finalizada'))