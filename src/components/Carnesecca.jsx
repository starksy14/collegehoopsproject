import { useState } from "react";

const Carnesecca = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Carnesecca Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Baylor">Baylor</option>
        <option value="Virginia">Virginia</option>
        <option value="St. John's">St. John's</option>
        <option value="UNC Greensboro">UNC Greensboro</option>
        <option value="Wright State">Wright State</option>
        <option value="Colgate">Colgate</option>
        <option value="Towson">Towson</option>
        <option value="Texas State">Texas State</option>
        <option value="Idaho State">Idaho State</option>
        <option value="Jackson State">Jackson State</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Northwestern State">Northwestern State</option>
      </select>
    </div>
  );
};
export default Carnesecca;