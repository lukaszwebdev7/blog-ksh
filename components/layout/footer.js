import Link from 'next/link';
function Footer() {
	return (
		<div className="">
			<div className="flex justify-center mb-4 xl:mb-6">
				<span style={{ height: '1px' }} className="w-10/12 bg-yellow-box" />
			</div>
			<div className="lg:hidden ml-4 flex justify-center md:mb-2 text-center text-base sm:text-lg">
				<div>radca prawny Łukasz Szczepaniak</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-center text-center md:mb-2 xl:mb-6">
				<div className="lg:w-1/4 xl:w-1/5">
					<div className="hidden lg:block md:mb-2 font-bold md:mt-2 text-base xl:text-xlg text-gray-25">
						radca prawny Łukasz Szczepaniak
					</div>
				</div>
				<div className="lg:w-1/4 xl:w-1/5">
					<div className="md:mb-2 font-bold md:mt-2 text-base xl:text-lg text-gray-25">tel.: 505 305 893</div>
				</div>
				<div className="lg:w-1/4 xl:w-1/5">
					<div className="md:mb-2 font-bold md:mt-2 text-base xl:text-lg text-gray-25">
						e-mail: LS@radcapiaseczno.pl
					</div>
				</div>
				<div className="lg:w-1/4 xl:w-1/5">
					<div className="md:mb-2 font-bold md:mt-2 text-base xl:text-lg text-gray-25">
						Piaseczno, ul. Sienkiewicza 8
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-center">
				<div className="md:mr-2 flex justify-center md:mb-4 xl:mb-4 cursor-pointer text-center">
					<Link href="/polityka">
						<div>polityka prywatności</div>
					</Link>
				</div>
				<div className="md:ml-4 mb-2 md:mb-4 xl:mb-6 text-center">
					<div>© Wszelkie prawa zastrzeżone</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
