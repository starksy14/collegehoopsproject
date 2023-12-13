import { useState } from "react";

const Chaney = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Chaney Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Auburn">Auburn</option>
        <option value="Liberty">Liberty</option>
        <option value="Bradley">Bradley</option>
        <option value="Weber State">Weber State</option>
        <option value="Loyola Chicago">Loyola Chicago</option>
        <option value="Temple">Temple</option>
        <option value="Morehead State">Morehead State</option>
        <option value="Kennesaw State">Kennesaw State</option>
        <option value="Wofford">Wofford</option>
        <option value="Texas A&M Commerce">Texas A&M Commerce</option>
        <option value="Cal State Northridge">Cal State Northridge</option>
        <option value="Eastern Illinois">Eastern Illinois</option>
      </select>
    </div>
  );
};
export default Chaney;