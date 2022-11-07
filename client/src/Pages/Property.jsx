import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Utils/Loading/Loading";
import LargeCard from "../components/Utils/LargeCard/LargeCard";

const Property = () => {
  const { property_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState();

  useEffect(() => {
    axios.get(`/properties/${property_id}`).then((res) => {
      setProperty(res.data.property[0]);
      setLoading(false);
    });
  }, [property_id]);

  console.log(property);
  return loading ? (
    <Loading />
  ) : (
    property.room_details.map((room, index) => {
      return (
        <LargeCard
          key={index}
          room={room}
          contracts={property.contracts[0]}
          index={index}
        />
      );
    })
  );
};

export default Property;
