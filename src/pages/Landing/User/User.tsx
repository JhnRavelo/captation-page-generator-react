import UserSVG from "../../../assets/svg/UserSVG";
import useLog from "../../../hooks/useLog";

const User = () => {
  const logContext = useLog();
  return (
    <div className="cards-container campagne-user">
      {logContext?.userMails && logContext?.userMails?.length > 0
        ? logContext.userMails.map((user, index) => (
            <div className="cards-content campagne-user" key={index}>
              <UserSVG height="20" width="20" />
              <span>{user.mail}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default User;
