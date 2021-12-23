import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={styles.descriptionBlock}>
          <img
            alt=""
            src={profile.photos.large || userPhoto}
            className={styles.mainPhoto}
          />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
