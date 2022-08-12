import ArrayNumbers, { separar } from '../services/ArrayNumbers';
import UpdatedNumbers from '../services/UpdatedNumbers';
import '../styles/Rifa.css';

export default function RifaDois(props) {
    const finalNumber  = props.value;

    let numbers = ArrayNumbers(0, finalNumber.number);

    let numberAux = UpdatedNumbers (numbers, finalNumber.number);

    let numberAux2 = separar(numberAux, 2)

    let arrTeste = [];

    numberAux2.forEach((item, index) => {
        let obj = {
            id: index,
            number1: item[0],
            number2: item[1],
        }
        arrTeste.push(obj)
    });

    console.log(arrTeste)

    let itemList = arrTeste.map((item, index) => {
        return (
            <div key={index} className="tableBackground">
                <div className="tg-wrap">
                    <table className="tg tableGeneral">
                        <thead>
                            <tr>
                                <th className="tg-0lax title" colSpan="2">{finalNumber.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg-0lax numbers">{item.number1}</td>
                                <td className="tg-0lax text" rowSpan="4">{finalNumber.text}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax numbers">{item.number2}</td>
                            </tr>
                            <tr>
                                <td className="tg-0lax footer" colSpan="2">{finalNumber.footer}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    })

    return (
        <div className="Rifa">
            {itemList}
        </div>
    );
}