function AddressData() {
	return (
		<div className="flex justify-center mb-20">
			<div className="w-11/12 md:w-10/12 xl:w-2/3 flex flex-col sm:flex-row sm:justify-around bg-indigo sm:py-10 text-white">
				<div className="md:w-1/4 flex justify-center">
					<div className="flex flex-col text-center">
						<div className="flex justify-center my-4">
							<div className="border-2 md:border-4 border-white rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-16 md:h-24 w-16 md:w-24 p-4"
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
						<div className="mb-4 font-bold mt-4 text-lg md:text-2xl">telefon kontaktowy</div>
						<div className="mb-4 text-lg md:text-xl">505 305 893</div>
					</div>
				</div>
				<div className="md:w-1/4 flex justify-center">
					<div className="flex flex-col text-center">
						<div className="flex justify-center my-4">
							<div className="border-2 md:border-4 border-white rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-16 md:h-24 w-16 md:w-24 p-4"
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
						<div className="mb-4 font-bold mt-4 text-lg md:text-2xl">kontakt e-mail</div>
						<div className="mb-4 text-lg md:text-xl" />
					</div>
				</div>

				<div className="md:w-1/4 flex justify-center">
					<div className="flex flex-col text-center">
						<div className="flex justify-center my-4">
							<div className="border-2 md:border-4 border-white rounded-full">
								<svg
									className="h-16 md:h-24 w-16 md:w-24 p-4"
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
						<div className="mb-4 font-bold mt-4 text-lg md:text-2xl">biuro kancelarii</div>
						<div className="mb-4 text-lg md:text-xl" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddressData;
