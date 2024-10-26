const websocketApi = (url: string) => {
  return new WebSocket(url);
};

export default websocketApi;
