import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Heading.scss';

const Heading = (props) => (
	<div>
		<h1 className={styles.heading}>{props.heading}</h1>
		<span className={styles.underline}></span>
	</div>
);

Heading.propTypes = {
	heading: PropTypes.string.isRequired,
	subHeading: PropTypes.string
};

export default Heading;