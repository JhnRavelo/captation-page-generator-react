/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import EditSVG from "../../assets/svg/EditSVG";
import LogoutSVG from "../../assets/svg/LogoutSVG";
import ThreeDotSVG from "../../assets/svg/ThreeDotSVG";
import "./infoAccount.scss";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";
import MailExportSVG from "../../assets/svg/MailExportSVG";
import useExportXLSX from "../../hooks/useExportXLSX";
import FileChartSVG from "../../assets/svg/FileChartSVG";
import SaveSVG from "../../assets/svg/SaveSVG";
import useDownload from "../../hooks/useDownload";
import RestoreSVG from "../../assets/svg/RestoreSVG";
import useSendFile from "../../hooks/useSendFile";
import useCampagne from "../../hooks/useCampagne";
import useGetImagePrivate from "../../hooks/useGetImagePrivate";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import imgAvatar from "../../assets/png/reglages.png";

type InfoAccountPropsType = {
  name: string;
};

const InfoAccount = ({ name }: InfoAccountPropsType) => {
  const logout = useLogout();
  const exportXLS = useExportXLSX();
  const optionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const authContext = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRestoreRef = useRef<HTMLInputElement>(null);
  const download = useDownload();
  const send = useSendFile();
  const campagneContext = useCampagne();
  const getImage = useGetImagePrivate();
  const axiosPrivate = useAxiosPrivate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    (async () => {
      if (authContext?.auth?.id) {
        try {
          const urlImg = await getImage(
            axiosPrivate,
            authContext.auth.id,
            "/auth/img/"
          );
          setUrl(urlImg);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [authContext?.auth]);

  return (
    <>
      <div className="options" ref={optionsRef}>
        <input
          type="file"
          id="file-export"
          style={{ display: "none" }}
          ref={inputRestoreRef}
          onChange={(e) => {
            if (campagneContext?.setIsCampagne) {
              send(e, "/data/import", campagneContext.setIsCampagne);
            }
          }}
        />
        <label
          htmlFor="file-export"
          className="option"
          onClick={() => {
            if (inputRestoreRef.current) {
              inputRestoreRef.current.value = "";
            }
          }}
        >
          <span>Restaurer</span>
          <RestoreSVG width="30" height="20" />
        </label>
        <div
          className="option"
          onClick={() => download("save", "zip", "/data/export")}
        >
          <span>Sauvegarder</span>
          <SaveSVG width="30" height="20" />
        </div>
        <div className="option" onClick={() => exportXLS("chart")}>
          <span>Exporter Chart</span>
          <FileChartSVG width="30" height="18" />
        </div>
        <div className="option" onClick={() => exportXLS("mail")}>
          <span>Exporter Email</span>
          <MailExportSVG width="30" height="18" />
        </div>
        <div className="option" onClick={() => navigate("/edit-profile")}>
          <span>Modifier Profil</span>
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
            <img src={url ? url : imgAvatar} alt="Account" />
            <input
              type="file"
              id="img-profile"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={(e) => {
                if (authContext?.setAuth) {
                  send(e, "auth/edit/avatar", authContext.setAuth);
                }
              }}
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
