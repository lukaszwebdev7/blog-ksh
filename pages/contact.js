function Contact() {
	return (
		<div>
			<div>
				<div className="flex justify-center mb-20">
					<div className="md:w-1/4">
						<p className="text-center text-lg xl:text-xl font-bold mt-4 sm:mt-0 mb-2 bg-category py-1 rounded">
							Dane teleadresowe
						</p>
						<div className="flex justify-center mb-8">
							<span className="block h-1 w-20 bg-indigo" />
						</div>
						<ul className="text-center sm:text-base xl:text-lg">
							<li className="mt-4 font-bold">Radca Prawny Łukasz Szczepaniak</li>
							<li className="mb-4 font-bold">Kancelaria Radcy Prawnego</li>
							<li className="mb-4">ul. Sienkiewicza 8</li>
							<li className="mb-4">05 - 500 Piaseczno</li>
							<li className="mb-4">tel. 505 305 893</li>
							<li className="">e-mail: LS@radcapiaseczno.pl</li>
						</ul>
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
							className="w-11/12 h-96 sm:w-2/3 xl:w-3/4 rounded"
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
		</div>
	);
}

export default Contact;
