import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={styles.descriptionBlock}>
          <img alt="" src={profile.photos.large} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
