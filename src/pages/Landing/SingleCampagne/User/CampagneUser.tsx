import { useParams } from "react-router-dom";
import UserSVG from "../../../../assets/svg/UserSVG";
import useFilterDatas from "../../../../hooks/useFilterDatas";
import useLog from "../../../../hooks/useLog";
import "./campagneUser.scss";

const CampagneUser = () => {
  const { id } = useParams();
  const logContext = useLog();
  const userMails = useFilterDatas(logContext?.userMails, id);
  return (
    <div className="cards-container campagne-user">
      {userMails && userMails?.length > 0
        ? userMails.map((user) => (
            <div className="cards-content campagne-user">
              <UserSVG height="20" width="20" />
              <span>{user.mail}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default CampagneUser;
