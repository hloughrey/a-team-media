import React, { useState } from 'react';

import { THeader } from './header.types';
import styles from './styles.module.scss';

export function Header({ menu }: THeader) {
    const [menuClicked, setMenuClick] = useState(false);

    return (
        <header>
            <div className="visible-xs visible-sm visible-md hidden-lg">
                <nav
                    className={`navbar navbar-fixed-top ${styles.navbarCustom}`}
                    onClick={() => setMenuClick(prevState => !prevState)}
                >
                    <div className={`row ${styles.headerItems}`}>
                        <div className="col-xs-12">
                            <span className={styles.headerItem}>Menu</span>
                        </div>
                        <div className="col-xs-12">
                            {menuClicked && (
                                <ul className={styles.navItemsMobile}>
                                    {menu.map((item, index) => (
                                        <li key={index} className="nav-item">
                                            <a
                                                className={styles.headerItem}
                                                href={
                                                    item.hash
                                                        ? `#${item.hash}`
                                                        : '/'
                                                }
                                            >
                                                {item.route}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hidden-xs hidden-sm hidden-md visible-lg">
                <nav
                    className={`navbar navbar-fixed-top ${styles.navbarCustom}`}
                >
                    <div className="col-xs-12">
                        <ul
                            className={`nav nav-pills nav-justified ${styles.noMarginTop}`}
                        >
                            {menu.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        className={styles.headerItem}
                                        href={item.hash ? `#${item.hash}` : '/'}
                                    >
                                        {item.route}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
