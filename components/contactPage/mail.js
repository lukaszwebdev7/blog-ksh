import { useState } from 'react';

function SendMessage() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ submitted, setSubmitted ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Sending');

		let data = {
			name,
			email,
			message
		};

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => {
			console.log('Response received');
			if (res.status === 200) {
				console.log('Response succeeded!');
				setSubmitted(true);
				setName('');
				setEmail('');
				setMessage('');
			}
		});
	};

	return (
		<div className="flex justify-center mb-12 md:mb-20">
			<div class="w-11/12 md:w-2/3 py-6 md:px-4 bg-mailForm">
				<div class="contact-form">
					<div class="sm:flex sm:flex-wrap ">
						<div class="sm:w-1/2 px-3 mb-6">
							<input
								type="text"
								placeholder="imię"
								onChange={(e) => {
									setName(e.target.value);
								}}
								name="name"
								class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
							/>
						</div>
						<div class="sm:w-1/2 px-3 mb-6">
							<input
								type="text"
								placeholder="e-mail"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								name="email"
								class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
							/>
						</div>
						<div class="sm:w-full px-3">
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
								class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
							/>
						</div>
					</div>
					<div class="text-right mt-4 md:mt-12 mr-4 md:mr-0">
						<button
							onClick={(e) => {
								handleSubmit(e);
							}}
							class="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
						>
							Wyślij
							<i class="fas fa-chevron-right ml-2 text-sm" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SendMessage;
