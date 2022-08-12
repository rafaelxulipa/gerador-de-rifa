export default function UpdatedNumbers(numbers, finalNumber) {
  
  let numberAux = [];

  if (finalNumber === 99) {
      numbers.forEach(element => {
          let num = `${element}`;
          if (element < 10) {
              num = "0" + element;
          }
          numberAux.push(num);
      });
  } else if (finalNumber === 999) {
      numbers.forEach(element => {
          let num = `${element}`;
          if (element < 10) {
              num = "00" + element;
          } else if (element >= 10 && element < 100) {
              num = "0" + element;
          }
          numberAux.push(num);
      });
  } else {
      numbers.forEach(element => {
          let num = `${element}`;
          if (element < 10) {
              num = "000" + element;
          } else if (element >= 10 && element < 100) {
              num = "00" + element;
          } else if (element >= 100 && element < 1000) {
              num = "0" + element;
          }
          numberAux.push(num);
      });
  }

    return numberAux;
}