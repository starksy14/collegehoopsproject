import { useState } from "react";

const Izzo = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Izzo Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Michigan State">Michigan State</option>
        <option value="New Mexico">New Mexico</option>
        <option value="Penn State">Penn State</option>
        <option value="Toledo">Toledo</option>
        <option value="Samford">Samford</option>
        <option value="Marshall">Marshall</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="Southern Utah">Southern Utah</option>
        <option value="Lehigh">Lehigh</option>
        <option value="USC Upstate">USC Upstate</option>
        <option value="Georgia Southern">Georgia Southern</option>
        <option value="Arkansas Pine Bluff">Arkansas Pine Bluff</option>
      </select>
    </div>
  );
};
export default Izzo;