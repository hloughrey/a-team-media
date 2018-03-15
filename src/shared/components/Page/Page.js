'use strict';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Import Text
import text from '../../lib/text'; //TODO: remove this and add it as state

const Page = (props)  => (
	<div>
		<Header menu={text.Menu} />
			<div className={styles.mainContainer}>
				<div className='container-fluid'>
					<div className={`row ${styles.mainRow}`}>
						<div className={styles.mainWrapper}>
							<main>
								{props.children}
							</main>
						</div>
					</div>
				</div>
			</div>
		<div className={styles.footerWrapper}>
			<Footer text={text.General} socialMedia={text.SocialMedia}/>
		</div>
	</div>
);

export default CSSModules(Page, styles);