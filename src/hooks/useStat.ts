import { useContext } from "react";
import StatContext from "../context/StatProvider";

function useStat() {
  return useContext(StatContext);
}

export default useStat;
