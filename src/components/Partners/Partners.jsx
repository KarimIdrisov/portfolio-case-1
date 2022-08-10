import React from "react";

import styles from './Partners.module.css';
import {useTranslation} from "react-i18next";
import PartnersBg from "../../assets/images/partners.png";

export const Partners = ( ) => {
    const { t } = useTranslation();

    return (
        <div className={styles.partners}>
            <h2 className={styles.title}>partners</h2>

            <img src={PartnersBg} alt='' />
        </div>
    )
}