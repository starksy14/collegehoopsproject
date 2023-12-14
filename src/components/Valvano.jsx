import { useState } from "react";

const Valvano = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Valvano Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="N.C. State">N.C. State</option>
        <option value="Drake">Drake</option>
        <option value="Hofstra">Hofstra</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Georgetown">Georgetown</option>
        <option value="Old Dominion">Old Dominion</option>
        <option value="Saint Peter's">Saint Peter's</option>
        <option value="Nebraska Omaha">Nebraska Omaha</option>
        <option value="Norfolk State">Norfolk State</option>
        <option value="VMI">VMI</option>
        <option value="Stonehill">Stonehill</option>
      </select>
    </div>
  );
};
export default Valvano;