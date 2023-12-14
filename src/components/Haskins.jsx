import { useState } from "react";

const Haskins = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Haskins Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Iowa State">Iowa State</option>
        <option value="Providence">Providence</option>
        <option value="Butler">Butler</option>
        <option value="Minnesota">Minnesota</option>
        <option value="UTEP">UTEP</option>
        <option value="Iona">Iona</option>
        <option value="Longwood">Longwood</option>
        <option value="FIU">FIU</option>
        <option value="Texas Southern">Texas Southern</option>
        <option value="UTSA">UTSA</option>
        <option value="Campbell">Campbell</option>
        <option value="Bethune Cookman">Bethune Cookman</option>
      </select>
    </div>
  );
};
export default Haskins;