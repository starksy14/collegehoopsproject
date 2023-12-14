import { useState } from "react";

const Smith = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Smith Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="North Carolina">North Carolina</option>
        <option value="Utah">Utah</option>
        <option value="Grand Canyon">Grand Canyon</option>
        <option value="Davidson">Davidson</option>
        <option value="Long Beach State">Long Beach State</option>
        <option value="Chattanooga">Chattanooga</option>
        <option value="Portland">Portland</option>
        <option value="Bellarmine">Bellarmine</option>
        <option value="Binghamton">Binghamton</option>
        <option value="Presbyterian">Presbyterian</option>
        <option value="Loyola (Maryland)">Loyola (Maryland)</option>
        <option value="Alabama A&M">Alabama A&M</option>
      </select>
    </div>
  );
};
export default Smith;