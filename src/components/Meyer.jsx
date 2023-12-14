import { useState } from "react";

const Meyer = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Meyer Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Mississippi State">Mississippi State</option>
        <option value="Florida Atlantic">Florida Atlantic</option>
        <option value="Wake Forest">Wake Forest</option>
        <option value="Vermont">Vermont</option>
        <option value="South Dakota State">South Dakota State</option>
        <option value="DePaul">DePaul</option>
        <option value="Purdue Fort Wayne">Purdue Fort Wayne</option>
        <option value="Pacific">Pacific</option>
        <option value="Columbia">Columbia</option>
        <option value="New Orleans">New Orleans</option>
        <option value="Tennessee Tech">Tennessee Tech</option>
        <option value="Morgan State">Morgan State</option>
      </select>
    </div>
  );
};
export default Meyer;