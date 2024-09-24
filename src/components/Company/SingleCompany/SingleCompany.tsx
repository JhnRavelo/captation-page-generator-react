/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import { Card } from "../../Card/Card";
import useActive from "../../../hooks/useActive";
import useGetImagePrivate from "../../../hooks/useGetImagePrivate";
import { axiosDefault } from "../../../api/axios";
import useEntreprise from "../../../hooks/useEntreprise";

const SingleCompany = ({ company, index }: { company: Card, index: number }) => {
  const listCompanyRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState("");
  const active = useActive();
  const companyContext = useMediaEntreprise();
  const entrepriseContext = useEntreprise();
  const getImage = useGetImagePrivate();

  useEffect(() => {
    (async () => {
      if (company.idData) {
        try {
          const urlImg = await getImage(
            axiosDefault,
            company.idData,
            "/entreprise/img/"
          );
          setUrl(urlImg);
          if (index == 0) {
            entrepriseContext?.setUrlImg(urlImg);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [company.idData, entrepriseContext?.entreprises]);

  return (
    <>
      {url ? (
        <div
          className={
            companyContext?.entreprise?.company == company.company
              ? "company-content active"
              : "company-content"
          }
          onClick={(e) => {
            active(e, listCompanyRef);
            companyContext?.setEntreprise(company);
          }}
        >
          <img src={url} alt={"logo " + company.company} />
        </div>
      ) : null}
    </>
  );
};

export default SingleCompany;
