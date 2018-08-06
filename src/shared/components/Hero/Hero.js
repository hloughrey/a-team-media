import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import { cloudinary } from '../../lib/credentials';

const Hero = () => (
    <section id="hero" className={styles.section}>
        <div className={styles.image}>
            <img
                className={styles.mainLogo}
                src={`${cloudinary}/v1533585515/a-team-media/a-team-media-logo.png`}
                alt="Main Logo"
            />
        </div>
        <div className={styles.scroll}>
            <p>Scroll for more</p>
            <svg
                id="scrollplz-arrow"
                height="50px"
                viewBox="0 0 5 27"
                stroke="none"
                fill="currentColor"
            >
                <rect x="2" y="0" width="1" height="23" />
                <path d="M0,22.244 L2.493,26.562 L4.986,22.244 L0,22.244 Z" />
            </svg>
        </div>
    </section>
);

export default CSSModules(Hero, styles);
