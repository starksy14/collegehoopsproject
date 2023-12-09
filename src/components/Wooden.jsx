import { useState } from "react";

const Wooden = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Wooden Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Purdue">Purdue</option>
        <option value="UCLA">UCLA</option>
        <option value="Washington">Washington</option>
        <option value="VCU">VCU</option>
        <option value="San Jose State">San Jose State</option>
        <option value="Portland State">Portland State</option>
        <option value="Penn">Penn</option>
        <option value="Northeastern">Northeastern</option>
        <option value="Evansville">Evansville</option>
        <option value="Marist">Marist</option>
        <option value="William & Mary">William & Mary</option>
        <option value="Delaware State">Delaware State</option>
      </select>
    </div>
  );
};
export default Wooden;