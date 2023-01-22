import React, { useReducer, useState, useEffect } from 'react';

import { credentials, text } from '../../lib';
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
        case 'updateFieldValue':
            if (action.field) {
                return { ...state, [action.field]: action.value };
            }
        case 'updateStatus':
            return { ...state, status: action.value };
        case 'reset':
        default:
            return INITIAL_STATE;
    }
}

export function ContactUs() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(true);

    function setStatus(status: string): void {
        dispatch({ type: 'updateStatus', value: status });
    }

    function updateFieldValue(field: string) {
        return function (event: any) {
            dispatch({
                type: 'updateFieldValue',
                field,
                value: event.target.value,
            });
        };
    }

    useEffect(() => {
        setSubmitButtonIsDisabled(!isSubmitButtonDisabled());
    }, [state]);

    function isSubmitButtonDisabled() {
        return Object.keys(state)
            .filter(i => i !== 'status')
            .every(i => state[i]);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setStatus('PENDING');

        fetch(
            'https://tkaky0kcik.execute-api.eu-west-1.amazonaws.com/prod/contact',
            {
                headers: {
                    'x-api-key': 'Ornn9GoxWP6AA6erxyULp7LYk0LUJAAl3QPp7zKF',
                },
                method: 'POST',
                body: JSON.stringify({
                    subject: state.subject,
                    from: state.email,
                    phone: state.telephone,
                    text: state.message,
                }),
            }
        )
            .then(response => {
                if (response.status === 200) {
                    setStatus('SUCCESS');
                }
            })
            .catch(error => setStatus('ERROR'));
    }

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
