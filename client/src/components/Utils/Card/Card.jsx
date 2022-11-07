import { IoBedOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBathtub, MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./card.scss";

const Card = ({ property }) => {
  let url;
  property.contracts[0]
    ? (url = property.contracts[0].book_now_url)
    : (url = undefined);
  return (
    <article className="property-card">
      <h2 className="property-name">
        {property.address.property_number} {property.address.property_name},{" "}
        {property.address.road_name}{" "}
        <Link to={`/${property.property_id}`}>
          <IoSettingsOutline className="icon" />
        </Link>
      </h2>
      <p className="text-light">Available from</p>
      <div className="property-icons">
        <div className="icon-container">
          <IoBedOutline className="icon" /> {property.room_details.length}{" "}
          Bedrooms
        </div>
        <div className="icon-container">
          <MdOutlineBathtub className="icon" /> {property.bathrooms}{" "}
          {parseInt(property.bathrooms) === 1 ? "Bathroom" : "Bathrooms"}
        </div>
        <div className="icon-container">
          <MdOutlineChair className="icon" /> 1 Living Space
        </div>
      </div>
      <div className="property-price">
        <p className="text-heavy">£500 PCM</p>
        <p className="text-normal">Excluding Bills</p>
      </div>

      <Button text={"Book Now"} action={url} />
    </article>
  );
};

export default Card;
