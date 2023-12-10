import { useState } from "react";

const Krzyzewski = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Krzyzewski Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Duke">Duke</option>
        <option value="Michigan">Michigan</option>
        <option value="Florida State">Florida State</option>
        <option value="Kent State">Kent State</option>
        <option value="Harvard">Harvard</option>
        <option value="Gardner Webb">Gardner Webb</option>
        <option value="Stetson">Stetson</option>
        <option value="Rice">Rice</option>
        <option value="Mercer">Mercer</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Hampton">Hampton</option>
        <option value="Cal Poly">Cal Poly</option>
      </select>
    </div>
  );
};
export default Krzyzewski;