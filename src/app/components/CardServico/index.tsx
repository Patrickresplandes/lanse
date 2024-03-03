"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CardServico() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const cards = [
    { title: "Eventos" , href:"/eventos" },
    { title: "Edital",  href: "/"},
    { title: "Diretoria",  href: "/" },
  ];

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 390);
    };

    // Adiciona um ouvinte de evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Inicializa o estado de exibição de acordo com a largura inicial da tela
    setShowArrows(window.innerWidth > 390);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-slate-100 h-96 w-full flex flex-col items-center justify-center">
        <div className={`flex p-4 space-x-4 ${showArrows ? "" : "overflow-x-auto"}`}>
          <div className={`max-md:flex items-center justify-center hidden ${!showArrows ? "hidden" : ""}`} onClick={handlePrevCard}>
            <FaChevronLeft />
          </div>

          {showArrows ? (
            cards.map((card, index) => (
              <Link href={card.href} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))
          ) : (
            <Link href={cards[currentCard].href}>
              <Card>
                <CardHeader>
                  <CardTitle>{cards[currentCard].title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          )}

          <div className={`max-md:flex items-center justify-center hidden ${!showArrows ? "hidden" : ""}`} onClick={handleNextCard}>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}