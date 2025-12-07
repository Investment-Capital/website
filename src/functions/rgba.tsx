import Color from "../types/color";

const rgba = (r: number, g: number, b: number): Color => {
  return (opacity: number = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default rgba;
