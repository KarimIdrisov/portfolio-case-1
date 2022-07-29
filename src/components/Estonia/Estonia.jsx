import React from "react";

import styles from './Estonia.module.css';

import Flag from '../../assets/images/flag.png';
import {useTranslation} from "react-i18next";

export const Estonia = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.section}>
            <img className={styles.flag} src={Flag} alt='' />

            <div className={styles.text}>
                {t('estonia.desc')}
                <button className={styles.button}>
                    {t('estonia.trading')}
                </button>
            </div>
        </div>
    )
};