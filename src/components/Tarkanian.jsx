import { useState } from "react";

const Tarkanian = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Tarkanian Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Alabama">Alabama</option>
        <option value="Miami">Miami</option>
        <option value="LSU">LSU</option>
        <option value="Louisiana Tech">Louisiana Tech</option>
        <option value="UNLV">UNLV</option>
        <option value="Fresno State">Fresno State</option>
        <option value="Cal Baptist">Cal Baptist</option>
        <option value="Eastern Kentucky">Eastern Kentucky</option>
        <option value="Prairie View A&M">Prairie View A&M</option>
        <option value="Texas A&M Corpus Christi">Texas A&M Corpus Christi</option>
        <option value="Boston University">Boston University</option>
        <option value="Southern Indiana">Southern Indiana</option>
      </select>
    </div>
  );
};
export default Tarkanian;