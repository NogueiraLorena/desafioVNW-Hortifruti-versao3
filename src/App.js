import React from "react";
import "./index.css";

import Titles from "./components/theTitles/myTitles";

import Lettuce from "./components/imgs/imagesFruits/alface.png";
import Orange from "./components/imgs/imagesFruits/laranja.png";
import Cherry from "./components/imgs/imagesFruits/cereja.png";
import Carrot from "./components/imgs/imagesFruits/cenoura.png";
import Mango from "./components/imgs/imagesFruits/manga.png";
import Lemon from "./components/imgs/imagesFruits/limao.png";
import Beet from "./components/imgs/imagesFruits/beterraba.png";
import Tomato from "./components/imgs/imagesFruits/tomate.png";

import Rectangle from "./components/contenRectangle/Rectangle";

export default function App() {
  state = {
    fruits: [
      { imagem: `${Lettuce}` },
      { imagem: `${Orange}` },
      { imagem: `${Cherry}` },
      { imagem: `${Carrot}` },
      { imagem: `${Mango}` },
      { imagem: `${Lemon}` },
      { imagem: `${Beet}` },
      { imagem: `${Tomato}` }
    ]
  };

  return (
    <>
      <Titles />

      <div className="conteiner">
        {this.state.fruits.map((item) => (
          <div className="conteinerImagesFruits">
            <img
              className="imagesFruits"
              src={item.imagem}
              alt="imagens das frutas/fruit images"
            />
          </div>
        ))}
      </div>
      <Rectangle />

      <p>Eu ainda vou melhorar isso.</p>
    </>
  );
}
