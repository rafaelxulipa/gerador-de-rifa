import logo from "../images/logoSolo.png";
import name from "../images/OR.png";
import "../styles/Home.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={name} className="name" alt="name" />
      </header>

      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            alert("clicado");
          }}
        >
          GERAR SUA RIFA
        </Button>
      </div>
    </div>
  );
}
