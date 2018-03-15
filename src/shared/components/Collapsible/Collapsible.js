import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Collapsible extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: this.props.isOpen ? this.props.isOpen : false
		};

		this.handleCollapse = this.handleCollapse.bind(this);
	}

	handleCollapse() {
		this.setState({isOpen: !this.state.isOpen});
	}

	render() {
		return (
			<div className={styles.collapsible}>
				<div onClick={() => this.handleCollapse()} className={styles.heading}>
					<span>{this.props.heading}</span>
					<i className={`fa fa-chevron-${this.state.isOpen ? 'up' : 'down'} ${styles.chevron}`} aria-hidden='true'></i>
				</div>
				<div className={this.state.isOpen ? styles.visible : styles.collapsed }>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Collapsible.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	heading: PropTypes.string.isRequired,
	children: PropTypes.array
};

export default CSSModules(Collapsible, styles);