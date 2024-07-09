const getApiURL = (path: string, websocket?: boolean) => {
  let protocal;

  if (websocket) protocal = "ws";
  else protocal = "http";

  if (import.meta.env.VITE_SECURE == "true") protocal += "s";

  return protocal + "://" + import.meta.env.VITE_BASE_API_LINK + path;
};

export default getApiURL;
