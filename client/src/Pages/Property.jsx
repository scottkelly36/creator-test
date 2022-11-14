import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Loading from "../components/Utils/Loading/Loading";
import LargeCard from "../components/Utils/LargeCard/LargeCard";
import Form from "../components/Utils/Forms/Form";

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

  return loading ? 
  <Loading/> :

  <Form property={property}/>
  
};

export default Property;
