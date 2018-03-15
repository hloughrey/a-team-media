import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const Pricing = () => (
	<div className={`row ${styles.pricingTable}`}>
		<div className={`col-xs-12 col-sm-4 ${styles.packageListings}`}>
			<h2>Bronze Package</h2>
			<div className={styles.packageInfo}>
				<ul>
					<li><span className={styles.packagePrice}>£900</span></li>
					<li>Guest arrival</li>
					<li>Ceremony</li>
					<li>Guest candid shots</li>
					<li>Speeches</li>
					<li>Cutting of the cake</li>
					<li>First Dance</li>
					<li>3-5 minute highlights</li>
					<li>Documentary Edit (between 60 and 120 mins)</li>
					<li>2 x DVD or mix of DVD + Blu-ray in presentation case</li>
				</ul>
			</div>
		</div>
		<div className={`col-xs-12 col-sm-4 ${styles.packageListings} ${styles.featureListing}`}>
			<h2>Gold Package</h2>
			<div className={styles.packageInfo}>
				<ul>
					<li><span className={styles.packagePrice}>£1300</span></li>
					<li>Bride or Groom Preparation (at 1 venue*)</li>
					<li>Guest arrival</li>
					<li>Ceremony</li>
					<li>Guest candid shots</li>
					<li>Speeches</li>
					<li>Cutting of the cake</li>
					<li>First Dance</li>
					<li>Extra Evening Dances</li>
					<li>Guest Interviews (great fun if guests allow) At venue till 10pm</li>
					<li>3-5 minute highlights</li>
					<li>Documentary Edit (between 60 and 120 mins)</li>
					<li>2 x DVD or mix of DVD + Blu-ray + Full HD USB Media in Premium presentation case</li>
					<li>Additional DVD or Blu-ray in ‘Movie Style’ case</li>
				</ul>
			</div>
		</div>
		<div className={`col-xs-12 col-sm-4 ${styles.packageListings}`}>
			<h2>Silver Package</h2>
			<div className={styles.packageInfo}>
				<ul>
					<li><span className={styles.packagePrice}>£1000</span></li>
					<li>Bride or Groom Preparation (at 1 venue*)</li>
					<li>Guest arrival</li>
					<li>Ceremony</li>
					<li>Guest candid shots</li>
					<li>Speeches</li>
					<li>Cutting of the cake</li>
					<li>First Dance</li>
					<li>3-5 minute highlights</li>
					<li>Documentary Edit (between 60 and 120 mins)</li>
					<li>2 x DVD or mix of DVD + Blu-ray + Full HD USB Media in Premium presentation case</li>
				</ul>
			</div>
		</div>
	</div>
);

export default CSSModules(Pricing, styles);