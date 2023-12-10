import { useState } from "react";

const Mears = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Mears Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Kansas State">Kansas State</option>
        <option value="Stanford">Stanford</option>
        <option value="Wichita State">Wichita State</option>
        <option value="Northern Iowa">Northern Iowa</option>
        <option value="UC Santa Barbara">UC Santa Barbara</option>
        <option value="Montana">Montana</option>
        <option value="North Alabama">North Alabama</option>
        <option value="Rider">Rider</option>
        <option value="Sacramento State">Sacramento State</option>
        <option value="Fairleigh Dickinson">Fairleigh Dickinson</option>
        <option value="Southeast Missouri State">Southeast Missouri State</option>
      </select>
    </div>
  );
};
export default Mears;