function SectionOne() {
	return (
		<div className="flex justify-center mb-12 md:mb-32">
			<div className="flex flex-col sm:flex-row w-11/12 md:w-9/12">
				<div className="sm:w-1/3">
					<img src="/images/other/lukasz.jpg" alt="zdjęcie-lukasz" className="rounded" />
				</div>
				<div className="sm:w-2/3 sm:pl-20 mt-6 sm:mt-0 ">
					<div className="flex justify-center w-full xl:h-full md:p-6">
						<div className="flex flex-col md:w-11/12 lg:w-full text-justify lg:text-base xl:text-xl tracking-wide">
							<div className="mb-2 font-bold">Łukasz Szczepaniak</div>
							<div className="uppercase mb-8">radca prawny</div>
							<div className="mb-2 ">
								Ukończyłem studia magisterskie na kierunku prawo na Wydziale Prawa i Administracji
								Uniwersytetu Marii Curie-Skłodowskiej w Lublinie. Aplikację radcowską odbyłem w{' '}
								<strong>Okręgowej Izbie Radców Prawnych w Lublinie</strong>
								. W Akademii Leona Koźmińskiego w Warszawie ukończyłem studia podyplomowe z zakresu
								Prawa zamówień publicznych, a w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie
								studia podyplomowe z zakresu Pośrednictwa w obrocie nieruchomościami.
							</div>
							<div className="my-2">
								Świadczę profesjonalną pomoc prawną, która może mieć charakter zarówno stały, jak i
								jednostkowy.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionOne;
