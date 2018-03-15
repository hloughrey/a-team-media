import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Services.scss';

const Services = () => (
	<div className={styles.servicesWrapper}>
		<div className={styles.heading}>
			<h1>Our Services</h1>
			<p>More information sbout the services we offer</p>
		</div>
	</div>
);

export default CSSModules(Services, styles);