function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitDB(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }

      resolve(msg.toUpperCase() + " - passei na promise");
      return;
    }, time);
  });
}

// Promise.all Promise.race Promise.resolve Promisse.reject

function pageDownload(){
    const onCache = false;

    if(onCache){
        return Promise.resolve('Página em cache');
    } else{
        return waitDB('Baixei a página', 3000)
    }
}

pageDownload()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));

console.log(pageDownload);