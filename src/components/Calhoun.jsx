import { useState } from "react";

const Calhoun = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Calhoun Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Xavier">Xavier</option>
        <option value="Rutgers">Rutgers</option>
        <option value="UAB">UAB</option>
        <option value="Loyola Marymount">Loyola Marymount</option>
        <option value="Saint Louis">Saint Louis</option>
        <option value="Belmont">Belmont</option>
        <option value="UNC Asheville">UNC Asheville</option>
        <option value="Austin Peay">Austin Peay</option>
        <option value="Tennessee Martin">Tennessee Martin</option>
        <option value="Albany">Albany</option>
        <option value="Florida A&M">Florida A&M</option>
      </select>
    </div>
  );
};
export default Calhoun;