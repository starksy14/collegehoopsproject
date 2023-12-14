import { useState } from "react";

const Wright = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Wright Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Villanova">Villanova</option>
        <option value="Iowa">Iowa</option>
        <option value="Indiana">Indiana</option>
        <option value="Saint Joseph's">Saint Joseph's</option>
        <option value="Vanderbilt">Vanderbilt</option>
        <option value="Oregon State">Oregon State</option>
        <option value="Fordham">Fordham</option>
        <option value="Jacksonville State">Jacksonville State</option>
        <option value="UMBC">UMBC</option>
        <option value="Merrimack">Merrimack</option>
        <option value="Bucknell">Bucknell</option>
        <option value="South Carolina State">South Carolina State</option>
      </select>
    </div>
  );
};
export default Wright;