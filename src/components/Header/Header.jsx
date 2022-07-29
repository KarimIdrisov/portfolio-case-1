import React from "react";
import styles from './Header.module.css';

import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {useTranslation} from "react-i18next";

export const Header = () => {

    const { t, i18n } = useTranslation();

    return (
        <header className={styles.header}>
            <Logo />

            <div className={styles.buttons}>
                <span className={styles.login}>{t('header.login')}</span>
                <span className={styles.registration}>
                    {t('header.registration')}
                </span>
                <span className={styles.lang}>
                    {i18n.language}
                </span>
            </div>
        </header>
    )
};