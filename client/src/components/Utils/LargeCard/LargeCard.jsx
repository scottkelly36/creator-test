import React from "react";
import "./LargeCard.scss";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub, MdOutlineChair } from "react-icons/md";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const LargeCard = ({ room, contracts, index }) => {
  console.log(room);

  return (
    <div className="large-card">
      <h2 className="large-card-title">Room {index + 1}</h2>
      <p className="text-light">
        Available from {Date(contracts.start_date).slice(4, 15)}
      </p>
      <div className="property-icons">
        <div className="icon-container">
          <IoBedOutline className="icon" /> 1 Bedroom
        </div>
        <div className="icon-container">
          <MdOutlineBathtub className="icon" /> 1 Bathroom
        </div>
        <div className="icon-container">
          <MdOutlineChair className="icon" /> 1 Living Space
        </div>
      </div>
      <div className="property-price">
        <p className="text-heavy">£500 PCM</p>
        <p className="text-normal">Excluding Bills</p>
      </div>
      <Link to={contracts.book_now_url}>
        <Button text={"Book Now"} />
      </Link>
    </div>
  );
};

export default LargeCard;
