import React from 'react';
import CSSModules from 'react-css-modules';
import Heading from '../Heading/Heading';
import styles from './Process.scss';

const Process = () => (
	<div className='container'>
		<section className={styles.processWrapper}>
			<Heading heading='Process' subHeading='Excepteur mollit nulla Lorem ipsum occaecat.' />
			<div>
				<p>Tempor aliqua qui ut eiusmod occaecat proident velit eu elit mollit laboris dolor. Non ad reprehenderit Lorem culpa ex sunt dolor labore aliqua. Cupidatat aliquip labore anim exercitation fugiat.
				Tempor aliqua qui ut eiusmod occaecat proident velit eu elit mollit laboris dolor. Non ad reprehenderit Lorem culpa ex sunt dolor labore aliqua. Cupidatat aliquip labore anim exercitation fugiat.
				Tempor aliqua qui ut eiusmod occaecat proident velit eu elit mollit laboris dolor. Non ad reprehenderit Lorem culpa ex sunt dolor labore aliqua. Cupidatat aliquip labore anim exercitation fugiat.</p>
			</div>
		</section>
	</div>
);

export default CSSModules(Process, styles);