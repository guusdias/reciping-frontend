import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <Link to="/feed">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
