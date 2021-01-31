import React from 'react';

import { TPortfolioVideo } from './portfolio-video.types';
import styles from './styles.module.scss';

export function PortfolioVideo({ video, location }: TPortfolioVideo) {
    return (
        <div className="col-xs-12 col-md-6">
            <div className={styles.cardWrapper}>
                <div className="col-xs-12">
                    <div className={styles.videoWrapper}>
                        {video && (
                            <iframe
                                width="640"
                                height="360"
                                src={`${video}?autoplay=0`}
                                frameBorder="0"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>
                {location && (
                    <div className="col-xs-12">
                        <div className={styles.contentWrapper}>
                            <p className={styles.title}>{location}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
