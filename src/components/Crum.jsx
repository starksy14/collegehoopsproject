import { useState } from "react";

const Crum = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Crum Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="TCU">TCU</option>
        <option value="Virginia Tech">Virginia Tech</option>
        <option value="Duquesne">Duquesne</option>
        <option value="Boston College">Boston College</option>
        <option value="Louisville">Louisville</option>
        <option value="South Alabama">South Alabama</option>
        <option value="La Salle">La Salle</option>
        <option value="Brown">Brown</option>
        <option value="Denver">Denver</option>
        <option value="UT Rio Grande Valley">UT Rio Grande Valley</option>
        <option value="Central Arkansas">Central Arkansas</option>
        <option value="Le Moyne">Le Moyne</option>
      </select>
    </div>
  );
};
export default Crum;