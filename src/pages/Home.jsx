import logo from "../images/logoSolo.png";
import name from "../images/OR.png";
import "../styles/Home.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Rifa from "../components/Rifa";

export default function Home() {
  const [titulo, setTitulo] = useState('');
  const [finalNumber, setFinalNumber] = useState(0);
  const [rodape, setRodape] = useState('');
  const [rifaTexto, setRifaTexto] = useState('');

  const handleChangeTitulo = (event) => {
    setTitulo(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto
    })
  };

  const handleChangeFinalNumber = (event) => {
    setFinalNumber(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto
    })
  };

  const handleChangeRodape = (event) => {
    setRodape(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto
    })
  };

  const handleChangeRifaTexto = (event) => {
    setRifaTexto(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto
    })
  };

  const [valuesObj, setValuesObj] = useState({
    title: '',
    footer: '',
    number: 0,
    text: ''
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={name} className="name" alt="name" />
      </header>
      <div className="inputs">
        <TextField
          id="outlined-basic"
          label="Digite o título"
          variant="outlined"
          inputProps={{
            maxLength: 25,
          }}
          helperText="Máximo de 25 caracteres"
          value={titulo}
          onChange={handleChangeTitulo}
        />
        <TextField
          id="outlined-number"
          label="Número final"
          type="number"
          //defaultValue={9999}
          variant="outlined"
          helperText="Max: 9999 e Min: 0"
          inputProps={{
            max: 9999,
            min: 0,
          }}
          value={finalNumber}
          onChange={handleChangeFinalNumber}
        />
        <TextField
          id="outlined-basic"
          label="Digite o rodapé"
          variant="outlined"
          inputProps={{
            maxLength: 25,
          }}
          helperText="Máximo de 25 caracteres"
          value={rodape}
          onChange={handleChangeRodape}
        />
        <TextField
          id="outlined-multiline-static"
          label="Texto da Rifa"
          multiline
          rows={4}
          inputProps={{
            maxLength: 1000,
          }}
          helperText="Máximo de 1000 caracteres"
          value={rifaTexto}
          onChange={handleChangeRifaTexto}
        />
      </div>

      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            //alert("clicado");
            document.getElementById("rifaList").style.display = "flex";
          }}
        >
          GERAR SUA RIFA
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            document.getElementById("rifaList").style.display = "none";
            setValuesObj({
              title: '',
              footer: '',
              number: 0,
              text: ''
            });
            setTitulo('');
            setFinalNumber(0);
            setRodape('');
            setRifaTexto('');
          }}
        >
          LIMPAR
        </Button>
      </div>

      <div id="rifaList" className="rifaList">
        <Rifa value={valuesObj} />
      </div>

    </div>
  );
}
