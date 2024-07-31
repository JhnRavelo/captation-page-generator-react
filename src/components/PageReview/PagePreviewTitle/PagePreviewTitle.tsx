/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./pagePreviewTitle.scss";
import { useParams } from "react-router-dom";
import useFilterCampagne from "../../../hooks/useFilterCampagne";
import { Card } from "../../Card/Card";
import { toast } from "react-toastify";
import { companies, TypeCompaniesObject } from "../../../assets/ts/company";
import { axiosDefault } from "../../../api/axios";

const PagePreviewTitle = () => {
  const [page, setPage] = useState<Card>();
  const [company, setCompany] = useState<TypeCompaniesObject>();
  const { idCampagne, media } = useParams();
  const filter = useFilterCampagne();

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
          } else {
            toast.error(pages.data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idCampagne, media]);

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
          {page?.title}
        </h1>
      </div>
      <div className="slogan-image-container">
        <div className="slogan-container">
          <div className="slogan-content">
            <span>{page?.sloganCampagne}</span>
          </div>
          <div className="input-email">
            <input type="text" placeholder="Veuillez mettre votre email!" />
            <button>Envoyer</button>
          </div>
        </div>
        <img src={page?.imgCampagne} alt="image de campagne" />
      </div>
    </div>
  );
};

export default PagePreviewTitle;
