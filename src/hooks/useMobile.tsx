import { useEffect, useState } from "react";

const useMobile = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const update = () => {
      setMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return mobile;
};

export default useMobile;
