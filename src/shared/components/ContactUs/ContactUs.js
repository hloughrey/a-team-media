import React from 'react';
import Axios from 'axios';
import CSSModules from 'react-css-modules';
import Heading from '../Heading/Heading';
import styles from './styles.scss';
import Text from '../../lib/text';

const initialState = {
	name: '',
	nameValid: false,
	email: '',
	emailValid: false,
	telephone: null,
	telephoneValid: false,
	subject: '-- Please choose a subject --',
	subjectValid: false,
	message: '',
	messageValid: false,
	messageStatus: ''
}

class ContactUs extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialState;

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.emailValidation = this.emailValidation.bind(this);
		this.telephoneValidation = this.telephoneValidation.bind(this);
		this.sendContactUsMessage = this.sendContactUsMessage.bind(this);
		this.renderContactUsForm = this.renderContactUsForm.bind(this);
		this.renderSuccessAlert = this.renderSuccessAlert.bind(this);
		this.renderErrorAlert = this.renderErrorAlert.bind(this);
		this.isSubmitButtonDisabled = this.isSubmitButtonDisabled.bind(this);
	}

	sendContactUsMessage() {
		Axios.post('https://tkaky0kcik.execute-api.eu-west-1.amazonaws.com/prod/contact', {
			subject: this.state.subject,
			from: this.state.email,
			phone: this.state.telephone,
			text: this.state.message
		})
			.then(response => {
				if (response.status === 200) {
					let newState = initialState;
					newState.messageStatus = 'Success';
					this.setState(newState);
				}
			})
			.catch(error => this.setState({ messageStatus: 'Error' }));
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.sendContactUsMessage();
	}

	emailValidation(email) {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(email);
	}

	telephoneValidation(telephone) {
		return (!isNaN(telephone) && telephone.length === 11) ? true : false;
	}

	onInputChange(e) {
		let newValue;

		switch (e.target.name) {
			case 'name':
				newValue = {
					name: e.target.value,
					nameValid: e.target.value.length ? true : false
				};
				break;
			case 'email':
				newValue = {
					email: e.target.value,
					emailValid: this.emailValidation(e.target.value)
				};
				break;
			case 'subject':
				newValue = {
					subject: e.target.value,
					subjectValid: e.target.value !== '-- Please choose a subject --' && true
				};
				break;
			case 'telephone':
				newValue = {
					telephone: e.target.value,
					telephoneValid: this.telephoneValidation(e.target.value)
				};
				break;
			case 'message':
				newValue = {
					message: e.target.value,
					messageValid: e.target.value.length ? true : false
				};
				break;
		}

		this.setState(...this.state, newValue);
	}

	renderErrorAlert() {
		return (
			<div className='alert alert-dismissible alert-danger'>
				<strong>Oh snap!</strong> We're really sorry about this, but it looks like there was an error. Please try again or message us using traditional email at info@a-team-media.co.uk
			</div>
		);
	}

	renderSuccessAlert() {
		return (
			<div className='alert alert-dismissible alert-success'>
				<strong>Awesome sauce!</strong> We appreciate your message and we'll get back to you shortly.
			</div>
		);
	}

	isSubmitButtonDisabled() {
		return !Object.keys(this.state).filter(i => i.endsWith('Valid')).every(i => this.state[i])
	}

	renderContactUsForm() {
		return (
			<div className='col-xs-12 col-md-6'>
				<div className={styles.contactUsWrapper}>
					<form onSubmit={this.onFormSubmit}>
						<div className='form-group'>
							<label htmlFor='nameInput'>Your Name (required)</label>
							<input name='name' id='nameInput' type='text' className='form-control' placeholder='Name' value={this.state.name} onChange={this.onInputChange} />
						</div>
						<div className='form-group'>
							<label htmlFor='emailInput'>Your Email (required)</label>
							<input name='email' id='emailInput' type='email' className='form-control' placeholder='Email Address' value={this.state.email} onChange={this.onInputChange} />
						</div>
						<div className='form-group'>
							<label htmlFor='telephoneInput'>Your Telephone Number</label>
							<input name='telephone' id='telephoneInput' type='text' className='form-control' placeholder='Telephone Number' value={!this.state.telephone ? '' : this.state.telephone} onChange={this.onInputChange} />
						</div>
						<div className='form-group'>
							<label htmlFor='subjectSelect'>Subject</label>
							<select name='subject' id='subjectSelect' className='form-control' value={this.state.subject} onChange={this.onInputChange}>
								{Text.ContactUs.Subjects.map((subject, index) => (
									<option key={index} value={subject}>{subject}</option>
								))}
							</select>
						</div>
						<div className='form-group'>
							<label htmlFor='messageInput'>Your Message</label>
							<textarea name='message' id='messageInput' rows='8' className='form-control' placeholder='Enquiry Details' value={this.state.message} onChange={this.onInputChange} />
						</div>
						<div className='form-group'>
							{this.isSubmitButtonDisabled()
								? <button type='submit' className={`btn btn-primary btn-block btn-lg ${styles.submitButton}`} disabled>Submit</button>
								: <button type='submit' className={`btn btn-primary btn-block btn-lg ${styles.submitButton}`}>Submit</button>
							}
						</div>
					</form>
				</div>
				{this.state.messageStatus === 'Success' && this.renderSuccessAlert()}
				{this.state.messageStatus === 'Error' && this.renderErrorAlert()}
			</div>
		)
	};

	render() {
		return (
			<section id='contact' className={styles.section}>
				<div className='container'>
					<div className={styles.heading}>
						<i className='fa fa-envelope fa-5x' aria-hidden='true'></i>
						<Heading heading='Get In Touch With Us' subHeading='Excepteur mollit nulla Lorem ipsum occaecat.' />
					</div>
					<div className='row'>
						<div className='col-xs-12 col-md-6'>
							<img className={styles.img} src='https://s3.eu-west-2.amazonaws.com/latitude55-website-resources/a-team-media/contact.jpg' />
						</div>
						{this.renderContactUsForm()}
					</div>
				</div>
			</section>
		);
	}
}

export default CSSModules(ContactUs, styles);

