import { useContext } from "react";
import StatContext from "../context/StatProvider";

const useStat = () => {
  return useContext(StatContext);
}

export default useStat;
