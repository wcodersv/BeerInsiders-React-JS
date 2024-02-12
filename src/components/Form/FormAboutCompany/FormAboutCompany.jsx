// FormAboutCompany.jsx
import React, { useState } from 'react';
import styles from '../Form.module.scss';
import Input from '../../Input';
import ButtonSelect from '../../ButtonSelect';
import ButtonInformation from '../../ButtonInformation';
import ButtonAction from '../../ButtonAction';
import * as companyInformation from '../../../data/dataForm';
import SelectOptions from '../../SelectOptions';


export const FormAboutCompany = ({ onNextStep, control, register }) => {
    const [isMaxSelected, setIsMaxSelected] = useState(false);

    const handleMaxLimitReached = () => {
        setIsMaxSelected(true);
        setTimeout(() => {
            setIsMaxSelected(false);
        }, 1000);
    };

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

                {/* Сложность с обновлением */}
                <div className={styles.form_row}>
                    <p className={styles.form_title}>Основная сложность с обновлением</p>
                    <div>
                        <SelectOptions
                            name="problems"
                            control={control}

                        />
                    </div>
                </div>

                {/* Формат заведения */}
                <div className={styles.form_row}>
                    <p className={styles.form_title}>Формат заведения</p>
                    <div className={styles.form_select}>
                        {companyInformation.institutionFormatData.map(data => (
                            <ButtonSelect
                                control={control}
                                name="formatCompany"
                                content={data.name}
                                key={data.id}
                                contentId={data.id}
                            />
                        ))}
                    </div>
                </div>

                {/* Средний чек */}
                <div className={styles.form_row}>
                    <label className={styles.form_title} htmlFor="check">Средний чек ₽</label>
                    <Input
                        register={register}
                        name="averageCheck"

                        idLabel='averageCheck'
                        inputType="number"

                    />
                </div>
                <ButtonInformation isMaxSelected={isMaxSelected} />

                {/* Информация о напитках */}
                {companyInformation.drinks.map(data => (
                    <div className={styles.form_row} key={data.idDrink}>
                        <p className={styles.form_title_bold}>{data.title}</p>
                        <div className={styles.form_select}>
                            {
                                data.typeDrinks.map(drink => (
                                    <ButtonSelect
                                        control={control}
                                        name={data.idDrink}
                                        content={drink.name}
                                        key={drink.id}
                                        contentId={drink.id}
                                        handleMaxLimitReached={handleMaxLimitReached}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}

                <div className={styles.form_button}>
                    <ButtonAction
                        typeButton='button'
                        content='Продолжить'
                        onClick={onNextStep}
                    />

                </div>

            </div>
        </div>
    )
}
