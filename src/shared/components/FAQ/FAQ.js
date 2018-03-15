import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import ReactHtmlParser from 'react-html-parser';
import Collapsible from '../Collapsible/Collapsible';
import styles from './styles.scss';

const FAQ = (props) => (

	<section id='faq' className={styles.section}>
		<div className='container'>
			<div className={styles.heading}>
				<i className='fa fa-question fa-5x' aria-hidden='true'></i>
				<Heading heading='FAQ' />
			</div>
            
			{props.text && props.text.map((faq, index) => (
				<Collapsible key={`Collapsible-${index}`} heading={faq.question} isOpen={index === 0 ? true : false}>
					{ReactHtmlParser(faq.answer)}
				</Collapsible>
			))}

		</div>
	</section>

);

FAQ.propTypes = {
	text: PropTypes.array.isRequired,
};

export default CSSModules(FAQ, styles);