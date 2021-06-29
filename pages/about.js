import SectionTwo from '../components/home-page/section-two';

function About() {
	return (
		<div>
			<div className="flex justify-center">
				<div className="flex flex-col sm:flex-row w-9/12">
					<div className="sm:w-1/3">
						<img src="/images/other/lukasz.jpg" alt="zdjęcie-lukasz" className="rounded" />
					</div>
					<div className="sm:w-2/3 sm:pl-20 mt-6 sm:mt-0">
						<div className="flex justify-center w-full">
							<div className="flex flex-col w-11/12 lg:w-full text-justify lg:text-base xl:text-xl tracking-wide">
								<div className="mb-2">
									Ukończyłem studia magisterskie na kierunku prawo na Wydziale Prawa i Administracji
									Uniwersytetu Marii Curie-Skłodowskiej w Lublinie. Aplikację radcowską odbyłem w
									Okręgowej Izbie Radców Prawnych w Lublinie. W Akademii Leona Koźmińskiego w
									Warszawie ukończyłem studia podyplomowe z zakresu Prawa zamówień publicznych, a w
									Szkole Głównej Gospodarstwa Wiejskiego w Warszawie studia podyplomowe z zakresu
									Pośrednictwa w obrocie nieruchomościami.
								</div>
								<div className="my-2">
									Świadczę dla przedsiębiorców profesjonalną pomoc prawną, która może mieć charakter
									zarówno stały, jak i jednostkowy.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<SectionTwo />
			</div>
		</div>
	);
}

export default About;
