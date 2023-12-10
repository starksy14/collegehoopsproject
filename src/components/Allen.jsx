import { useState } from "react";

const Allen = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Allen Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Kansas">Kansas</option>
        <option value="Oregon">Oregon</option>
        <option value="James Madison">James Madison</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Furman">Furman</option>
        <option value="Georgia Tech">Georgia Tech</option>
        <option value="California">California</option>
        <option value="Southern Miss">Southern Miss</option>
        <option value="SIU Edwardsville">SIU Edwardsville</option>
        <option value="Alcorn State">Alcorn State</option>
        <option value="Niagara">Niagara</option>
        <option value="Siena">Siena</option>
      </select>
    </div>
  );
};
export default Allen;