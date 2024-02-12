import React from 'react';
import styles from './ButtonInformation.module.scss';
import iconInformation from '../../assets/icon-information.svg'


export const ButtonInformation = ({isMaxSelected}) => {
    const buttonClasses = `${styles.container} ${isMaxSelected ? styles.container_maxSelected : ''}`;


    return (
        <div className={buttonClasses}>
            <img src={`${iconInformation}`} alt="" className={styles.container_icon} />
            <p className={styles.container_description}>Выберите не более 3 видов из каждой категории</p>
        </div>
    )
}
