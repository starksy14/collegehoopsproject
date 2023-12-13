import { useState } from "react";

const Maravich = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Maravich Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Texas A&M">Texas A&M</option>
        <option value="Nevada">Nevada</option>
        <option value="Saint Mary's">Saint Mary's</option>
        <option value="Appalachian State">Appalachian State</option>
        <option value="Drexel">Drexel</option>
        <option value="South Florida">South Florida</option>
        <option value="Air Force">Air Force</option>
        <option value="Sacred Heart">Sacred Heart</option>
        <option value="Monmouth">Monmouth</option>
        <option value="The Citadel">The Citadel</option>
        <option value="Dartmouth">Dartmouth</option>
        <option value="IUPUI">IUPUI</option>
      </select>
    </div>
  );
};
export default Maravich;