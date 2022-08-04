import ArrayNumbers, { separar } from '../services/ArrayNumbers';
import '../styles/Rifa.css';
import BoxSx from './Bloco';

export default function Rifa() {
    let numbers = ArrayNumbers(0, 7);
    let numberAux = [];
    //console.log(numbers);

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

    //console.log(numberAux);

    let numberAux2 = separar(numberAux, 4)

    // console.log(numberAux2);
    // console.log(numberAux2.length)


    // for (let i = 0; i < numberAux2.length; i++) {
    //     document.write(
    //         `
    //             <div className="Rifa">
    //                 <div className="tg-wrap">
    //                     <table className="tg">
    //                         <thead>
    //                             <tr>
    //                                 <th className="tg-0lax" colSpan="2">TÍTULO</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             <tr>
    //                                 <td className="tg-0lax">${numberAux2[i][0]}</td>
    //                                 <td className="tg-0lax" rowSpan="4">TEXTO DA RIFA</td>
    //                             </tr>
    //                             <tr>
    //                                 <td className="tg-0lax">${numberAux2[i][1]}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td className="tg-0lax">${numberAux2[i][2]}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td className="tg-0lax">${numberAux2[i][3]}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td className="tg-0lax" colSpan="2">rodapé</td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         `
    //     );
    // }

    let arrTeste = [];

    numberAux2.forEach((item, index) => {
        let obj = {
            id: index,
            number1: item[0],
            number2: item[1],
            number3: item[2],
            number4: item[3]
        }
        arrTeste.push(obj)
    });

    console.log(arrTeste)

    let itemList = arrTeste.map((item, index) => {
        return (
            <BoxSx key={index}>
                <div className="tg-wrap">
                    <table className="tg">
                        <thead>
                            <tr>
                                <th className="tg-0lax" colSpan="2">TÍTULO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg-0lax">{item.number1}</td>
                                <td className="tg-0lax" rowSpan="4">TEXTO DA RIFA</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">{item.number2}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">{item.number3}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">{item.number4}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax" colSpan="2">rodapé</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BoxSx>
        )
    })

    return (
        <div className="Rifa">
            {itemList}
        </div>
        // numberAux2.forEach((item) => {
        //     <BoxSx>
        //         <div className="Rifa">
        //             <div className="tg-wrap">
        //                 <table className="tg table">
        //                     <thead>
        //                         <tr>
        //                             <th className="tg-0lax" colSpan="2">TÍTULO</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         <tr>
        //                             <td className="tg-0lax">{item[0]}</td>
        //                             <td className="tg-0lax" rowSpan="4">TEXTO DA RIFA</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="tg-0lax">{item[1]}</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="tg-0lax">{item[2]}</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="tg-0lax">{item[3]}</td>
        //                         </tr>
        //                         <tr>
        //                             <td className="tg-0lax" colSpan="2">rodapé</td>
        //                         </tr>
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </BoxSx>
        // })
    );
}