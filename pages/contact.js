import PhotoSlider from '../components/home-page/slider';

function Contact() {
	return (
		<div>
			<div className="flex justify-center mb-20">
				<div className="w-11/12 xl:w-3/4 flex flex-col md:flex-row md:justify-around bg-contact md:py-10 text-white">
					<div className="md:w-1/4 flex justify-center">
						<div className="flex flex-col text-center">
							<div className="flex justify-center my-4">
								<div className="border-2 md:border-4 border-white rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-20 md:h-24 w-20 md:w-24 p-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</div>
							</div>
							<div className="mb-4 font-bold mt-4 text-xl md:text-2xl">telefon kontaktowy</div>
							<div className="mb-4 font-bold text-xl">505 305 893</div>
						</div>
					</div>
					<div className="md:w-1/4 flex justify-center">
						<div className="flex flex-col text-center">
							<div className="flex justify-center my-4">
								<div className="border-2 md:border-4 border-white rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-20 md:h-24 w-20 md:w-24 p-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
							</div>
							<div className="mb-4 font-bold mt-4 text-xl md:text-2xl">kontakt e-mail</div>
							<div className="mb-4 font-bold text-xl">LS@radcapiaseczno.pl</div>
						</div>
					</div>

					<div className="md:w-1/4 flex justify-center">
						<div className="flex flex-col text-center">
							<div className="flex justify-center my-4">
								<div className="border-2 md:border-4 border-white rounded-full">
									<svg
										className="h-20 md:h-24 w-20 md:w-24 p-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
								</div>
							</div>
							<div className="mb-4 font-bold mt-4 text-xl md:text-2xl">biuro kancelarii</div>
							<div className="mb-4 font-bold text-xl">Piaseczno, ul. Sienkiewicza 8</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<p className="w-1/6 text-center text-lg xl:text-xl font-bold sm:mt-0 mb-2 bg-category py-1 rounded">
					Galeria
				</p>
			</div>
			<div className="flex justify-center mb-8">
				<span className="block h-1 w-20 bg-indigo" />
			</div>

			<div className="flex justify-center mb-24">
				<img className="w-11/12 sm:w-2/3 xl:w-3/4" src="/images/other/front.jpg" alt="" />
			</div>

			<div className="w-full flex flex-col justify-center md:mb-24">
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
