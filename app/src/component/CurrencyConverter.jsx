import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import "../App.css"

const options = [
  { value: 'AUD', label: 'AUD' },
  { value: 'INR', label: 'INR' },
  { value: 'NPR', label: 'NPR' },
  { value: 'AED', label: 'AED' },
  { value: 'CAD', label: 'CAD' },
  { value: 'USD', label: 'USD' },
  { value: 'JPY', label: 'JPY' },
  { value: 'EUR', label: 'EUR' },
  
];

const MyComponent = ()=>  {
  const [currency, setCurrency] = useState('');
  const [conversionRate, setConversionRate] = useState(null);

  const fetchConversionRates = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/986b0961eac89b500c5a35c4/latest/${currency}`);
      console.log(response.data.conversion_rates);
      const conversionRate = response.data.conversion_rates;
      setConversionRate(conversionRate);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = (e) => {
    if (e.key === 'Enter') {
      fetchConversionRates();
    }
  };

  const handleChange = (selectedOption) => {
    setCurrency(selectedOption.value);
  };

  return (
    <div className='d-flex justify-content-center my-5'>
      <div className="card" style={{ width: "28rem", height: "28rem" }}>
        <div className="card-header">
          Currency Converter
        </div>
        <div className="card-body" >
          <h5 className="card-title">Select The Currency</h5>
          <Select className='select'
            defaultValue={options.find(option=>option.value===currency)}
            onChange={handleChange}
            options={options}
            onKeyDown={handleButtonClick}
          ></Select>
          <a href="#" className="btn btn-warning my-2" onClick={fetchConversionRates}>Submit</a>
          {conversionRate && (
            <div>
              <h3>Currency Rates</h3>
              <ul>
                <li>AUD: {conversionRate['AUD']}</li>
                <li>INR: {conversionRate['INR']}</li>
                <li>NPR: {conversionRate['NPR']}</li>
                <li>AED: {conversionRate['AED']}</li>
                <li>CAD: {conversionRate['CAD']}</li>
                <li>USD: {conversionRate['USD']}</li>
                <li>JPY: {conversionRate['JPY']}</li>
                <li>EUR: {conversionRate['EUR']}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyComponent