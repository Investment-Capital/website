import { useState } from "react";

const useDeviceWidth = (threshold?: (width: number) => boolean) => {
  const [widthData, setWidthData] = useState<number | boolean>(
    threshold ? threshold(window.innerWidth) : window.innerWidth
  );

  window.addEventListener("resize", () =>
    setWidthData(threshold ? threshold(window.innerWidth) : window.innerWidth)
  );

  return widthData;
};

export default useDeviceWidth;
