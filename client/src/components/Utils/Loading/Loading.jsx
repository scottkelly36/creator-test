import React from "react";
import { FaLaptopHouse } from "react-icons/fa";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <FaLaptopHouse className="loading-img" />
    </div>
  );
};

export default Loading;
