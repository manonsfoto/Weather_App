import { FC, useContext, useEffect, useState } from "react";
import "./WhatToWear.css";
import {
  CurrentWeatherConditionContext,
  FeelsLikeTempCContext,
  FeelsLikeTempFContext,
  IsCelsiusContext,
} from "../../context/Context";
import { clothingData } from "../../utils/api/clothing_recommendations";
type TSpecial = { outer_layer: string[]; accessories: string[] };
type TClothing = {
  base: string[];
  insulating: string[];
  outer: string[];
  accessories: string[];
};

interface WhatToWearProps {
  cityNameInput: string;
}

const WhatToWear: FC<WhatToWearProps> = ({ cityNameInput }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  const { feelsLikeTempC } = useContext(FeelsLikeTempCContext);
  const { feelsLikeTempF } = useContext(FeelsLikeTempFContext);
  const { currentWeatherCondition } = useContext(
    CurrentWeatherConditionContext
  );
  const [special, setSpecial] = useState<TSpecial | null>(null);
  const [clothing, setClothing] = useState<TClothing | null>(null);

  function getClothingSuggestion() {
    if (isCelsius === true) {
      if (feelsLikeTempC) {
        const clothing = clothingData.clothing_recommendations.find(
          (c) => feelsLikeTempC >= c.temp_c
        );

        if (currentWeatherCondition.includes("rain")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("thunderstorm")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("drizzle")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("snow")) {
          setSpecial(clothingData.special_conditions.snow);
        } else {
          setSpecial(null);
        }
        setClothing({
          base: clothing?.base_layer || [],
          insulating: clothing?.insulating_layer || [],
          outer: clothing?.outer_layer || [],
          accessories: [
            ...(clothing?.accessories || []),
            ...(special?.accessories || []),
          ],
        });
      }
    }
    if (isCelsius === false) {
      if (feelsLikeTempF) {
        const clothing = clothingData.clothing_recommendations.find(
          (f) => feelsLikeTempF >= f.temp_f
        );

        if (currentWeatherCondition.includes("rain")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("thunderstorm")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("drizzle")) {
          setSpecial(clothingData.special_conditions.rain);
        } else if (currentWeatherCondition.includes("snow")) {
          setSpecial(clothingData.special_conditions.snow);
        } else {
          setSpecial(null);
        }
        setClothing({
          base: clothing?.base_layer || [],
          insulating: clothing?.insulating_layer || [],
          outer: clothing?.outer_layer || [],
          accessories: [
            ...(clothing?.accessories || []),
            ...(special?.accessories || []),
          ],
        });
      }
    }
  }

  useEffect(() => {
    getClothingSuggestion();
  }, [cityNameInput]);

  return (
    <section className="stn-whatToWear">
      <p className="headline">What to Wear Today?</p>

      <ul>
        <li>
          <strong>Base Layer:</strong> {clothing?.base.join(", ")}
        </li>
        <li>
          <strong>Insulating Layer:</strong> {clothing?.insulating.join(", ")}
        </li>
        <li>
          <strong>Outer Layer:</strong> {clothing?.outer.join(", ")}
        </li>
        <li>
          <strong>Accessories:</strong> {clothing?.accessories.join(", ")}
        </li>
      </ul>
    </section>
  );
};

export default WhatToWear;
