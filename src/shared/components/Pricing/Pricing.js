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
            for money for the traditional style of filming and production we
            provide. This enables you to build the perfect package to suit you -
            after all it is your special day.
        </p>
        <p>
            Your ceremony, speeches and first dance will be covered with up to 3
            cameras with fantastic audio capture giving you amazing coverage of
            the day, yet filmed in a discreet way.
        </p>
        <p>
            Your final footage will include a ‘Highlights’ clip and a
            traditional styled ‘Documentary Film’ set to music (subject to
            licensing).
        </p>
        <p>
            Digital media is changing fast, we know the majority of our couples
            stream their TV and movie viewing via internet suppliers such as
            Netflix, Amazon Prime, Apple TV and many more so we are having to
            adapt to these changes and will now offer full digital delivery
            service where you can stream your footage via our partners at
            Mediazilla. Along with a streaming version of your documentary
            styled film, you will receive a beautifully presented USB with your
            ‘Highlights’ and ‘Documentary Film’ attached in MP4 format.
        </p>
        <p>
            If your requirements are not met with the list below then please get
            in touch to discuss your own wishes for a totally bespoke package
            especially tailored for you.
        </p>
        <div className="row">
            <div
                className={`col-xs-12 col-sm-6 ${styles.packageListings} ${styles.featureListing}`}
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
                className={`col-xs-12 col-sm-6 ${styles.packageListings} ${styles.featureListing}`}
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
                            Video 'Guest Messages' after First Dance{' '}
                            <span className={styles.highlight}>**</span> + £200
                            (Great fun for everyone who gets involved, couples
                            and guests love it)
                        </li>
                        <li className={styles.highlight}>
                            * Based on a single location, if two locations, it
                            may require an additional camera operator to be
                            hired at an additional cost.
                        </li>
                        <li className={styles.highlight}>
                            ** Filming until 10pm
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p>
            To secure a booking we require a £200 non-returnable booking fee,
            which is taken off your final invoice.
        </p>
        <p>
            If you would like to see a sample of a complete wedding film then
            please get in touch via the ‘CONTACT US’ page to receive a digital
            link to view.
        </p>
        <p>If you have any questions at all, do not hesitate to ask.</p>
        <div className={styles.halfDay}>
            <p className={styles.highlight}>
                Why not ask us about our special £800 half day option, covering
                guest arrival through to the speeches.
            </p>
            <img
                src="https://res.cloudinary.com/latitude55/image/upload/c_scale,h_350/v1573158850/a-team-media/HalfDayTransparent.png"
                alt="Special Half Day Offer"
                role="presentation"
            />
        </div>
    </div>
);

export default CSSModules(Pricing, styles);
