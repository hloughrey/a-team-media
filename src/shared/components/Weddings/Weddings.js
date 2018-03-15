import React from 'react';
import CSSModules from 'react-css-modules';
import WeddingsInto from '../WeddingsInto/WeddingsInto';
import Heading from '../Heading/Heading';
import Pricing from '../Pricing/Pricing';
import Portfolio from '../Portfolio/Portfolio';

import styles from './styles.scss';

const Weddings = () => (
	<section id='weddings' className={styles.section}>
		<div className='container'>
			<div className={styles.heading}>
				<i className='fa fa-heart fa-5x' aria-hidden='true'></i>
				<Heading heading='Weddings' color={'white'}/>
			</div>
			<div>
				<ul className={`nav nav-tabs nav-justified ${styles.tabs}`}>
					<li className='active'><a data-toggle='tab' href='#approach'>Our Approach</a></li>
					<li><a data-toggle='tab' href='#pricing'>Pricing</a></li>
					<li><a data-toggle='tab' href='#portfolio'>Portfolio</a></li>
				</ul>
				<div className='tab-content'>
					<div id='approach' className='tab-pane fade active in'>
						<WeddingsInto />
					</div>
					<div id='pricing' className='tab-pane fade'>
						<Pricing />
					</div>
					<div id='portfolio' className='tab-pane fade'>
						<Portfolio />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Weddings;