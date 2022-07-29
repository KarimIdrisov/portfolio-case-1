import React from "react";

import styles from './Products.module.css';

import {useTranslation} from "react-i18next";
import {ReactComponent as SpotIcon } from "../../assets/images/spot.svg";
import {ReactComponent as ExchangeIcon } from "../../assets/images/change.svg";
import {ReactComponent as WalletIcon } from "../../assets/images/wallet.svg";
import {ReactComponent as ExchangerIcon } from "../../assets/images/exchanger.svg";
import {ReactComponent as AffilateIcon } from "../../assets/images/affilation.svg";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";

import Deposit from '../../assets/images/zeroPercent_bg.png';

export const Products = () => {

    const { t } = useTranslation();

    const advantages = [
        {
            title: 'spot',
            icon: <SpotIcon />
        },
        {
            title: 'exchange',
            icon: <ExchangeIcon />
        },
        {
            title: 'wallet',
            icon: <WalletIcon />
        },
        {
            title: 'exchanger',
            icon: <ExchangerIcon />
        },
        {
            title: 'affilate',
            icon: <AffilateIcon />
        },
    ];

    const unitexItems = [
        'owners', 'projects', 'organizations', 'exchange', 'cryptocurrencies'
    ];

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>products</h2>

            <div className={styles.advantages}>
                {
                    advantages && advantages.map((item) => (
                        <div className={styles.card} key={item.title}>
                            {item.icon}
                            <span className={styles.cardTitle}>{t(`products.${item.title}.title`)}</span>
                            <span className={styles.desc}>{t(`products.${item.title}.desc`)}</span>
                        </div>
                    ))
                }
            </div>

            <div className={styles.designedTo}>
                <Logo />
                <span className={styles.unitexTitle}>{t('unitex.title')}</span>

                <div className={styles.unitexItems}>
                    {
                        unitexItems && unitexItems.map((item) => (
                            <div className={styles.item} key={item}>
                                {t(`unitex.advantages.${item}`)}
                            </div>
                        ))
                    }
                </div>
            </div>

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
            </div>
        </div>
    )
};