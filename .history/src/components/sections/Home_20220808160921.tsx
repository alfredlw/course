import React from "react";
import PairProgramming from "../icons/PairProgramming";

const HomeSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2">
        <div>
        <h6> Du 1 septembre au 25 octobre 2022.</h6>
        <h1 className="text-5xl uppercase">
          Bootcamp pour devenir fullstack developpeur
        </h1>
        <p className="text-lg">
          Ce Boot camp c’est une machine pour vous transformer en un Développeur
          Full-Stack, vous aller apprends plusieurs notions difficiles de
          trouver à nos universités. Avec 6 projets réels a developer j’espère
          que vous allez aimer l’aventure. Notre équipe d’innov prépare déjà les
          séances avec totale concentration, dans le but de vous fournir du
          contenu riche et surtout simple à comprendre.
        </p>
        </div>
        <div className="flex items-center justify-center">
            <PairProgramming className=" w-auto h-80" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
