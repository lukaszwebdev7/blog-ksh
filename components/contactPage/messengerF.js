import MessengerCustomerChat from 'react-messenger-customer-chat';

function FacebookMessenger() {
	const secret_key = process.env.messenger_key;
	return (
		<div>
			<MessengerCustomerChat pageId="102564995007262" appId={secret_key} />
		</div>
	);
}

export default FacebookMessenger;
