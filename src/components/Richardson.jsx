import { useState } from "react";

const Richardson = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Richardson Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Gonzaga">Gonzaga</option>
        <option value="Arkansas">Arkansas</option>
        <option value="UC Irvine">UC Irvine</option>
        <option value="Tulane">Tulane</option>
        <option value="Syracuse">Syracuse</option>
        <option value="Charleston">Charleston</option>
        <option value="Georgia State">Georgia State</option>
        <option value="North Dakota State">North Dakota State</option>
        <option value="Miami (Ohio)">Miami (Ohio)</option>
        <option value="Northern Colorado">Northern Colorado</option>
        <option value="Wagner">Wagner</option>
        <option value="Lindenwood">Lindenwood</option>
      </select>
    </div>
  );
};
export default Richardson;