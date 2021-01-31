import React, { Component } from 'react';

import styles from './styles.module.scss';

export class Collapsible extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen ? this.props.isOpen : false,
        };

        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleCollapse() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className={styles.collapsible}>
                <div
                    onClick={() => this.handleCollapse()}
                    className={styles.heading}
                >
                    <span>{this.props.heading}</span>
                    <i
                        className={`fa fa-chevron-${
                            this.state.isOpen ? 'up' : 'down'
                        } ${styles.chevron}`}
                        aria-hidden="true"
                    ></i>
                </div>
                <div
                    className={
                        this.state.isOpen ? styles.visible : styles.collapsed
                    }
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
