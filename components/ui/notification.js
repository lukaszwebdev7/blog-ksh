import ReactDOM from 'react-dom';

function Notification(props) {
	const { title, message } = props;

	return ReactDOM.createPortal(
		<div className="bg-orange-category text-white my-2 pl-2">
			<h6>{title}</h6>
			<p>{message}</p>
		</div>,
		document.getElementById('notification')
	);
}

export default Notification;
