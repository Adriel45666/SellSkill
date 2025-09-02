import React from "react";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      {/* Header só na Home */}
      <Header />

      {/* Conteúdo principal da Home */}
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#4ec868" }}>
        Bem-vindo ao SELLSKILLS!
      </h1>
      <p style={{ textAlign: "center", color: "#e0e0e0" }}>
        Aqui você encontra os melhores cursos.
      </p>
    </div>
  );
}
