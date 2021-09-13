import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div>
          <img src="https://images.beinsports.com/s18SJoVWRvdHQxfclOvmKa6XyIM=/670x424/smart/giannis-antetokounmpo-of-the-bucks_xbtmhwpio34k1eo3owq8ancwt.jpg" />
        </div>
        <div className={styles.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <div>Full Name: {props.profile.fullName}</div>
          <div>Job Status: {props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
