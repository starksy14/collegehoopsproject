import { useState } from "react";

const Olson = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Olson Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Arizona">Arizona</option>
        <option value="Colorado">Colorado</option>
        <option value="Dayton">Dayton</option>
        <option value="Indiana State">Indiana State</option>
        <option value="George Mason">George Mason</option>
        <option value="George Washington">George Washington</option>
        <option value="Utah Valley">Utah Valley</option>
        <option value="Southeastern Louisiana">Southeastern Louisiana</option>
        <option value="Bowling Green">Bowling Green</option>
        <option value="Coastal Carolina">Coastal Carolina</option>
        <option value="Central Michigan">Central Michigan</option>
        <option value="Army">Army</option>
      </select>
    </div>
  );
};
export default Olson;