/* eslint-disable react-hooks/exhaustive-deps */
import AddForm from "../../components/Modal/Modal";
import Menu from "../../components/Menu/Menu";
import useForm from "../../hooks/useForm";
import AdminRouter from "../../routers/AdminRouter";
import "./landing.scss";
import { useEffect } from "react";
import useCampagne from "../../hooks/useCampagne";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import useEntreprise from "../../hooks/useEntreprise";
import useQRCode from "../../hooks/useQRCode";
import usePage from "../../hooks/usePage";
import { axiosDefault } from "../../api/axios";

const Landing = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const entrepriseContext = useEntreprise();
  const axiosPrivate = useAxiosPrivate();
  const qrCodeContext = useQRCode();
  const pageContext = usePage();

  useEffect(() => {
    (async () => {
      try {
        const fetchCampagnes = await axiosPrivate.get("/campagne");

        if (fetchCampagnes.data.success) {
          campagneContext?.setCampagnes(fetchCampagnes.data.datas);
          formContext?.setYears(fetchCampagnes.data.years);
        } else {
          toast.error(fetchCampagnes.data.message);
        }

        const fetchEntreprises = await axiosPrivate.get("/entreprise");

        if (fetchEntreprises.data.success) {
          entrepriseContext?.setEntreprises(fetchEntreprises.data.datas);
        } else {
          toast.error(fetchEntreprises.data.message);
        }

        const fetchQRCodes = await axiosPrivate.get("/qr-code");

        if (fetchQRCodes.data.success) {
          qrCodeContext?.setQrCodes(fetchQRCodes.data.datas);
        } else {
          toast.error(fetchQRCodes.data.message);
        }

        const fetchPages = await axiosDefault.get("/page");

        if (fetchPages.data.success) {
          pageContext?.setPages(fetchPages.data.datas);
        } else {
          toast.error(fetchPages.data.message);
        }
      } catch (error) {
        toast.error("Erreur serveur");
        console.log(error);
      }
    })();
  }, []);

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
