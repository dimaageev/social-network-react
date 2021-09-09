import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
  return (
    <div>
      <img
        src={preloader}
        alt=""
        style={{
          width: "250px",
        }}
      />
    </div>
  );
};

export default Preloader;
