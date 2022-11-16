import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Utils/Error/Error";

import axios from "axios";
import Loading from "../components/Utils/Loading/Loading";
import Form from "../components/Utils/Forms/Form";

const Property = () => {
  const { property_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`/properties/${property_id}`)
      .then((res) => {
        setProperty(res.data.property[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [property_id]);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error error={error} />
  ) : (
    <Form property={property} />
  );
};

export default Property;
