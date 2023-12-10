import { useState } from "react";

const Sutton = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Sutton Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Creighton">Creighton</option>
        <option value="Clemson">Clemson</option>
        <option value="North Texas">North Texas</option>
        <option value="Santa Clara">Santa Clara</option>
        <option value="Middle Tennessee">Middle Tennessee</option>
        <option value="UNC Wilmington">UNC Wilmington</option>
        <option value="East Carolina">East Carolina</option>
        <option value="Troy">Troy</option>
        <option value="New Mexico State">New Mexico State</option>
        <option value="American">American</option>
        <option value="Cal State Bakersfield">Cal State Bakersfield</option>
        <option value="Charleston Southern">Charleston Southern</option>
      </select>
    </div>
  );
};
export default Sutton;