import { useState } from "react";

const Williams = () => {
  const [country, setCountry] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
   <div>
    <h5>Williams Conference</h5>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Team</option>
        <option value="Memphis">Memphis</option>
        <option value="Maryland">Maryland</option>
        <option value="Missouri">Missouri</option>
        <option value="Akron">Akron</option>
        <option value="Western Kentucky">Western Kentucky</option>
        <option value="Wyoming">Wyoming</option>
        <option value="Tulsa">Tulsa</option>
        <option value="Maine">Maine</option>
        <option value="Little Rock">Little Rock</option>
        <option value="Elon">Elon</option>
        <option value="Valparaiso">Valparaiso</option>
        <option value="Houston Christian">Houston Christian</option>
      </select>
    </div>
  );
};
export default Williams;