import { useRef } from "react";
import EditSVG from "../../assets/svg/EditSVG";
import LogoutSVG from "../../assets/svg/LogoutSVG";
import ThreeDotSVG from "../../assets/svg/ThreeDotSVG";
import "./infoAccount.scss";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import MailExportSVG from "../../assets/svg/MailExportSVG";
import useExportXLSX from "../../hooks/useExportXLSX";
import FileChartSVG from "../../assets/svg/FileChartSVG";

type InfoAccountPropsType = {
  img: string;
  name: string;
};

const InfoAccount = ({ img, name }: InfoAccountPropsType) => {
  const logout = useLogout();
  const exportXLS = useExportXLSX();
  const optionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const authContext = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangePicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files?.length > 0) {
      const formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      try {
        const res = await axiosPrivate.put("auth/edit/avatar", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data.success) {
          authContext?.setAuth(res.data.user);
          toast.success("Image de Profile Modifier");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Erreur serveur");
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="options" ref={optionsRef}>
        <div className="option" onClick={() => exportXLS("chart")}>
          <span>Exporter Charte</span>
          <FileChartSVG width="30" height="18" />
        </div>
        <div className="option" onClick={() => exportXLS("mail")}>
          <span>Exporter Email</span>
          <MailExportSVG width="30" height="18" />
        </div>
        <div className="option" onClick={() => navigate("/edit-profile")}>
          <span>Modifier Profile</span>
          <EditSVG width="30" height="20" />
        </div>
        <div className="option" onClick={() => logout()}>
          <span>Déconnexion</span>
          <LogoutSVG width="30" height="20" />
        </div>
      </div>
      <div className="account-info">
        <div className="account-info-picture">
          <span>
            <img src={img} alt="Account" />
            <input
              type="file"
              id="img-profile"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={(e) => handleChangePicture(e)}
            />
            <label
              className="image-overlay"
              htmlFor="img-profile"
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
              }}
            >
              <EditSVG width="23" height="23" />
            </label>
          </span>
        </div>
        <span>
          {name.split(" ")[0][0].toUpperCase() +
            "." +
            " " +
            name.split(" ")[1][0].toUpperCase() +
            name.split(" ")[1].slice(1).toLowerCase()}
        </span>
        <span
          className="more-options"
          onClick={() => optionsRef.current?.classList.toggle("visible")}
        >
          <ThreeDotSVG width="35" height="35" />
        </span>
      </div>
    </>
  );
};

export default InfoAccount;
