import React, { useState } from 'react';
import Select from 'react-select';

const InputSelectComponent = () => {
  const [firstInputValue, setFirstInputValue] = useState(null);
  const [secondInputValue, setSecondInputValue] = useState(null);
  const options = [
    { value: 'AUD', label: 'AUD' },
    { value: 'INR', label: 'INR' },
    { value: 'NPR', label: 'NPR' },
    { value: 'AED', label: 'AED' },
    { value: 'CAD', label: 'CAD' },
  ];

  const handleFirstInputChange = (selectedOption) => {
    setFirstInputValue(selectedOption);
  };

  const handleSecondInputChange = (selectedOption) => {
    setSecondInputValue(selectedOption);
  };

  const compareInputs = () => {
    // Your comparison logic goes here
    // For example, if the options have a 'value' property, you can compare:
    if (firstInputValue && secondInputValue) {
      if (firstInputValue.value === secondInputValue.value) {
        return 'Both inputs are the same!';
      } else {
        return 'Inputs are different!';
      }
    }
    return 'Select both inputs to compare.';
  };

  return (
    <div>
      <h2>Select inputs to compare:</h2>
      <Select
        options={[ /* options for the first input */ ]}
        value={firstInputValue}
        onChange={handleFirstInputChange}
      />
      <Select
        options={[ /* options for the second input */ ]}
        value={secondInputValue}
        onChange={handleSecondInputChange}
      />
      <ResultComponent result={compareInputs()} />
    </div>
  );
};

const ResultComponent = ({ result }) => {
  return (
    <div>
      <h3>Comparison Result:</h3>
      <p>{result}</p>
    </div>
  );
};

export default InputSelectComponent;
