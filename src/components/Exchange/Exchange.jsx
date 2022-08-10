import React from "react";

import styles from './Exchange.module.css';
import {useTranslation} from "react-i18next";
import ExchangeBg from '../../assets/images/exchangeBg.png';

export const Exchange = () => {

    const { t } = useTranslation();

    const items = [
        'terminal', 'deposit', 'program', 'exchange', 'support'
    ];

    return (
        <div className={styles.exchange}>
            <img src={ExchangeBg} className={styles.exchangeBg} alt=''/>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {t('exchange.title')}
                </h2>


                <ul className={styles.list}>
                    {
                        items && items.map((item) => (
                            <li key={item} className={styles.item}>
                                {t(`exchange.advantages.${item}`)}
                            </li>
                        ))
                    }
                </ul>

                <button className={styles.button}>
                    {t('exchange.trading')}
                </button>
            </div>
        </div>
    )
}