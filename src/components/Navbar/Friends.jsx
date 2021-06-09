import React from "react";
import s from "./Navbar.module.css";

const Friends = (props) => {
  return (
    <div>
      <img src={props.src} />
      <div className={s.friendsName}>{props.name}</div>
    </div>
  );
};

export default Friends;
