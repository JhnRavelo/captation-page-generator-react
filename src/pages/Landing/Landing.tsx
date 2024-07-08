/* eslint-disable react-hooks/exhaustive-deps */
import AddForm from "../../components/Modal/Modal";
import Menu from "../../components/Menu/Menu";
import useForm from "../../hooks/useForm";
import AdminRouter from "../../routers/AdminRouter";
import "./landing.scss";
import { useEffect } from "react";
import useCampagne from "../../hooks/useCampagne";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Landing = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const axiosPrivate = useAxiosPrivate();

useEffect(() => {
  (async () => {
    try {
      const res = await axiosPrivate.get("/campagne");
      
      if(res.data.success) {
        campagneContext?.setCampagnes(res.data.datas);
      }
    } catch (error) {
      console.log(error)
    }
  })()
}, [])

  return (
    <div
      className="main"
      onClick={(e) => {
        if (!(e.target instanceof Element)) return;
        const parent = e.target.parentNode;
        if (!parent || !(parent instanceof Element)) return;
        if (!parent.parentElement) return;
        const isOutsideOptions = !(
          parent.classList.contains("option") ||
          parent.classList.contains("more-options") ||
          parent.parentElement.classList.contains("option") ||
          parent.parentElement.classList.contains("more-options")
        );
        if (isOutsideOptions) {
          const optionsMenu = document.querySelector(".options");
          if (optionsMenu) {
            optionsMenu.classList.remove("visible");
          }
        }
      }}
    >
      <div className="background dashboard">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {formContext?.openForm && <AddForm />}
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="page-container">
          <div className="page-content content">
            <AdminRouter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
