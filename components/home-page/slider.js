import { useState } from 'react';

function PhotoSlider() {
	let slidesMobile = [
		'/images/mobile/1.png',
		'/images/mobile/2.png',
		'/images/mobile/3.png',
		'/images/mobile/4.png',
		'/images/mobile/5.png',
		'/images/mobile/6.png',
		'/images/mobile/7.png',
		'/images/mobile/8.png'
	];

	let slides = [
		'/images/other/1.png',
		'/images/other/2.png',
		'/images/other/3.png',
		'/images/other/4.png',
		'/images/other/5.png',
		'/images/other/6.png',
		'/images/other/7.png',
		'/images/other/8.png'
	];

	const [ photoMobile, setPhotoMobile ] = useState(slidesMobile[0]);
	const [ photo, setPhoto ] = useState(slides[0]);

	function photoHandlerLeftMobile() {
		const number = parseInt(photoMobile.slice(15, -4));
		console.log(number);
		let indexOfPhoto = number - 1;
		indexOfPhoto--;

		if (indexOfPhoto === -1) {
			return setPhotoMobile(slidesMobile[0]);
		}
		setPhotoMobile(slidesMobile[indexOfPhoto]);
	}

	function photoHandlerLeft() {
		const number = parseInt(photo.slice(14, -4));
		let indexOfPhoto = number - 1;
		indexOfPhoto--;
		console.log(indexOfPhoto);
		if (indexOfPhoto === -1) {
			return setPhoto(slides[0]);
		}
		setPhoto(slides[indexOfPhoto]);
	}

	function photoHandlerRightMobile() {
		const number = parseInt(photoMobile.slice(15, -4));
		console.log(number);
		let indexOfPhoto = number - 1;
		++indexOfPhoto;

		if (indexOfPhoto === 8) {
			return setPhotoMobile(slidesMobile[0]);
		}
		setPhotoMobile(slidesMobile[indexOfPhoto]);
	}

	function photoHandlerRight() {
		const number = parseInt(photo.slice(14, -4));
		let indexOfPhoto = number - 1;
		++indexOfPhoto;
		console.log(indexOfPhoto);
		if (indexOfPhoto === 8) {
			return setPhoto(slides[0]);
		}
		setPhoto(slides[indexOfPhoto]);
	}

	return (
		<div className="">
			<div className="md:hidden flex flex-col justify-center">
				<div className="flex justify-center">
					<img src="/images/mobile/ask.png" />
				</div>
				<div className="flex justify-center">
					<div className="w-11/12 xl:w-10/12 mb-16 md:mb-32 relative">
						<button
							className="absolute top:20 md:top-80 xl:top-96 left-4 text-white"
							onClick={() => photoHandlerLeftMobile()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							className="absolute top:20 md:top-80 xl:top-96 right-4 text-white"
							onClick={() => photoHandlerRightMobile()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
								<path
									fillRule="evenodd"
									d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<img src={photoMobile} alt="photo" />
					</div>
				</div>
			</div>

			<div className="hidden md:block flex justify-center">
				<div className="flex flex-row md:w-10/12 xl:w-3/4 m-auto">
					<div className="h-96 w-96 md:mr-10 xl:mr-0">
						<img src="/images/other/ask.png" />
					</div>
					<div className=" w-11/12 xl:w-10/12 mb-16 md:mb-32 relative">
						<button
							className="absolute top:20 md:top-72 sm:left-12 md:left-8 2xl:left-48 text-white"
							onClick={() => photoHandlerLeft()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<button
							className="absolute top:20 md:top-72 md:right-10 xl:right-12 2xl:right-8 text-white"
							onClick={() => photoHandlerRight()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
								<path
									fillRule="evenodd"
									d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<div className="flex justify-end">
							<img src={photo} alt="photo" className="h-96" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PhotoSlider;
