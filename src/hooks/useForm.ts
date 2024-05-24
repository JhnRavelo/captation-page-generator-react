import { useContext } from "react";
import AddFormContext from "../context/AddFormProvider";

const useForm = () => {
  return useContext(AddFormContext);
};

export default useForm;
