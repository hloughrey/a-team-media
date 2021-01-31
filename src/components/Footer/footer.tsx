import React from 'react';

import { TFooter } from './footer.types';
import styles from './styles.module.scss';

export function Footer({ text, socialMedia }: TFooter) {
    return (
        <footer className="container">
            <div className="row">
                <div className={`col-xs-6 ${styles.contactDetails}`}>
                    <ul>
                        <li>
                            <i
                                className={`fa fa-map-marker fa-2x ${styles.icon}`}
                                aria-hidden="true"
                            ></i>
                            <div className={styles.details}>
                                <span className={`${styles.company}`}>
                                    {text.AVE}
                                </span>
                                <br />
                                {text.Address}
                            </div>
                        </li>
                        <li>
                            <i
                                className={`fa fa-phone fa-2x ${styles.icon}`}
                                aria-hidden="true"
                            ></i>
                            <div className={styles.details}>
                                {text.PhoneNumber}
                            </div>
                        </li>
                        <li>
                            <i
                                className={`fa fa-envelope fa-2x ${styles.icon}`}
                                aria-hidden="true"
                            ></i>
                            <div className={styles.details}>{text.Email}</div>
                        </li>
                    </ul>
                </div>
                <div className={`col-xs-6 ${styles.footerSocialMedia}`}>
                    <ul className={styles.socialMediaList}>
                        {socialMedia.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target="_blank">
                                    {social.icon ? (
                                        <i
                                            className={`fab ${social.icon} fa-3x`}
                                            aria-hidden="true"
                                        ></i>
                                    ) : (
                                        <img
                                            className={styles.image}
                                            src={social.image}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>{text.Copyright}</p>
            </div>
        </footer>
    );
}
