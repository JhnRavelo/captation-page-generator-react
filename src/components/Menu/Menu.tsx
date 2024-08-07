import "./menu.scss";
import logo from "../../assets/png/Logo_aluhd.png";
import { Link } from "react-router-dom";
import DashboardSVG from "../../assets/svg/DashboardSVG";
import QRcodeSVG from "../../assets/svg/QRcodeSVG";
import BellSVG from "../../assets/svg/BellSVG";
import PageSVG from "../../assets/svg/PageSVG";
import imgAvatar from "../../assets/png/reglages.png";
import NoteBookSVG from "../../assets/svg/NoteBookSVG";
import MarketingSVG from "../../assets/svg/MarketingSVG";
import useActive from "../../hooks/useActive";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLog from "../../hooks/useLog";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import InfoAccount from "../InfoAccount/InfoAccount";

const Menu = () => {
  const active = useActive();
  const menuRef = useRef<HTMLDivElement>(null);
  const authContext = useAuth();
  const logContext = useLog();
  const [length, setLength] = useState(0);
  const axiosPrivate = useAxiosPrivate();

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

  return (
    <menu className="menu-content content">
      <img src={logo} alt="" className="logo" />
      <div className="separator"></div>
      <div className="navigator">
        <div className="item" ref={menuRef}>
          <Link to="/marketing" onClick={(e) => active(e, menuRef)}>
            <DashboardSVG height="30" width="30" />
            <span>Tableau de bord</span>
          </Link>
          <Link to="/marketing/campagne" onClick={(e) => active(e, menuRef)}>
            <MarketingSVG height="25" width="30" />
            <span>Campagne marketing</span>
          </Link>
          <Link to="/marketing/qr-code" onClick={(e) => active(e, menuRef)}>
            <QRcodeSVG height="20" width="30" />
            <span>Générer un QRCode</span>
          </Link>
          <Link
            to="/marketing/page-campagne"
            onClick={(e) => active(e, menuRef)}
          >
            <PageSVG height="24" width="30" />
            <span>Page de captation</span>
          </Link>
          <Link to="/marketing/log" onClick={(e) => active(e, menuRef)}>
            <NoteBookSVG width="30" height="23" />
            <span>Journals des événements</span>
          </Link>
          <Link to="/marketing/notif" onClick={(e) => handleNotification(e)}>
            <BellSVG
              height="24"
              width="30"
              className={length && length > 0 ? "shake" : ""}
            />
            <span>Notifications</span>
            {length && length > 0 ? (
              <div className="notif">
                <span className="span-notif">{length}</span>
              </div>
            ) : null}
          </Link>
        </div>
        <InfoAccount
          img={authContext?.auth?.avatar ? authContext.auth.avatar : imgAvatar}
          name={authContext?.auth?.name ? authContext.auth.name : "Cedric R."}
        />
      </div>
    </menu>
  );
};

export default Menu;
