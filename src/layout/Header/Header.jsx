import React from 'react'
import styles from './Header.module.scss';
import Logo from '../../components/Logo';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Logo />
                <div className={`${styles.hero}`}>
                    <h1 className={styles.hero_title}>Как обновить меню за 5 рабочих дней</h1>
                    <p className={styles.hero_description}>Владелец бара планирует закупки на сезон. Проверяет статистику продаж и спрашивает себя: как быстро выбрать напитки, которые будут продаваться?</p>
                    <p className={styles.hero_description}>На обновление барной карты хочется тратить пару дней вместо недель. В Beer Insiders мы проанализировали рынок и вот что выяснили.</p>
                </div>
                <div className={styles.shadow}></div>
            </header>

        </>
    )
}
