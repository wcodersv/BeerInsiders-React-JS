// FormAboutCompany.jsx
import React from 'react';
import styles from '../Form.module.scss';
import Input from '../../Input';
import ButtonSelect from '../../ButtonSelect';
import ButtonInformation from '../../ButtonInformation';
import ButtonAction from '../../ButtonAction';
import * as companyInformation from '../../../data/dataForm';
import SelectOptions from '../../SelectOptions';


export const FormAboutCompany = ({ onNextStep, handleInput, selectedValues, handleSelectChange, }) => {



    return (
        <div className={styles.container}>
            {/* Container Header */}
            <div className={styles.container_header}>
                <h2 className={styles.container_header_title}>Круто, давайте!</h2>
                <p className={styles.container_header_description}>Заполните форму из двух шагов: расскажите о заведении и выберите напитки.</p>
            </div>

            {/* Form */}
            <div className={styles.form}>
                <h3 className={styles.form_header}>Шаг 1</h3>

                <div className={styles.form_row}>
                    <p className={styles.form_title}>Основная сложность с обновлением</p>
                    <div>
                        <SelectOptions
                            handleInput={handleInput}
                        />
                    </div>

                </div>

                <div className={styles.form_row}>
                    <p className={styles.form_title}>Формат заведения</p>
                    <div className={styles.form_select}>
                        {companyInformation.institutionFormatData.map(data => (
                            <ButtonSelect
                                content={data.name}
                                key={data.id}
                                selectedValues={selectedValues.formatCompany}
                                onSelect={(selected) => handleSelectChange('formatCompany', selected)}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.form_row}>
                    <label className={styles.form_title} htmlFor="check">Средний чек ₽</label>
                    <Input
                        idLabel="check"
                        handleInput={handleInput}
                        inputType='number'
                        
                    />
                </div>

                <ButtonInformation />

                {companyInformation.drinks.map(data => (
                    <div className={styles.form_row} key={data.idDrink}>
                        <p className={styles.form_title_bold}>{data.title}</p>
                        <div className={styles.form_select}>
                            {
                                data.typeDrinks.map(drink => (
                                    <ButtonSelect
                                        content={drink.name}
                                        key={drink.id}
                                        selectedValues={selectedValues[data.idDrink]}
                                        onSelect={(selected) => handleSelectChange(data.idDrink, selected)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}

                <div className={styles.form_button}>
                    <ButtonAction
                        content='Продолжить'
                        onClick={onNextStep}
                    />

                </div>

            </div>
        </div>
    )
}
