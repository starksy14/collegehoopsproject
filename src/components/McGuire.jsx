import { useState } from "react";

const McGuire = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>McGuire Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Marquette">Marquette</option>
        <option value="Cincinnati">Cincinnati</option>
        <option value="UCF">UCF</option>
        <option value="Missouri State">Missouri State</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Radford">Radford</option>
        <option value="Oral Roberts">Oral Roberts</option>
        <option value="High Point">High Point</option>
        <option value="Northern Arizona">Northern Arizona</option>
        <option value="Quinnipiac">Quinnipiac</option>
        <option value="Eastern Michigan">Eastern Michigan</option>
        <option value="Chicago State">Chicago State</option>
      </select>
    </div>
  );
};
export default McGuire;