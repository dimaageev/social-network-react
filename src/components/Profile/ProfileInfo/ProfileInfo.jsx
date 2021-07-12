import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.beinsports.com/s18SJoVWRvdHQxfclOvmKa6XyIM=/670x424/smart/giannis-antetokounmpo-of-the-bucks_xbtmhwpio34k1eo3owq8ancwt.jpg" />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
