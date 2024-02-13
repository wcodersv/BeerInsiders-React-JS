// FormPersonalDetails.jsx
import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import styles from '../Form.module.scss';
import ButtonActionCircle from '../../Button/ButtonActionCircle';
import { ButtonActionSubmit } from '../../Button/ButtonActionSubmit';
import { InputController } from '../../Input/InputController';


export const FormPersonalDetails = ({ onBackStep, control, register, errors }) => {

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form_header_box}>
                    <ButtonActionCircle onClick={onBackStep} />
                    <h3 className={styles.form_header}>Шаг 2</h3>
                </div>

                {/* Имя */}
                <div className={styles.form_row} >
                    <label className={styles.form_title} htmlFor='nameCompany'>Имя</label>
                    <InputController
                        control={control}
                        name="nameCompany"
                        inputType="text"
                        maxLengthInput={100}
                        required='Обязательное поле'
                    />

                    {errors.nameCompany && <p className={styles.error}>{errors.nameCompany?.message}</p>}
                </div>

                {/* Адрес заведения */}
                <div className={styles.form_row} >
                    <label className={styles.form_title} htmlFor='addressCompany'>Адрес заведения</label>
                    <InputController
                        control={control}
                        name="addressCompany"
                        inputType="text"
                        maxLengthInput={255}
                        required='Обязательное поле'
                    />
                    {errors.addressCompany && <p className={styles.error}>{errors.addressCompany?.message}</p>}
                </div>

                {/* ИНН */}
                <div className={styles.form_row} >
                    <label className={styles.form_title} htmlFor='innCompany'>ИНН</label>
                    <InputController
                        control={control}
                        name="innCompany"
                        inputType="text"
                        maxLengthInput={10}
                        required='Обязательное поле'
                        numericOnly={true}
                    />
                    {errors.innCompany && <p className={styles.error}>{errors.innCompany?.message}</p>}
                </div>



                {/* Телефон */}
                <div className={styles.form_row}>
                    <label className={styles.form_title} htmlFor='phoneNumberCompany'>Телефон</label>

                    <Controller
                        name='phoneNumberCompany'
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
                            validate: (value) => {
                                try {
                                    const allowedCountryCodes = ["+7", "+77", "+375", "+380", "+374", "+994", "+995", "+996", "+373", "+992", "+993", "+998"];
                                    const isValidCountryCode = allowedCountryCodes.some(code => value.startsWith(code));

                                    if (!isValidCountryCode) {
                                        return 'Недопустимый код страны. Валидные номера - Россия и СНГ';
                                    }
                                } catch (error) {
                                    console.error('Error validating phone number:', error);
                                    return false;
                                }
                            },
                        }}


                        render={({ field: { name, value, onChange, ref, onBlur } }) =>
                            <PhoneInput
                                onlyCountries={["ru", "kz", "by", "ua", "am", "az", "ge", "kg", "md", "tj", "tm", "uz"]}

                                placeholder=''
                                specialLabel=''
                                containerClass={styles.phoneinput_container}
                                buttonClass={styles.phoneinput_country}
                                inputClass={styles.phoneinput_input}

                                onChange={(value, country, event, formattedValue) => {
                                    onChange(formattedValue);
                                }}
                                onBlur={onBlur}
                                inputProps={{
                                    autoFocus: false,
                                    countryCodeEditable: false,
                                    name,
                                    ref
                                }}
                            />
                        }
                    />
                    <p className={styles.error}>{errors.phoneNumberCompany?.message}</p>
                </div>



                <div className={styles.form_button}>
                    <ButtonActionSubmit content='Отправить заявку' />
                </div>

            </div>
        </div>
    )
}

