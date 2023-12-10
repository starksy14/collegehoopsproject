import { useState } from "react";

const Vitale = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Vitale Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="BYU">BYU</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Washington State">Washington State</option>
        <option value="Cornell">Cornell</option>
        <option value="Western Carolina">Western Carolina</option>
        <option value="Oakland">Oakland</option>
        <option value="Pepperdine">Pepperdine</option>
        <option value="Utah Tech">Utah Tech</option>
        <option value="East Tennessee State">East Tennessee State</option>
        <option value="Stony Brook">Stony Brook</option>
        <option value="Detroit Mercy">Detroit Mercy</option>
        <option value="Green Bay">Green Bay</option>
      </select>
    </div>
  );
};
export default Vitale;