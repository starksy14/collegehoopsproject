import { useState } from "react";

const Henson = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Henson Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Illinois">Illinois</option>
        <option value="Northwestern">Northwestern</option>
        <option value="Richmond">Richmond</option>
        <option value="McNeese State">McNeese State</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Notre Dame">Notre Dame</option>
        <option value="Illinois State">Illinois State</option>
        <option value="St. Thomas">St. Thomas</option>
        <option value="Milwaukee">Milwaukee</option>
        <option value="Western Michigan">Western Michigan</option>
        <option value="Central Connecticut">Central Connecticut</option>
        <option value="Saint Francis">Saint Francis</option>
      </select>
    </div>
  );
};
export default Henson;