import "./menu.scss";
import logo from "../../assets/png/Logo_aluhd.png";
import { Link } from "react-router-dom";
import imgAvatar from "../../assets/png/reglages.png";
import useActive from "../../hooks/useActive";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLog from "../../hooks/useLog";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";
import InfoAccount from "../InfoAccount/InfoAccount";
import { menus } from "../../assets/ts/menu";

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
          img={authContext?.auth?.avatar ? authContext.auth.avatar : imgAvatar}
          name={authContext?.auth?.name ? authContext.auth.name : "Anonymous"}
        />
      </div>
    </menu>
  );
};

export default Menu;
