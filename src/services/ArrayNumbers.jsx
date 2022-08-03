export default function ArrayNumbers(first, last) {
    let arr = [];
    for (let i = first; i < (last + 1); i++) {
        arr.push(i);
    }

    let arrShuffle = shuffleArray(arr)
    //console.log(arr)
    return arrShuffle;
}

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

export function separar(base, maximo) {
    var resultado = [[]];
    var grupo = 0;
  
    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
  
      resultado[grupo].push(base[indice]);
  
      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
  
    return resultado;
  }
  
  //console.log(JSON.stringify(dados));