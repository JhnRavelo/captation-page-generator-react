/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./pagePreviewTitle.scss";
import { useNavigate, useParams } from "react-router-dom";
import { axiosDefault } from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import useGetImagePrivate from "../../../hooks/useGetImagePrivate";
import usePage from "../../../hooks/usePage";

const PagePreviewTitle = () => {
  const [email, setEmail] = useState("");
  const { idCampagne, media } = useParams();
  const authContext = useAuth();
  const pageContext = usePage();
  const navigate = useNavigate();
  const getImage = useGetImagePrivate();
  const [url, setUrl] = useState({ urlLogo: "", urlImg: "" });

  useEffect(() => {
    (async () => {
      try {
        if (idCampagne && media) {
          const page = await axiosDefault.get(
            "/page/single-page?idCampagne=" + idCampagne
          );

          if (page.data.success) {
            pageContext?.setPage(page.data.data);
            const urlLogo = await getImage(
              axiosDefault,
              page.data.data.entrepriseId,
              "/entreprise/img/"
            );
            const urlImg = await getImage(
              axiosDefault,
              page.data.data.idData,
              "/page/img/"
            );
            setUrl({ urlImg, urlLogo });
          }
          const id = localStorage.getItem("idStatCampagne");

          if (id || authContext?.auth) return;
          const stat = await axiosDefault.post("/stat", { idCampagne, media });

          if (stat.data.success) {
            localStorage.setItem("idStatCampagne", stat.data.statId);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idCampagne, media, authContext?.auth]);

  const handleSubmit = async () => {
    const id = localStorage.getItem("idStatCampagne");

    const res = await axiosDefault.post("/stat/add-email", {
      idCampagne,
      media,
      id,
      email,
    });
    if (res.data.success) {
      localStorage.removeItem("idStatCampagne");
    }
    navigate("/thank-you");
  };

  return (
    <div
      className="page-preview-title-container"
      style={{ backgroundColor: pageContext?.page?.titleBackgroundColor }}
    >
      <div className="title-container">
        {url.urlLogo ? <img src={url.urlLogo} alt="logo" /> : null}
        <h1
          style={{
            color: pageContext?.page?.titleColor,
            fontFamily: '"Lato", sans-serif',
          }}
        >
          {pageContext?.page?.sloganCampagne}
        </h1>
      </div>
      <div className="slogan-image-container">
        <div className="slogan-container">
          <div className="slogan-content">
            <span style={{ color: pageContext?.page?.titleColor }}>
              {pageContext?.page?.description}
            </span>
          </div>
          <div className="input-email">
            <input
              type="text"
              placeholder="Veuillez mettre votre email!"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>Envoyer</button>
          </div>
        </div>
        {url.urlImg ? <img src={url.urlImg} alt="image de campagne" /> : null}
      </div>
    </div>
  );
};

export default PagePreviewTitle;
