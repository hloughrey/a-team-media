import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import {
    goldPackage,
    silverPackage,
    bronzePackage,
    pewterPackage
} from './copy';

const identifyPackage = p => {
    switch (p) {
        case 'goldPackage':
            return goldPackage;
        case 'silverPackage':
            return silverPackage;
        case 'bronzePackage':
            return bronzePackage;
        case 'pewterPackage':
            return pewterPackage;
        default:
            return null;
    }
};

const sortByOrderValue = (a, b) => a.order - b.order;

const Pricing = () => {
    const packages = ['Gold', 'Silver', 'Bronze', 'Pewter'];

    return (
        <div className={`row ${styles.pricingTable}`}>
            {packages.map((p, index) => {
                return (
                    <div
                        key={`package-${index}`}
                        className={`col-xs-12 col-sm-3 ${
                            styles.packageListings
                        }`}
                    >
                        <h2>{`${p} Package`}</h2>
                        <div className={styles.packageInfo}>
                            <ul>
                                {identifyPackage(`${p.toLowerCase()}Package`)
                                    .sort(sortByOrderValue)
                                    .map((d, index) => (
                                        <li
                                            key={`package-item-${index}`}
                                            className={
                                                index === 0 &&
                                                styles.packagePrice
                                            }
                                        >
                                            {d.feature}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CSSModules(Pricing, styles);
