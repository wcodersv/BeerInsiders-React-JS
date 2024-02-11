// Form.jsx
// Form содержит корпус переключателя с 3 другими компонентами. 
import React, { useState } from 'react'
import FormAboutCompany from './FormAboutCompany'
import FormPersonalDetails from './FormPersonalDetails'
import { FormSuccess } from './FormSuccess/FormSuccess';

export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValues, setSelectedValues] = useState({
    formatCompany: [],
    beer: [],
    cider: [],
    strongAlcohol: [],
  });



  const handleSelectChange = (category, selectedOptions) => {
    const formData = JSON.parse(window.sessionStorage.getItem('formData')) || {};

    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [category]: selectedOptions,
    }));

    const updatedFormData = {
      ...formData,
      [category]: selectedOptions,
    };

    window.sessionStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const handleInput = (name, value) => {
    const formData = JSON.parse(window.sessionStorage.getItem('formData')) || {};

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    window.sessionStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = JSON.parse(window.sessionStorage.getItem('formData'));
    console.log('Отправка данных на сервер:', formData);

    setCurrentStep(currentStep + 1);
  };


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <FormAboutCompany
          onNextStep={handleNextStep}
          handleInput={handleInput}
          selectedValues={selectedValues}
          handleSelectChange={handleSelectChange}
        />;
      case 2:
        return <FormPersonalDetails
          onBackStep={handleBackStep}
          handleInput={handleInput}
        />;
      case 3:
        return <FormSuccess />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} action="" method="get">
      {renderFormStep()}
    </form>
  )
}
