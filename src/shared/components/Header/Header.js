'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuClicked: false
		};

	}

	render() {
		return (
			<header>
	
				<div className='visible-xs visible-sm visible-md hidden-lg'>
					<nav className={`navbar navbar-fixed-top ${styles.navbarCustom}`} onClick={() => this.setState({menuClicked: !this.state.menuClicked})}>
						<div className={`row ${styles.headerItems}`}>
							<div className='col-xs-12'>
								<span className={styles.headerItem}>Menu</span>
							</div>
							<div className='col-xs-12'>
								{this.state.menuClicked && 
									<ul className={styles.navItemsMobile}>
										{this.props.menu.map((item, index) => (
											<li key={index} className='nav-item'>
												<a className={styles.headerItem} href={item.hash ? `#${item.hash}` : '/'}>{item.route}</a>
											</li>
										))}
									</ul>
								}
							</div>
						</div>
					</nav>
				</div>
				
				<div className='hidden-xs hidden-sm hidden-md visible-lg'>
					<nav className={`navbar navbar-fixed-top ${styles.navbarCustom}`}>
						<div className='col-xs-12'>
							<ul className={`nav nav-pills nav-justified ${styles.noMarginTop}`}>
								{this.props.menu.map((item, index) => (
									<li key={index} className='nav-item'>
										<a className={styles.headerItem} href={item.hash ? `#${item.hash}` : '/'}>{item.route}</a>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
	
			</header>
	
		);
	}
}

Header.propTypes = {
	menu: PropTypes.array
};

export default Header;