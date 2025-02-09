import { useContext, useEffect, useState } from "react";
import "./WhatToWear.css";
import {
  CurrentWeatherConditionContext,
  FeelsLikeTempCContext,
  FeelsLikeTempFContext,
  IsCelsiusContext,
} from "../../context/Context";
const clothingData = {
  clothing_recommendations: [
    {
      temp_c: 28,
      temp_f: 82,
      base_layer: [
        "Sleeveless tops",
        "T-shirts",
        "Shorts",
        "Skirts",
        "Linen shirts",
      ],
      insulating_layer: [],
      outer_layer: [],
      accessories: ["Sunglasses", "Hat"],
    },
    {
      temp_c: 23,
      temp_f: 73,
      base_layer: [
        "Short-sleeve shirts",
        "Thin blouses",
        "T-shirts",
        "Shorts",
        "Chinos",
      ],
      insulating_layer: ["Light cardigan (optional)"],
      outer_layer: [],
      accessories: ["Sunglasses"],
    },
    {
      temp_c: 20,
      temp_f: 68,
      base_layer: [
        "T-shirts",
        "Long-sleeve shirts",
        "Blouses",
        "Casual pants",
        "Chinos",
      ],
      insulating_layer: ["Light sweatshirt", "Thin sweater"],
      outer_layer: [],
      accessories: [],
    },
    {
      temp_c: 17,
      temp_f: 62,
      base_layer: ["T-shirts", "Long-sleeve shirts", "Light pants"],
      insulating_layer: ["Hoodie", "Sweater", "Light cardigan"],
      outer_layer: ["Light jacket (optional)"],
      accessories: [],
    },
    {
      temp_c: 12,
      temp_f: 54,
      base_layer: ["Long-sleeve shirts", "T-shirts", "Jeans", "Tights"],
      insulating_layer: ["Hoodie", "Sweater", "Cardigan"],
      outer_layer: ["Denim jacket", "Light jacket"],
      accessories: [],
    },
    {
      temp_c: 9,
      temp_f: 48,
      base_layer: [
        "Long-sleeve shirts",
        "Base layer (HeatTech optional)",
        "Jeans",
      ],
      insulating_layer: ["Fleece", "Sweatshirt"],
      outer_layer: ["Trench coat", "Field jacket"],
      accessories: ["Light scarf", "Thin gloves"],
    },
    {
      temp_c: 5,
      temp_f: 41,
      base_layer: ["HeatTech base layer", "Long-sleeve shirts", "Jeans"],
      insulating_layer: ["Fleece", "Thick sweater"],
      outer_layer: ["Wool coat", "Leather jacket"],
      accessories: ["Warm scarf", "Gloves"],
    },
  ],
  special_conditions: {
    rainy: {
      outer_layer: ["Waterproof jacket"],
      accessories: ["Umbrella", "Waterproof shoes"],
    },
    windy: {
      outer_layer: ["Windbreaker"],
      accessories: ["Scarf for face protection"],
    },
    snowy: {
      outer_layer: ["Waterproof boots"],
      accessories: ["Crampons", "Thermal socks"],
    },
  },
};
const WhatToWear = () => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  const { feelsLikeTempC } = useContext(FeelsLikeTempCContext);
  const { feelsLikeTempF } = useContext(FeelsLikeTempFContext);
  const { currentWeatherCondition } = useContext(
    CurrentWeatherConditionContext
  );

  function getClothingSuggestion() {
    if (feelsLikeTempC) {
      const clothing = clothingData.clothing_recommendations.find(
        (c) => feelsLikeTempC >= c.temp_c
      );
      const special =
        clothingData.special_conditions[currentWeatherCondition] || {};

      return {
        base: clothing?.base_layer || [],
        insulating: clothing?.insulating_layer || [],
        outer: clothing?.outer_layer || [],
        accessories: [
          ...(clothing?.accessories || []),
          ...(special.accessories || []),
        ],
      };
    }
    if (feelsLikeTempF) {
      const clothing = clothingData.clothing_recommendations.find(
        (f) => feelsLikeTempF >= f.temp_f
      );
      const special =
        clothingData.special_conditions[currentWeatherCondition] || {};

      return {
        base: clothing?.base_layer || [],
        insulating: clothing?.insulating_layer || [],
        outer: clothing?.outer_layer || [],
        accessories: [
          ...(clothing?.accessories || []),
          ...(special.accessories || []),
        ],
      };
    }
  }

  const clothing = getClothingSuggestion();

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
