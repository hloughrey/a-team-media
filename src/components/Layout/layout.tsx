import React, { PropsWithChildren } from 'react';

import { Header, Footer } from '..';
import styles from './styles.module.scss';

import { text } from '../../lib/text';

export function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            <Header menu={text.Menu} />
            <div className={styles.mainContainer}>
                <div className="container-fluid">
                    <div className={`row ${styles.mainRow}`}>
                        <div className={styles.mainWrapper}>
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerWrapper}>
                <Footer text={text.General} socialMedia={text.SocialMedia} />
            </div>
        </div>
    );
}
