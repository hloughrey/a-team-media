'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const Footer = (props) => (
	<footer className='container'>
		<div className='row'>
			<div className={`col-xs-6 ${styles.contactDetails}`}>
				<ul>
					<li>
						<i className={`fa fa-map-marker fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<div className={styles.details}>
							<span className={`${styles.company}`}>{props.text.AVE}</span>
							<br />{props.text.Address}
						</div>
					</li>
					<li>
						<i className={`fa fa-phone fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<div className={styles.details}>
							{props.text.PhoneNumber}
						</div>
					</li>
					<li>
						<i className={`fa fa-envelope fa-2x ${styles.icon}`} aria-hidden="true"></i>
						<div className={styles.details}>
							{props.text.Email}
						</div>
					</li>
				</ul>
			</div>
			<div className={`col-xs-6 ${styles.footerSocialMedia}`}>
				<ul className={styles.socialMediaList}>
					{props.socialMedia.map((social, index) => (
						<li key={index}>
							<a href={social.link}>
								<i className={`fab ${social.icon} fa-3x`} aria-hidden='true'></i>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
		<div>
			<p className={styles.copyright}>{props.text.Copyright}</p>
		</div>
	</footer>
);

Footer.propTypes = {
	text: PropTypes.object.isRequired,
	socialMedia: PropTypes.array.isRequired
};

export default CSSModules(Footer, styles);