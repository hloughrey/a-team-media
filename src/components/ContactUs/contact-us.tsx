import React, { useReducer, useEffect } from 'react';

import { Heading, TInitialState, TAction } from '../../components';
import styles from './styles.module.scss';

const INITIAL_STATE: TInitialState = {
    name: '',
    email: '',
    telephone: '',
    subject: '-- Please choose a subject --',
    message: '',
    status: 'IDEL',
};

function reducer(state: TInitialState, action: TAction): TInitialState {
    switch (action.type) {
        case 'updateFieldValue': {
            if (action.field) {
                return { ...state, [action.field]: action.value };
            }
            return state;
        }
        case 'updateStatus': {
            return { ...state, status: action.value };
        }
        case 'reset': {
            return INITIAL_STATE;
        }
        default: {
            return INITIAL_STATE;
        }
    }
}

export function ContactUs() {
    const [state] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        Object.keys(state)
            .filter(index => index !== 'status')
            .every(index => state[index]);
    }, [state]);

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-envelope fa-5x" aria-hidden="true" />
                    <Heading heading="Get In Touch With Us" />
                </div>
                <div className="row">
                    <div className="col-xs-offset-3 col-xs-12 col-xs-offset-3">
                        <p>
                            If you have any queries please get in touch{' '}
                            <a href="tel:07789 620335">07789 620335</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
