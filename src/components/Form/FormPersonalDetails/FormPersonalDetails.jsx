// FormPersonalDetails.jsx
import React from 'react';
import styles from '../Form.module.scss';
import Input from '../../Input';
import { ButtonActionCircle } from '../../ButtonActionCircle/ButtonActionCircle';
import ButtonActionSubmit from '../../ButtonActionSubmit';

export const FormPersonalDetails = ({ onBackStep, handleInput }) => {

    const dataForm = [
        { 'title': 'Имя', 'idLabel': 'name' },
        { 'title': 'Адрес заведения', 'idLabel': 'address'},
        { 'title': 'ИНН', 'idLabel': 'inn' },
        { 'title': 'Телефон', 'idLabel': 'phone', 'inputType': 'tel' },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form_header_box}>
                    <ButtonActionCircle onClick={onBackStep} />
                    <h3 className={styles.form_header}>Шаг 2</h3>
                </div>

                {dataForm.map(data => (
                    <div className={styles.form_row} key={data.idLabel}>
                        <label className={styles.form_title} htmlFor={data.idLabel}>{data.title}</label>

                        <Input
                            idLabel={data.idLabel}
                            handleInput={handleInput}
                            inputType={data.inputType}
                        />
                    </div>
                ))}

                <div className={styles.form_button}>
                    <ButtonActionSubmit content='Отправить заявку' />
                </div>

            </div>
        </div>
    )
}
