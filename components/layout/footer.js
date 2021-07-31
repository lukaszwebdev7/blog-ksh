import Link from 'next/link';
function Footer() {
	return (
		<div className="">
			<div className="flex justify-center mb-4 xl:mb-6">
				<span className="w-10/12 bg-yellow-box h-px" />
			</div>

			<div className="sm:hidden flex flex-col justify-center text-center font-bold text-sm text-gray-25 mb-2">
				<div className="">radca prawny Łukasz Szczepaniak</div>
				<div>tel.: 505 305 893</div>
				<div>e-mail: LS@radcapiaseczno.pl</div>
				<div>Piaseczno, ul. Sienkiewicza 8</div>
				<div className="cursor-pointer">
					<Link href="/polityka">
						<div>polityka prywatności</div>
					</Link>
				</div>
				<div>© Wszelkie prawa zastrzeżone</div>
			</div>

			<div className="hidden sm:block lg:hidden mb-4">
				<div className="flex flex-row justify-around">
					<div className="w-1/2 font-bold text-base text-gray-25 text-center">
						<div>radca prawny Łukasz Szczepaniak</div>
						<div className="cursor-pointer">
							<Link href="/polityka">
								<div>polityka prywatności</div>
							</Link>
						</div>
						<div>© Wszelkie prawa zastrzeżone</div>
					</div>
					<div className="w-1/2 font-bold text-base text-gray-25 text-center">
						<div>tel.: 505 305 893</div>
						<div>e-mail: LS@radcapiaseczno.pl</div>
						<div>Piaseczno, ul. Sienkiewicza 8</div>
					</div>
				</div>
			</div>

			<div className="hidden lg:block flex flex-col justify-center text-center text-sm xl:text-base 2xl:text-lg">
				<div className="flex flex-row justify-center font-bold text-gray-25  mt-3 mb-4">
					<div className="lg:w-1/5">radca prawny Łukasz Szczepaniak</div>
					<div className="lg:w-1/5">telefon: 505 305 893</div>
					<div className="lg:w-1/5">e-mail: LS@radcapiaseczno.pl</div>
					<div className="lg:w-1/5">Piaseczno, ul. Sienkiewicza 8</div>
				</div>
				<div className="flex flex-row justify-center mb-4 xl:mb-6">
					<div className="mr-4">
						<div>© Wszelkie prawa zastrzeżone</div>
					</div>
					<div className="ml-4 cursor-pointer">
						<Link href="/polityka">
							<div>polityka prywatności</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
