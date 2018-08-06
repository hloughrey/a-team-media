import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PortfolioVideo = props => (
    <div className="col-xs-12 col-md-6">
        <div className={styles.cardWrapper}>
            <div className="col-xs-12">
                <div className={styles.videoWrapper}>
                    {props.Video && (
                        <iframe
                            width="640"
                            height="360"
                            src={`${props.Video}?autoplay=0`}
                            frameBorder="0"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
            {props.Location && (
                <div className="col-xs-12">
                    <div className={styles.contentWrapper}>
                        <p className={styles.title}>{props.Location}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
);

PortfolioVideo.propTypes = {
    Location: PropTypes.string,
    Video: PropTypes.string.isRequired
};

export default CSSModules(PortfolioVideo, styles);
