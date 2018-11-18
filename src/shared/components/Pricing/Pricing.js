import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const Pricing = () => (
    <div>
        <p>
            We love to keep our pricing structure simple to understand with only
            one fantastic package available, with the addition of ‘Bonus
            Features’, making your package bespoke.
        </p>
        <p>
            Our <strong>‘Essential Film Package’</strong> covers the most
            important parts of your day and we believe this is excellent value
            for money for the style of filming and production we provide. This
            enables you to build the perfect package to suit you - after all it
            is your special day.
        </p>
        <p>
            Your ceremony, speeches and first dance will be covered with up to 3
            cameras with fantastic audio capture giving you amazing coverage of
            the day, yet filmed in a discreet way.
        </p>
        <p>
            Your final footage will include a ‘Highlights’ clip and a full
            ‘Documentary’ edited film set to music (subject to licensing).
        </p>
        <p>
            You will receive an excellent presentation box including a DVD,
            Blu-ray and USB with full menu and chapters making each edited part
            of your day easily accessible at the click of a button.
        </p>
        <p>
            If your requirements are not met with the list below then please get
            in touch to discuss your own wishes for a totally bespoke package
            especially tailored for you.
        </p>
        <div className="row">
            <div
                className={`col-xs-12 col-sm-6 ${styles.packageListings} ${
                    styles.featureListing
                }`}
            >
                <h2>Essential Film Package</h2>
                <div className={styles.packageInfo}>
                    <ul>
                        <li>£1200</li>
                        <li>Establishing shots of your chosen venue(s)</li>
                        <li>Guests Arrival</li>
                        <li>Full Ceremony</li>
                        <li>Drinks Reception</li>
                        <li>Full Speeches</li>
                        <li>Evening Guests Arrival</li>
                        <li>Cake Cutting</li>
                        <li>First Dance</li>
                    </ul>
                </div>
            </div>
            <div
                className={`col-xs-12 col-sm-6 ${styles.packageListings} ${
                    styles.featureListing
                }`}
            >
                <h2>Bonus Features</h2>
                <div className={styles.packageInfo}>
                    <ul>
                        <li>
                            Bride/Groom preparations{' '}
                            <span className={styles.highlight}>*</span> + £200
                            (Filmed in a relaxed way)
                        </li>
                        <li>
                            Video Guest Messages after First Dance{' '}
                            <span className={styles.highlight}>**</span> + £150
                            (Great fun for everyone who gets involved, couples
                            and guests love it)
                        </li>
                        <li>
                            Online private video channel of your wedding film +
                            £100.00 (Amazing option for sharing with friends and
                            family who may not have made the day)
                        </li>
                        <li className={styles.highlight}>
                            * Based on a single location, if two locations, it
                            may require an additional camera operator to be
                            hired at an additional cost.
                        </li>
                        <li className={styles.highlight}>
                            ** Filming till 10pm
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p>
            To secure a booking we require a £150 non-returnable booking fee,
            which is taken off your final invoice.
        </p>
        <p>
            If you would like to see a sample of a complete wedding film then
            please get in touch via the ‘CONTACT US’ page to receive a digital
            link to view.
        </p>
        <p>If you have any questions at all, do not hesitate to ask.</p>
    </div>
);

export default CSSModules(Pricing, styles);
