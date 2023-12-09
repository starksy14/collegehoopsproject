import { useState } from "react";

const Lewis = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Lewis Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Houston">Houston</option>
        <option value="Texas">Texas</option>
        <option value="South Carolina">South Carolina</option>
        <option value="Stephen F. Austin">Stephen F. Austin</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Abilene Christian">Abilene Christian</option>
        <option value="Northern Illinois">Northern Illinois</option>
        <option value="Bryant">Bryant</option>
        <option value="Ball State">Ball State</option>
        <option value="Nicholls State">Nicholls State</option>
        <option value="Lamar">Lamar</option>
        <option value="Buffalo">Buffalo</option>
      </select>
    </div>
  );
};
export default Lewis;