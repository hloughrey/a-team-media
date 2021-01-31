import React from 'react';
import styles from './styles.module.scss';

export function NotFound() {
    return (
        <div className={`container ${styles.fullWidth}`}>
            <div className={`col-xs-12 ${styles.wrapper}`}>
                <p className={styles.title}>404</p>
                <p className={styles.subTitle}>
                    Opps, Sorry we can't find that page
                </p>
                <p className={styles.subTitle}>
                    Either something when wrong or the page{' '}
                    <br className="hidden-md"></br>doesn't exist any longer
                </p>
                <button
                    type="button"
                    className={`btn btn-primary btn-block btn-lg ${styles.submitButton}`}
                    onClick={() => window.location.href('/')}
                >
                    Go to Home Page
                </button>
            </div>
        </div>
    );
}
