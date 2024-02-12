// Form.jsx
// Form содержит корпус переключателя с 3 другими компонентами. 
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import FormAboutCompany from './FormAboutCompany'
import FormPersonalDetails from './FormPersonalDetails';
import { FormSuccess } from './FormSuccess/FormSuccess';


export const Form = () => {
  const { handleSubmit, control, register, formState, reset } = useForm();
  const { isSubmitSuccessful, errors } = formState;

  const [currentStep, setCurrentStep] = useState(1);

  const handleFormSubmit = (data) => {
    console.log('Отправка данных на сервер:', data);
    setCurrentStep(currentStep + 1);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onError = (errors) => {
    console.log('Form errors', errors)
  }

  // const { watch } = useForm();
  // const formData = watch();
  // console.log('Form Data with react-hook-form:', formData);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <FormAboutCompany
          onNextStep={handleNextStep}
          register={register}
          control={control}
        />;
      case 2:
        return <FormPersonalDetails
          onBackStep={handleBackStep}
          control={control}
          register={register}
          errors={errors}
        />;
      case 3:
        return <FormSuccess />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit, onError)} action="" method="get">
      {renderFormStep()}
    </form>
  )
}
