function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitDB(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

waitDB('Conexão com a DB', randomNumber(1, 3))
.then(resposta => {
    console.log(resposta);
    return waitDB('Buscando dados da base', randomNumber(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return waitDB(22222, randomNumber(1, 3));
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibindo dados na tela.')
})
.catch(e => {
    console.log('ERRO: ', e)
});
