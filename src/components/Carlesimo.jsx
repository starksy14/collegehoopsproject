import { useState } from "react";

const Carlesimo = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Carlesimo Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Colorado State">Colorado State</option>
        <option value="Seton Hall">Seton Hall</option>
        <option value="Georgia">Georgia</option>
        <option value="Ohio">Ohio</option>
        <option value="UC Davis">UC Davis</option>
        <option value="Cleveland State">Cleveland State</option>
        <option value="UC San Diego">UC San Diego</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Jacksonville">Jacksonville</option>
        <option value="UMKC">UMKC</option>
        <option value="Incarnate Word">Incarnate Word</option>
        <option value="LIU">LIU</option>
      </select>
    </div>
  );
};
export default Carlesimo;