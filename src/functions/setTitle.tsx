type Data = {
  text: string;
};

const setTitle = ({ text }: Data): void => {
  document.title = text;
};

export default setTitle;
