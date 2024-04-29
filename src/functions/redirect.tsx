type Data = {
  to: string;
  newTab: boolean;
};

const Redirect = ({ to, newTab }: Data): void => {
  if (newTab) window.open(to, " _blank");
  if (!newTab) window.location.href = to;
};

export default Redirect;
