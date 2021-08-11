import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Notification from '../ui/notification';

function SendMessage() {
	const [ captchaToken, setCaptchaToken ] = useState('');
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ submitted, setSubmitted ] = useState(false);
	const [ requestStatus, setRequestStatus ] = useState();
	const [ requestError, setRequestError ] = useState();

	useEffect(
		() => {
			const nameAlertElem = document.getElementById('name-alert');
			const emailAlertElem = document.getElementById('email-alert');
			const textAlertElem = document.getElementById('text-alert');
			const recaptchaAlertElem = document.getElementById('recaptcha-alert');

			if (requestStatus === 'success' || requestStatus === 'error') {
				const timer = setTimeout(() => {
					setRequestStatus(null);
					setRequestError(null);
				}, 4000);
				nameAlertElem.textContent = '';
				emailAlertElem.textContent = '';
				textAlertElem.textContent = '';
				recaptchaAlertElem.textContent = '';

				return () => clearTimeout(timer);
			}
		},
		[ requestStatus ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let data = {
			captchaToken,
			name,
			email,
			message
		};

		const nameAlertElem = document.getElementById('name-alert');
		const emailAlertElem = document.getElementById('email-alert');
		const textAlertElem = document.getElementById('text-alert');
		const recaptchaAlertElem = document.getElementById('recaptcha-alert');

		if (!name || name.trim() === '' || name.length <= 2) {
			nameAlertElem.textContent = 'Wpisz imię.';
			return;
		} else {
			nameAlertElem.textContent = '';
		}
		if (!email || !email.includes('@') || email.length <= 5) {
			emailAlertElem.textContent = 'Nie wpisałeś adresu e-mail, bądź wpisałeś go błędnie.';
			return;
		} else {
			emailAlertElem.textContent = '';
		}
		if (!message || message.trim() === '' || message.length <= 14) {
			textAlertElem.textContent = 'Wpisz wiadomość.';
			return;
		} else {
			textAlertElem.textContent = '';
		}
		if ((await grecaptcha.getResponse()) === '') {
			recaptchaAlertElem.textContent = 'Odznacz "Nie jestem robotem."';
			return;
		}

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => {
				console.log('Response received');
				if (res.status === 200) {
					console.log('Response succeeded!');

					setRequestStatus('success');
					setSubmitted(true);
					setName('');
					setEmail('');
					setMessage('');
					document.getElementById('name').value = '';
					document.getElementById('email').value = '';
					document.getElementById('message').value = '';
				}
			})
			.catch((error) => {
				setRequestError(error.message);
				setRequestStatus('error');
			});
	};

	let notification;

	if (requestStatus === 'success') {
		notification = {
			title: 'Sukces !',
			message: 'Wiadomość została wysłana !'
		};
	}

	if (requestStatus === 'error') {
		notification = {
			title: 'Błąd wysyłania wiadomości !',
			message: requestError
		};
	}

	return (
		<div className="flex justify-center mb-12 md:mb-20">
			<div className="w-11/12 md:w-2/3 py-6 md:px-4 bg-mailForm">
				<form className="contact-form">
					<div className="sm:flex sm:flex-wrap ">
						<div className="flex flex-col sm:w-1/2 mb-4">
							<div className=" px-3 mb-2">
								<input
									type="text"
									placeholder="imię"
									onChange={(e) => {
										setName(e.target.value);
									}}
									name="name"
									id="name"
									className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
								/>
							</div>
							<div id="name-alert" className="h-7 text-center text-teal-400" />
						</div>

						<div className="flex flex-col sm:w-1/2 mb-4">
							<div className=" px-3 mb-2">
								<input
									type="text"
									placeholder="e-mail"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									name="email"
									id="email"
									className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
								/>
							</div>
							<div id="email-alert" className="h-8 text-center text-teal-400" />
						</div>

						<div className="flex flex-col sm:w-full">
							<div className=" px-3 mb-2">
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="4"
									placeholder="tu wpisz wiadomość"
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									name="message"
									className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
								/>
							</div>
							<div id="text-alert" className="h-4 text-center text-teal-400" />
						</div>
					</div>
					<div className="text-right mt-4 mb-2 md:mt-8 mr-4 md:mr-0">
						<button
							onClick={(e) => handleSubmit(e)}
							className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-indigo-400 transition-colors duration-300"
						>
							Wyślij
							<i className="fas fa-chevron-right ml-2 text-sm" />
						</button>
					</div>
					<div id="notification">
						{notification && <Notification title={notification.title} message={notification.message} />}
					</div>
					<div id="recaptcha-alert" className="h-4 text-teal-400 mb-2" />
					<ReCAPTCHA
						size="normal"
						sitekey="6Lcty4gbAAAAANcVSw3SNdiYmzHU1vxWcNA50Juy"
						onChange={(e) => {
							const recapRes = grecaptcha.getResponse();
							setCaptchaToken(recapRes);
						}}
					/>
				</form>
			</div>
		</div>
	);
}

export default SendMessage;
