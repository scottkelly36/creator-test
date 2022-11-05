import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Utils/Slider/Slider";
import Card from "../components/Utils/Card/Card";

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/properties").then((res) => {
      setProperties(res.data.properties);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    properties.forEach((property) => {
      return (
        <article className="property-container">
          <Slider images={property.media} />
          <Card />
        </article>
      );
    })
  );
};

export default Properties;
