import logo from "../images/logoSolo.png";
import name from "../images/OR.png";
import "../styles/Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import RifaUm from "../components/RifaUm";
import RifaDois from "../components/RifaDois";
import RifaQuatro from "../components/RifaQuatro";

const rifaTypes = [
  {
    id: 1,
    value: 99,
    label: "DEZENA",
  },
  {
    id: 2,
    value: 999,
    label: "CENTENA",
  },
  {
    id: 3,
    value: 9999,
    label: "MILHAR",
  },
];

const cardTypes = [
  {
    id: 1,
    value: 1,
    label: "UM POR BILHETE",
  },
  {
    id: 2,
    value: 2,
    label: "DOIS POR BILHETE",
  },
  {
    id: 3,
    value: 4,
    label: "QUATRO POR BILHETE",
  },
];

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [finalNumber, setFinalNumber] = useState("");
  const [rodape, setRodape] = useState("");
  const [rifaTexto, setRifaTexto] = useState("");
  const [type, setType] = useState("");
  const [maxTitle, setMaxTitle] = useState(25);
  const [maxRodape, setMaxRodape] = useState(25);
  const [maxRifaText, setMaxRifaText] = useState(1000);

  const handleChangeType = (event) => {
    setType(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto,
      type: type,
    });
  };

  const handleChangeTitulo = (event) => {
    if (event.nativeEvent.inputType === 'insertText') {
      setMaxTitle(maxTitle - 1);
    }  else if(event.nativeEvent.inputType === 'insertFromPaste') {
      setMaxTitle(maxTitle - event.target.value.length);
    } else {
      event.target.value.length === 0 ? setMaxTitle(25) : setMaxTitle(maxTitle + 1);
    }
    setTitulo(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto,
      type: type,
    });
  };

  const handleChangeFinalNumber = (event) => {
    setFinalNumber(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto,
      type: type,
    });
  };

  const handleChangeRodape = (event) => {
    if (event.nativeEvent.inputType === 'insertText') {
      setMaxRodape(maxRodape - 1);
    } else if(event.nativeEvent.inputType === 'insertFromPaste') {      
      setMaxRodape(maxRodape - event.target.value.length);
    } else {
      event.target.value.length === 0 ? setMaxRodape(25) : setMaxRodape(maxRodape + 1);
    }
    setRodape(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto,
      type: type,
    });
  };

  const handleChangeRifaTexto = (event) => {
    if (event.nativeEvent.inputType === 'insertText') {
      setMaxRifaText(maxRifaText - 1);
    } else if (event.nativeEvent.inputType === 'insertFromPaste'){
      setMaxRifaText(maxRifaText - event.target.value.length);
    } else {
      event.target.value.length === 0 ? setMaxRifaText(1000) : setMaxRifaText(maxRifaText + 1);
    }

    setRifaTexto(event.target.value);
    setValuesObj({
      title: titulo,
      footer: rodape,
      number: parseInt(finalNumber),
      text: rifaTexto,
      type: type,
    });
  };

  const [valuesObj, setValuesObj] = useState({
    title: "",
    footer: "",
    number: 0,
    text: "",
    type: "",
  });

  function rifas() {
    if (parseInt(type) === 1) {
      return (<RifaUm value={valuesObj} />)
    } else if (parseInt(type) === 2) {
      return (<RifaDois value={valuesObj} />)
    } else if (parseInt(type) === 4) {
      return (<RifaQuatro value={valuesObj} />)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={name} className="name" alt="name" />
      </header>
      <div className="inputs">
        <TextField
          id="outlined-select"
          select
          label="Tipo de numeração"
          value={finalNumber}
          onChange={handleChangeFinalNumber}
          helperText="Dezena [00 - 99] Centena [000 - 999]  Milhar [0000 - 9999]"
        >
          {rifaTypes.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select"
          select
          label="Tipo de Bilhete"
          value={type}
          onChange={handleChangeType}
          helperText="Selecione apenas uma opção"
        >
          {cardTypes.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-basic"
          label="Digite o título"
          variant="outlined"
          inputProps={{
            maxLength: 25,
          }}
          helperText={`Máximo de ${maxTitle} caracteres`}
          value={titulo}
          onChange={handleChangeTitulo}
        />

        <TextField
          id="outlined-basic"
          label="Digite o rodapé"
          variant="outlined"
          inputProps={{
            maxLength: 25,
          }}
          helperText={`Máximo de ${maxRodape} caracteres`}
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
          helperText={`Máximo de ${maxRifaText} caracteres`}
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
              title: "",
              footer: "",
              number: 0,
              text: "",
              type: "",
            });
            setTitulo("");
            setFinalNumber("");
            setRodape("");
            setRifaTexto("");
            setType("");
          }}
        >
          LIMPAR
        </Button>
      </div>

      <div id="rifaList" className="rifaList">
        {rifas()}
      </div>
    </div>
  );
}
