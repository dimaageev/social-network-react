import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://netswire.usatoday.com/wp-content/uploads/sites/9/2021/04/USATSI_15953834.jpg?w=1000&h=600&crop=1" />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
