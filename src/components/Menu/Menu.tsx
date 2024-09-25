/* eslint-disable react-hooks/exhaustive-deps */
import "./menu.scss";
import { Link } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLog from "../../hooks/useLog";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import InfoAccount from "../InfoAccount/InfoAccount";
import { menus } from "../../assets/ts/menu";
import useEntreprise from "../../hooks/useEntreprise";
import { axiosDefault } from "../../api/axios";
import useGetImagePrivate from "../../hooks/useGetImagePrivate";

const Menu = () => {
  const active = useActive();
  const menuRef = useRef<HTMLDivElement>(null);
  const authContext = useAuth();
  const logContext = useLog();
  const [length, setLength] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const entrepriseContext = useEntreprise();
  const getImage = useGetImagePrivate();
  const [url, setUrl] = useState("");

  const handleNotification = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    active(e, menuRef);
    setLength(0);
    const res = await axiosPrivate.get("/log/unread");

    if (!res.data.success) {
      toast.error(res.data.message);
    }
  };

  useEffect(() => {
    if (logContext?.notifs.length) {
      setLength(logContext.notifs.length);
    }
  }, [logContext?.notifs.length]);

  useEffect(() => {
    (async () => {
      if (entrepriseContext?.entreprises[0].idData) {
        try {
          const urlImg = await getImage(
            axiosDefault,
            entrepriseContext?.entreprises[0].idData,
            "/entreprise/img/"
          );
          setUrl(urlImg);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [entrepriseContext?.entreprises]);

  return (
    <menu className="menu-content content">
      {url ? (
        <>
          <img src={url} alt="logo Company" className="logo" />
          <div className="separator"></div>
        </>
      ) : null}
      <div className="navigator">
        <div className="item" ref={menuRef}>
          {menus.map((menu, index) => (
            <Link
              to={menu.url}
              onClick={(e) => {
                active(e, menuRef);
                if (menu.title == "Notifications") {
                  handleNotification(e);
                }
              }}
              key={index}
              className={
                menu.title == "Notifications" && length && length > 0
                  ? "shake"
                  : ""
              }
            >
              {menu.SVG}
              <span>{menu.title}</span>
              {menu.title == "Notifications" && length && length > 0 ? (
                <div className="notif">
                  <span className="span-notif">{length}</span>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
        <InfoAccount
          name={authContext?.auth?.name ? authContext.auth.name : "Anonymous"}
        />
      </div>
    </menu>
  );
};

export default Menu;
