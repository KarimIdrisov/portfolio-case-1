import React from "react";
import Deposit from "../../assets/images/zeroPercent_bg.png";
import {useTranslation} from "react-i18next";

import styles from './Banner.module.css';

export const Banner = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.banner}>
                <span className={styles.bannerTitle}>{t('bitcoin.title')}</span>

                <span>{t('bitcoin.desc')}</span>

                <span className={styles.partner}>{t('bitcoin.partner')}</span>

                <button className={styles.bannerButton}>{t('bitcoin.registration')}</button>
            </div>

            <div className={styles.deposit}>
                <img className={styles.depositImage} src={Deposit} alt='' />

                <span className={styles.percent}>0%</span>
                <span className={styles.depositText}>{t('bitcoin.deposit')}</span>
                <button className={styles.bannerButton}>{t('bitcoin.buy')}</button>
            </div>
        </>
    )
}