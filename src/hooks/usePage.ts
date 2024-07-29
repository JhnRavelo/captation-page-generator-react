import { useContext } from "react";
import PageContext from "../context/PageProvider";

function usePage() {
  return useContext(PageContext);
}

export default usePage;
