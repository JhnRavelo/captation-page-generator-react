/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./pagePreviewTitle.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFilterCampagne from "../../../hooks/useFilterCampagne";
import { Card } from "../../Card/Card";
import { companies, TypeCompaniesObject } from "../../../assets/ts/company";
import { axiosDefault } from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

const PagePreviewTitle = () => {
  const [page, setPage] = useState<Card>();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState<TypeCompaniesObject>();
  const { idCampagne, media } = useParams();
  const authContext = useAuth();
  const filter = useFilterCampagne();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (idCampagne && media) {
          const pages = await axiosDefault.get("/page");

          if (pages.data.success) {
            const filterPage = filter(pages.data.datas, idCampagne);
            if (filterPage) {
              const filterCompany = companies.find(
                (company) => company.company === filterPage?.entreprise
              );
              setPage(filterPage);
              setCompany(filterCompany);
            }
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
      style={{ backgroundColor: page?.titleBackgroundColor }}
    >
      <div className="title-container">
        <img src={company?.img} alt="logo" />
        <h1
          style={{ color: page?.titleColor, fontFamily: '"Lato", sans-serif' }}
        >
          {page?.sloganCampagne}
        </h1>
      </div>
      <div className="slogan-image-container">
        <div className="slogan-container">
          <div className="slogan-content">
            <span style={{ color: page?.titleColor }}>{page?.description}</span>
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
        <img src={page?.imgCampagne} alt="image de campagne" />
      </div>
    </div>
  );
};

export default PagePreviewTitle;
