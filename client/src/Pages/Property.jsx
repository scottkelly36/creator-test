import { useEffect, useState } from "react";
import axios from "axios";

const Property = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("/properties").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Property</div>;
};

export default Property;
