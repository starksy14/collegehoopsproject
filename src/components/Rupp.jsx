import { useState } from "react";

const Rupp = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Rupp Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Pittsburgh">Pittsburgh</option>
        <option value="Boise State">Boise State</option>
        <option value="UMass Lowell">UMass Lowell</option>
        <option value="Delaware">Delaware</option>
        <option value="Arkansas State">Arkansas State</option>
        <option value="Eastern Washington">Eastern Washington</option>
        <option value="Tennessee State">Tennessee State</option>
        <option value="Robert Morris">Robert Morris</option>
        <option value="Louisiana Monroe">Louisiana Monroe</option>
        <option value="Navy">Navy</option>
        <option value="Maryland Eastern Shore">Maryland Eastern Shore</option>
      </select>
    </div>
  );
};
export default Rupp;