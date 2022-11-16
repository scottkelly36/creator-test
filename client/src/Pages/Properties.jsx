import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../components/Utils/Slider/Slider";
import Card from "../components/Utils/Card/Card";
import Loading from "../components/Utils/Loading/Loading";
import Error from "../components/Utils/Error/Error";

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("/properties")
      .then((res) => {
        setProperties(res.data.properties);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error error={error} />
  ) : (
    properties.map((property, index) => {
      return (
        <article className="property" key={index}>
          <Slider images={property.media.photos} />
          <Card property={property} />
        </article>
      );
    })
  );
};

export default Properties;
