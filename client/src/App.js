import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./Pages/Properties";
import Property from "./Pages/Property";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/:property_id" element={<Property />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
