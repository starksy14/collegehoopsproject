import { useState } from "react";

const Kruger = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Kruger Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Florida">Florida</option>
        <option value="Texas Tech">Texas Tech</option>
        <option value="SMU">SMU</option>
        <option value="Charlotte">Charlotte</option>
        <option value="Winthrop">Winthrop</option>
        <option value="Illinois Chicago">Illinois Chicago</option>
        <option value="Youngstown State">Youngstown State</option>
        <option value="Queens">Queens</option>
        <option value="Mount St. Mary's">Mount St. Mary's</option>
        <option value="North Florida">North Florida</option>
        <option value="Lafayette">Lafayette</option>
        <option value="North Carolina A&T">North Carolina A&T</option>
      </select>
    </div>
  );
};
export default Kruger;