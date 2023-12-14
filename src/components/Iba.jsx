import { useState } from "react";

const Iba = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Iba Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="USC">USC</option>
        <option value="Utah State">Utah State</option>
        <option value="Oklahoma State">Oklahoma State</option>
        <option value="St. Bonaventure">St. Bonaventure</option>
        <option value="Lipscomb">Lipscomb</option>
        <option value="Murray State">Murray State</option>
        <option value="Cal State Fullerton">Cal State Fullerton</option>
        <option value="Canisius">Canisius</option>
        <option value="Montana State">Montana State</option>
        <option value="North Carolina Central">North Carolina Central</option>
        <option value="Holy Cross">Holy Cross</option>
        <option value="Idaho">Idaho</option>
      </select>
    </div>
  );
};
export default Iba;