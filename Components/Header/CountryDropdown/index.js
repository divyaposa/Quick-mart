import React, { useState } from 'react';

const countries = [
  "India", "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Italy", "China", "Japan",
  "Brazil", "South Korea", "Mexico", "Russia", "South Africa"
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      style={{
        padding: '8px 12px',
        backgroundColor: '#f3f4f7',
        borderRadius: '8px',
        border: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <label htmlFor="country-select" style={{ fontSize: '13px', fontWeight: 'bold', color: '#000' }}>
        Your Location:
      </label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
        style={{
          fontSize: '13px',
          fontWeight: 'bold',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'navy',
          outline: 'none',
        }}
      >
        {countries.map((country) => (
          <option key={country} value={country} style={{ color: 'black' }}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
