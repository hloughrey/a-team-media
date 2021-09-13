import React from 'react';

import styles from './styles.module.scss';

export function Pricing() {
    return (
        <div>
            <p>
                We love to keep our pricing structure simple to understand with
                only one fantastic package available, with the addition of
                ‘Bonus Features’, making your package bespoke.
            </p>
            <p>
                Our <strong>‘Essential Film Package’</strong> covers the most
                important parts of your day and we believe this is excellent
                value for money for the traditional style of filming and
                production we provide. This enables you to build the perfect
                package to suit you - after all it is your special day.
            </p>
            <p>
                Your ceremony, speeches and first dance will be covered with up
                to 3 cameras with fantastic audio capture giving you amazing
                coverage of the day, yet filmed in a discreet way.
            </p>
            <p>
                Your final footage will include a ‘Highlights’ clip and a
                traditional styled ‘Documentary Film’ set to music (subject to
                licensing).
            </p>
            <p>
                Digital media is changing fast, we know the majority of our
                couples stream their TV and movie viewing via internet suppliers
                such as Netflix, Amazon Prime, Apple TV and many more so we are
                having to adapt to these changes and will now offer full digital
                delivery service where you can stream your footage via our
                partners at Mediazilla. Along with a streaming version of your
                documentary styled film, you will receive a beautifully
                presented USB with your ‘Highlights’ and ‘Documentary Film’ in
                an offline playable version through your computer which can be
                HDMI linked to any TV.
            </p>
            <p>
                If your requirements are not met with the list below then please
                get in touch to discuss your own wishes for a totally bespoke
                package especially tailored for you.
            </p>
            <div className={`row ${styles.pricingTable}`}>
                <div
                    className={`col-xs-12 col-sm-5 ${styles.packageListings} ${styles.featureListing}`}
                >
                    <h2>Half Day Package</h2>
                    <div className={styles.packageInfo}>
                        <ul>
                            <li>£900</li>
                            <li>Guest arrival</li>
                            <li>Full ceremony</li>
                            <li>Drinks reception</li>
                            <li>Full speeches</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`col-xs-12 col-sm-5 col-sm-offset-2 ${styles.packageListings} ${styles.featureListing}`}
                >
                    <h2>Essential Film Package</h2>
                    <div className={styles.packageInfo}>
                        <ul>
                            <li>£1400</li>
                            <li>Half day features, plus:</li>
                            <li>Establishing shots of your chosen venue(s)</li>
                            <li>Evening Guests Arrival</li>
                            <li>Cake Cutting</li>
                            <li>First Dance</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`row ${styles.pricingTable}`}>
                <div
                    className={`col-xs-12 ${styles.packageListings} ${styles.featureListing}`}
                >
                    <h2>Bonus Features</h2>
                    <div className={styles.packageInfo}>
                        <ul>
                            <li>
                                Bride/Groom preparations{' '}
                                <span className={styles.highlight}>*</span> +
                                £250 (Filmed in a relaxed way)
                            </li>
                            <li>
                                Video 'Guest Messages' after First Dance{' '}
                                <span className={styles.highlight}>**</span> +
                                £250 (Great fun for everyone who gets involved,
                                couples and guests love it)
                            </li>
                            <li>
                                Any entertainment during meal to be filmed - £75
                            </li>
                            <li className={styles.highlight}>
                                * Based on a single location, if two locations,
                                it may require an additional camera operator to
                                be hired at an additional cost.
                            </li>
                            <li className={styles.highlight}>
                                ** Filming until 10pm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>
                To book, we require £250 to secure your date which also forms as
                a service fee, covering work undertaken prior to your wedding
                day.
            </p>
            <p>
                This is non-returnable as it is for services rendered and is
                taken off your final invoice.
            </p>
            <p>
                If you would like to see a sample of a complete wedding film
                then please get in touch via the ‘Contact Us’ page to receive a
                digital link to view.
            </p>
            <p>If you have any questions at all, do not hesitate to ask.</p>
        </div>
    );
}
