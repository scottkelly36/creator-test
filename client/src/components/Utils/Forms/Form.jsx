import {useState} from 'react';
import axios from 'axios';

import './Form.scss';


const Form = ({property}) => {



  const [newUrl, setNewUrl] = useState("");
  const [error, setError] = useState("");

  const updateUrl=(event)=>{
    event.preventDefault();
    
    const urlRegex = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;

    if(!urlRegex.test(newUrl)){
      setError("Invalid URL");
    } else { 
      setError("");
      axios.patch(`/properties/${property.property_id}`, {book_now_url : newUrl}).then((res)=>{
        return res.data;
      })
    }
  }

  return (
    <form onSubmit={updateUrl} className="form">
        <p className="error-message">{error}</p>
        <label htmlFor="UpdateUrl">Update Property URL</label>
        <input type="text" name="" id="" onChange={(e)=>{
          setNewUrl(e.target.value)
        }} placeholder={property.contracts[0].book_now_url}/>
        <button type="submit" className='btn btn-primary'>Update URL</button>
    </form>
  )
}

export default Form