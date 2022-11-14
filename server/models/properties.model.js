const axios = require("axios");


exports.selectProperties = () => {
  return axios.get("https://crtr.dev/api.json").then((result) => {
    return result.data.properties;
  });
};

exports.selectProperty = (id) => {
  return axios.get("https://crtr.dev/api.json").then((result) => {
    return result.data.properties.filter(
      (property) => property.property_id === id
    );
  });
};

exports.patchProperty = (id, book_now_url) =>{
  return axios.get("https://crtr.dev/api.json").then((result) => {
    return result.data.properties.filter(
      (property) => property.property_id === id)
   
  }) .then((property)=>{
    
       property[0].contracts[0].book_now_url = book_now_url;
       return property;
    })
}