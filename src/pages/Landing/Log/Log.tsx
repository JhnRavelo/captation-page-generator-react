import { Fragment } from "react";
import Subscribe from "../../../components/Log/Subscribe";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import useFilterDatas from "../../../hooks/useFilterDatas";
import useLog from "../../../hooks/useLog";
import "./log.scss";

const Log = () => {
  const logContext = useLog();
  const logs = useFilterDatas(logContext?.logs);

  return (
    <MediaCompanyContainer>
      <div className="cards-container campagne-log" style={{ height: "450px" }}>
        {logs && logs.length > 0
          ? logs.map((log, index) => (
              <Fragment key={index}>
                <Subscribe card={log} />
              </Fragment>
            ))
          : null}
      </div>
    </MediaCompanyContainer>
  );
};

export default Log;
