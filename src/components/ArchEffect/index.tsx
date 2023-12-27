import { useRef, useState, useEffect } from "react";
import Warp from "warpjs";
import Slider from "../Slider";
import SampleText from "./SampleText";

import "./styles.css";

const ArchEffect = () => {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [warp, setWarp] = useState<Warp | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef?.current !== null) {
      setWarp(new Warp(svgRef.current));
    }
  }, [svgRef]);

  const onSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!warp) {
      return;
    }

    const value = event.target.valueAsNumber;
    const archValue = value > 0 ? 120 : -120;

    if (prevValue === null) {
      warp.interpolate(120);
      warp.transform(([x, y]) => [x, y + 4 * Math.sin(x / archValue)]);
    } else {
      if (
        (value === 0 && prevValue > 0) ||
        Math.abs(value) > Math.abs(prevValue)
      ) {
        warp.transform(([x, y]) => [x, y + 4 * Math.sin(x / archValue)]);
      } else {
        warp.transform(([x, y]) => [x, y + 4 * Math.sin(x / -archValue)]);
      }
    }

    setValue(value);
    setPrevValue(value);
  };

  return (
    <div className="container">
      <SampleText refProp={svgRef} />
      <div className="slider">
        <Slider
          min={-10}
          max={10}
          name="arch-effect-slider"
          value={value}
          onChange={onSlideChange}
        />
      </div>
    </div>
  );
};

export default ArchEffect;
