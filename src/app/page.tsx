import Image from "next/image";
import Header from "./components/Header";
import { Card, CardContent} from "./components/Card"
import 
  Carousel
 from "./components/Carousel"

import React from "react";
import CardServico from "./components/CardServico";
import CardProduto from "./components/CardProduto";
import SubCardProduto from "./components/SubCardProduto";
import RedesSociais from "./components/RedesSociais";


export default function Home() {
  const imageNames = ["comida1", "comida2", "comida3", "comida4"];

  return (
    <>
 <div>
        <Header />
      </div>
      <div className="flex justify-center">
        <Carousel images={imageNames}/>
      </div>
      <CardServico />
      <CardProduto />
      <SubCardProduto />
      <RedesSociais/>

    </>
  );
}
