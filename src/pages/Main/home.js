import React from "react";
import "../../App.css";
function Main() {
  return (
    <div className="home">
      <img id="logo" src="logo.png" alt="logo_CoTrip" />

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Como Funciona</a>
        </li>
        <li>
          <a href="#contact">CoTrips</a>
        </li>
        <li>
          <a href="#about">Quem já viajou</a>
        </li>
        <button class="secundary-button">Entrar</button>
      </ul>

      <main>
        <div id="principal_msg">
          <h2 class="principal_msg_title">BEM VINDO A BORDO!</h2>
          <p class="principal_msg_sub">Que bom que você resolveu viajar.</p>
          <button class="create-button">
            {" "}
            <a href="form0.html">CRIAR MINHA COTRIP!</a>
          </button>
        </div>

        <div class="zap">
          <a
            href="https://api.whatsapp.com/send?phone=5581992464433&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20CoTrip!"
            target="_blank"
          >
            {" "}
            <img src="whatsapp.png" alt="link WhatsApp" />{" "}
          </a>
        </div>
      </main>
    </div>
  );
}

export default Main;
