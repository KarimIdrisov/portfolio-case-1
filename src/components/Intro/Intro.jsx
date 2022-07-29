import React from "react";

import styles from './Intro.module.css';

import Zero from '../../assets/images/zeroPercent.png';
import Rocket from '../../assets/images/rocket.png';
import {useTranslation} from "react-i18next";

export const Intro = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.section}>
            <img className={styles.zero} src={Zero} alt='' />
            <img className={styles.rocket} src={Rocket} alt='' />

            <div className={styles.text}>
                <span className={styles.percent}>%</span>
                <span className={styles.deposit}>
                    {t('intro.deposit')}
                </span>
                <button className={styles.button}>
                    {t('intro.start')}
                </button>
            </div>
        </div>
    )
};