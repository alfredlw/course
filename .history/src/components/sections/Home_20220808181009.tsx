import React from "react";
import SubscribeButton from "../buttons/SubscribeButton";
import PairProgramming from "../icons/PairProgramming";

const HomeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-0">
        <div>
          <div className="bg-gray-700 bg-opacity-40 w-max py-1 px-3 rounded-full">
            <h6 className="font-bold text-primary">
              Du 1 septembre au 25 octobre 2022.
            </h6>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase mt-2">
            Bootcamp pour devenir full-stack developpeur
          </h1>
          <p className="text-xl mt-2">
            Ce bootcamp est une machine pour vous transformer en un développeur
            Full-Stack. Vous allez apprendre plusieurs notions difficiles à
            trouver dans nos universités. Avec 6 projets réels à développer,
            nous espèrons que vous allez aimer l’aventure.{" "}
            <span className="font-comfortaa font-bold">Innov</span> (notre
            équipe) prépare les séances avec totale concentration, dans le but
            de vous fournir du contenu riche et surtout simple à comprendre.
          </p>
          <div className="hidden md:block mt-9">
           <SubscribeButton/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <PairProgramming className="w-auto h-64 md:h-80 -bottom-10" />
          <div className="block md:hidden mt-12">
            <SubscribeButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
