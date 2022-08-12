import ArrayNumbers from '../services/ArrayNumbers';
import UpdatedNumbers from '../services/UpdatedNumbers';
import '../styles/Rifa.css';

export default function RifaUm(props) {
    const finalNumber  = props.value;

    let numbers = ArrayNumbers(0, finalNumber.number);

    let numberAux = UpdatedNumbers(numbers, finalNumber.number);

    let itemList = numberAux.map((item, index) => {
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
                                <td className="tg-0lax numbers">{item}</td>
                                <td className="tg-0lax text" rowSpan="4">{finalNumber.text}</td>
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