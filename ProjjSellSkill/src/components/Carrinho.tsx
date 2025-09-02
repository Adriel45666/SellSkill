import React, { useState, useEffect } from "react";
import "../carrinho.css";

type Curso = {
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
};

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState<Curso[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(carrinhoLocal);

    const totalCalculado = carrinhoLocal.reduce((acc: number, curso: Curso) => {
      const precoNumero = parseFloat(
        curso.preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
      );
      return acc + precoNumero;
    }, 0);
    setTotal(totalCalculado);
  }, []);

  const removerItem = (index: number) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    const novoTotal = novoCarrinho.reduce((acc, curso) => {
      const precoNumero = parseFloat(
        curso.preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
      );
      return acc + precoNumero;
    }, 0);
    setTotal(novoTotal);
  };

  const finalizarCompra = () => {
    window.location.href = "/pagamento";
  };

  return (
    <div className="container">
      <div className="produtos">
        <h1 className="titulo-carrinho">Meu Carrinho</h1>
        {carrinho.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>Seu carrinho está vazio.</h2>
        ) : (
          carrinho.map((curso, index) => (
            <div className="item-carrinho" key={index}>
              <img src={curso.imagem} alt={curso.titulo} />
              <div>
                <h2>{curso.titulo}</h2>
                <p>{curso.descricao}</p>
                <p className="preco">{curso.preco}</p>
                <button className="remover" onClick={() => removerItem(index)}>
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="resumo-carrinho">
        <h3>Resumo da compra</h3>
        <p>
          Produtos (<span>{carrinho.length}</span>)
        </p>
        <p className="total">
          Total: <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
        </p>
        <button className="finalizar-compra" onClick={finalizarCompra}>
          Continuar a compra
        </button>
      </div>
    </div>
  );
}