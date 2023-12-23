import './styles.css';

interface SliderInterface {
  max: number;
  min: number;
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = ({max, min, name, value, onChange}: SliderInterface) => (
  <input
    className="range"
    type="range"
    max={max}
    min={min}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export default Slider;