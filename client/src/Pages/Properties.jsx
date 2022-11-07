import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Utils/Slider/Slider";
import Card from "../components/Utils/Card/Card";
import Loading from "../components/Utils/Loading/Loading";

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
    <Loading />
  ) : (
    properties.map((property) => {
      return (
        <article className="property">
          <Slider images={property.media.photos} />
          <Card property={property} />
        </article>
      );
    })
  );
};

export default Properties;
