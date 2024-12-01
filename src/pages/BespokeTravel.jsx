import { useEffect } from "react";
import BespokeTravel from "../components/Bespokepage/BespokeTravel";

const BesTravel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <BespokeTravel />;
};

export default BesTravel;
