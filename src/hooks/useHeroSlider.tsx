import { useState } from "react";
import { dataHero } from "@/data/hero";

export const useHeroSlider = () => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  const nextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) =>
      prevIndex === dataHero.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) =>
      prevIndex === 0 ? dataHero.length - 1 : prevIndex - 1
    );
  };

  return {
    currentRecipe: dataHero[currentRecipeIndex],
    nextRecipe,
    prevRecipe,
  };
};
