import { Fragment } from "react/jsx-runtime";
import "../Log/log.scss";
import Subscribe from "../../../components/Log/Subscribe";
import useLog from "../../../hooks/useLog";

const Notif = () => {
  const logContext = useLog();

  return (
    <div className="cards-container campagne-log">
      {logContext?.notifs && logContext?.notifs.length > 0
        ? logContext?.notifs.map((log, index) => (
            <Fragment key={index}>
              <Subscribe card={log} />
            </Fragment>
          ))
        : null}
    </div>
  );
};

export default Notif;
