function randomNumber(min = 0, max = 3) {
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

// waitDB("Fase 1", randomNumber())
//     .then(valor => {
//         console.log(valor)
//         return waitDB('Fase 2', randomNumber());
//     })
//     .then(fase => {
//         console.log(fase);
//         return waitDB('Fase 3', randomNumber());
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase', fase)
//     })
//     .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = waitDB("Fase 1", randomNumber());
    console.log(fase1);

    setTimeout(() => {
        console.log('Essa promise estava pendente: ', fase1)
    }, 1100)

    const fase2 = await waitDB("Fase 2", randomNumber());
    console.log(fase2);

    const fase3 = await waitDB("Fase 3", randomNumber());
    console.log(fase3);

    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
