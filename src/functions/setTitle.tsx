type Data = {
  text: string;
};

const setTitle = ({ text }: Data): null => {
  document.title = text;

  return null;
};

export default setTitle;
