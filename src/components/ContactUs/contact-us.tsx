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
                    <div className="col-xs-12 col-md-6">
                        <img
                            className={styles.img}
                            src={`${credentials.cloudinary}/v1533586252/a-team-media/contact.jpg`}
                        />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {state.status === 'ERROR' && (
                            <div className="alert alert-dismissible alert-danger">
                                <p>
                                    <strong>Oh snap!</strong> We're really sorry
                                    about this, but it looks like there was an
                                    error. Please try again or message us using
                                    traditional email at info@a-team-media.co.uk
                                </p>
                            </div>
                        )}
                        {state.status === 'SUCCESS' && (
                            <div className="alert alert-dismissible alert-success">
                                <p>
                                    <strong>Awesome sauce!</strong> We
                                    appreciate your message and we'll get back
                                    to you shortly.
                                </p>
                                <button
                                    type="reset"
                                    onClick={() => dispatch({ type: 'reset' })}
                                >
                                    Reset
                                </button>
                            </div>
                        )}
                        <div className={styles.contactUsWrapper}>
                            <form onSubmit={handleSubmit} method="post">
                                <div className="form-group">
                                    <label htmlFor="nameInput">
                                        Your Name (required)
                                    </label>
                                    <input
                                        name="name"
                                        id="nameInput"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        disabled={state.status === 'PENDING'}
                                        value={state.name}
                                        onChange={updateFieldValue('name')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailInput">
                                        Your Email (required)
                                    </label>
                                    <input
                                        name="email"
                                        id="emailInput"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        disabled={state.status === 'PENDING'}
                                        value={state.email}
                                        onChange={updateFieldValue('email')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephoneInput">
                                        Your Telephone Number
                                    </label>
                                    <input
                                        name="telephone"
                                        id="telephoneInput"
                                        type="text"
                                        className="form-control"
                                        placeholder="Telephone Number"
                                        disabled={state.status === 'PENDING'}
                                        value={state.telephone}
                                        onChange={updateFieldValue('telephone')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subjectSelect">
                                        Subject
                                    </label>
                                    <select
                                        name="subject"
                                        id="subjectSelect"
                                        className="form-control"
                                        disabled={state.status === 'PENDING'}
                                        value={state.subject}
                                        onChange={updateFieldValue('subject')}
                                    >
                                        {text.ContactUs.Subjects.map(
                                            (subject, index) => (
                                                <option
                                                    key={index}
                                                    value={subject}
                                                >
                                                    {subject}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="messageInput">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="messageInput"
                                        rows={8}
                                        className="form-control"
                                        placeholder="Enquiry Details"
                                        disabled={state.status === 'PENDING'}
                                        value={state.message}
                                        onChange={updateFieldValue('message')}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className={`btn btn-primary btn-block btn-lg ${styles.submitButton}`}
                                        disabled={submitButtonIsDisabled}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
