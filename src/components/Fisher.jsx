import { useState } from "react";

const Fisher = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Fisher Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="San Diego State">San Diego State</option>
        <option value="Ohio State">Ohio State</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Southern Illinois">Southern Illinois</option>
        <option value="Seattle">Seattle</option>
        <option value="Tarleton State">Tarleton State</option>
        <option value="Florida Gulf Coast">Florida Gulf Coast</option>
        <option value="San Diego">San Diego</option>
        <option value="UC Riverside">UC Riverside</option>
        <option value="Southern">Southern</option>
        <option value="Western Illinois">Western Illinois</option>
        <option value="Alabama State">Alabama State</option>
      </select>
    </div>
  );
};
export default Fisher;