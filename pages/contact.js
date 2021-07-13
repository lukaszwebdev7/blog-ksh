import AddressData from '../components/contactPage/main';
import SendMessage from '../components/contactPage/mail';
import FacebookMessenger from '../components/contactPage/messengerF';

function Contact() {
	return (
		<div>
			<AddressData />
			<div className="flex justify-center">
				<p className="md:w-1/6 text-center text-lg xl:text-xl font-bold sm:mt-0 mb-2 bg-category py-1 rounded">
					Formularz kontaktowy
				</p>
			</div>
			<div className="flex justify-center mb-8">
				<span className="block h-1 w-20 bg-indigo" />
			</div>
			<SendMessage />
			<FacebookMessenger />
			<div className="w-full flex flex-col justify-center mb-20 md:mb-24">
				<div className="flex justify-center text-center mb-2">
					<p
						style={{ fontFamily: 'Roboto Condensed' }}
						className="w-6/12 text-center text-lg xl:text-xl font-bold mt-4 sm:mt-0 mb-2 bg-category py-1 rounded"
					>
						Lokalizacja kancelarii i wskazówki, jak dojechać
					</p>
				</div>
				<div className="flex justify-center mb-8">
					<span className="block h-1 w-20 bg-indigo" />
				</div>

				<div className="flex justify-center">
					<iframe
						className="w-11/12 h-96 xl:w-3/4 rounded"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9810.170077927241!2d21.0258568!3d52.0698532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67a08caf618d01a!2sRadca%20Prawny%20%C5%81ukasz%20Szczepaniak%20Kancelaria%20Radcy%20Prawnego!5e0!3m2!1spl!2spl!4v1603645233912!5m2!1spl!2spl"
						width="1200"
						height="600"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;
