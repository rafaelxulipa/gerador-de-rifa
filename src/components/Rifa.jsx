import ArrayNumbers, { separar } from '../services/ArrayNumbers';
import '../styles/Rifa.css';

export default function Rifa() {
    let numbers = ArrayNumbers(0, 7);
    let numberAux = [];
    console.log(numbers);

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

    console.log(numberAux);

    let numberAux2 = separar(numberAux, 3)

    console.log(numberAux2);
    

    for (let i = 0; i < numberAux.length; i++) {
        document.write(
            `
                <div className="Rifa">
                <div className="tg-wrap">
                    <table className="tg">
                        <thead>
                            <tr>
                                <th className="tg-0lax" colSpan="2">TÍTULO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg-0lax">${numberAux2[0]}</td>
                                <td className="tg-0lax" rowSpan="4">TEXTO DA RIFA</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">${numberAux2[1]}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">${numberAux2[2]}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax">${numberAux2[3]}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax" colSpan="2">rodapé</td>
                            </tr>
                        </tbody>
                    </table></div>
                </div>
            `
        );
    }

    // return (
    //     <div className="Rifa">
    //         <div className="tg-wrap">
    //             <table className="tg">
    //                 <thead>
    //                     <tr>
    //                         <th className="tg-0lax" colSpan="2">TÍTULO</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td className="tg-0lax">{numberAux[0]}</td>
    //                         <td className="tg-0lax" rowSpan="4">TEXTO DA RIFA</td>
    //                     </tr>
    //                     <tr>
    //                         <td className="tg-0lax">{numberAux[1]}</td>
    //                     </tr>
    //                     <tr>
    //                         <td className="tg-0lax">{numberAux[2]}</td>
    //                     </tr>
    //                     <tr>
    //                         <td className="tg-0lax">{numberAux[3]}</td>
    //                     </tr>
    //                     <tr>
    //                         <td className="tg-0lax" colSpan="2">rodapé</td>
    //                     </tr>
    //                 </tbody>
    //             </table></div>
    //     </div>
    // );
}