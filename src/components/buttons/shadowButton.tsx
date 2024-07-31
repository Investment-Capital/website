import Button from "./button";

type Data = {
  color: string;
  text: string;
  onClick: () => void;
};

const ShadowButton = ({ color, text, onClick }: Data) => {
  return (
    <Button
      onClick={onClick}
      text={text}
      color={color}
      styles={{
        boxShadow: `${color} 0px 0px 0px 0px`,
        padding: "15px 48px",
        borderRadius: "10px",
      }}
      hoveredStyles={{
        boxShadow: `${color} 0px 6px 16px 0px`,
      }}
    />
  );
};

export default ShadowButton;
