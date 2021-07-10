function Header() {
	return (
		<div className="flex justify-center mt-20 mb-16 md:mb-32">
			<div className="sm:hidden w-11/12 ">
				<div className="">
					<img src="/images/mobile/header.jpg" alt="" />
				</div>
			</div>

			<div className="hidden sm:block flex justify-center ">
				<div className="md:w-10/12 m-auto">
					<img className="" src="/images/other/header.png" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Header;
