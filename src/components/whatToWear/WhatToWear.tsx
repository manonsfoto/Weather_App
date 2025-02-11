import { FC, useContext, useEffect, useState } from "react";
import "./WhatToWear.css";
import { IsCelsiusContext } from "../../context/Context";
import { clothingData } from "../../utils/api/clothing_recommendations";
import { IDataWeather } from "../../interfaces/IDataWeather";
type TSpecial = { outer_layer: string[]; accessories: string[] };
type TClothing = {
  base: string[];
  insulating: string[];
  outer: string[];
  accessories: string[];
};

interface WhatToWearProps {
  data: IDataWeather;
  cityNameInput: string;
}

const WhatToWear: FC<WhatToWearProps> = ({ data, cityNameInput }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  const [special, setSpecial] = useState<TSpecial | null>(null);
  const [clothing, setClothing] = useState<TClothing | null>(null);

  function getClothingSuggestion() {
    const feelsLike = Math.round(data.main.feels_like);
    if (!feelsLike) return;

    const tempKey = isCelsius ? "temp_c" : "temp_f";
    const clothing = clothingData.clothing_recommendations.find(
      (c) => feelsLike >= c[tempKey]
    );

    setSpecial(getSpecialCondition(data.weather[0].description));

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

  function getSpecialCondition(description: string) {
    if (/rain|thunderstorm|drizzle/.test(description))
      return clothingData.special_conditions.rain;
    if (/snow/.test(description)) return clothingData.special_conditions.snow;
    return null;
  }

  useEffect(() => {
    getClothingSuggestion();
  }, [data, cityNameInput]);

  return (
    <section className="stn-whatToWear">
      <p className="headline">What to Wear Today?</p>

      <ul>
        <li>
          <h5>Base Layer</h5> <p>{clothing?.base.join(", ")}</p>
        </li>
        <li>
          <h5>Insulating Layer</h5> <p>{clothing?.insulating.join(", ")}</p>
        </li>
        {clothing?.outer.join(", ") && (
          <li>
            <h5>Outer Layer</h5> <p>{clothing?.outer.join(", ")}</p>
          </li>
        )}
        {clothing?.accessories.join(", ") && (
          <li>
            <h5>Accessories</h5>
            <p> {clothing?.accessories.join(", ")}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default WhatToWear;
