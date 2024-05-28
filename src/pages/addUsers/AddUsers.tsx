import React, { useCallback, useEffect, useState } from "react";
import './AddUsers.css';
import { postUsers } from "../../services/users";
import { getCountries } from "../../services/getCountries";

interface AddUsersProps {
  totalUsers: number;
}

const AddUsers: React.FC<AddUsersProps> = ({ totalUsers }) => {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("default");
  const [userCount, setUserCount] = useState(0);
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = await getCountries();
      setCountries(countryList);
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCountry(event.target.value);
  };

  const handleUserCountChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserCount(Number(event.target.value));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if ((!selectedCountry?.trim() && selectedCountry !== "default") || !userCount) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const userData = [selectedCountry, userCount]
    postUsers(userData);

    setSelectedCountry("");
    setUserCount(0)
  };

  return (
    <div className="add-user-page-wrapper">
      <div className="total">Total Users: {totalUsers}</div>
      <div className="page-header">ADD USERS</div>
      <div className="form-wrapper">
        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country" value={selectedCountry}
              onChange={handleCountryChange}>
              <option value="default">Select a country</option>
              {countries?.map((country: any, index: number) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="userCount">User Count:</label>
            <input type="number" id="userCount" name="userCount" value={userCount}
              onChange={handleUserCountChange} />
          </div>

          {showError && <p className="error-message">Please fill in all fields.</p>}
          <button className="primary-btn" type="submit">Add User Count</button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(AddUsers);