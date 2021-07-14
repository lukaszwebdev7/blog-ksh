function Company() {
	return (
		<div className="flex justify-center mt-6 md:mt-20 mb-2 md:mb-32">
			<div className="sm:hidden w-11/12 border-2 border-gold p-4">
				<div className="">
					<img src="/images/mobile/umowa.jpg" alt="" />
				</div>
			</div>

			<div className="w-11/12 md:w-3/4 xl:w-2/3 flex justify-center hidden sm:block">
				<div className="p-4 sm:border-2 sm:border-gold">
					<img className="" src="/images/other/umowa.png" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Company;
