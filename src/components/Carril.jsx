import { useState } from "react";

const Carril = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Carril Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Princeton">Princeton</option>
        <option value="Yale">Yale</option>
        <option value="Arizona State">Arizona State</option>
        <option value="Sam Houston State">Sam Houston State</option>
        <option value="UT Arlington">UT Arlington</option>
        <option value="Northern Kentucky">Northern Kentucky</option>
        <option value="Howard">Howard</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="Fairfield">Fairfield</option>
        <option value="Grambling State">Grambling State</option>
        <option value="NJIT">NJIT</option>
      </select>
    </div>
  );
};
export default Carril;