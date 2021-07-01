import { useState } from 'react';

function PhotoSlider() {
	let slides = [ '/images/other/1.jpg', '/images/other/2.jpg', '/images/other/3.jpg' ];

	const [ photo, setPhoto ] = useState(slides[0]);

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

	function photoHandlerRight() {
		const number = parseInt(photo.slice(14, -4));
		let indexOfPhoto = number - 1;
		++indexOfPhoto;
		console.log(indexOfPhoto);
		if (indexOfPhoto === 3) {
			return setPhoto(slides[2]);
		}
		setPhoto(slides[indexOfPhoto]);
	}

	return (
		<div className="flex justify-center">
			<div className="w-11/12 xl:w-3/4 md:mb-32 relative">
				<button
					className="absolute top:20 md:top-80 xl:top-96 left-4 text-white"
					onClick={() => photoHandlerLeft()}
				>
					previous
				</button>
				<button
					className="absolute top:20 md:top-80 xl:top-96 right-4 text-white"
					onClick={() => photoHandlerRight()}
				>
					next
				</button>
				<img src={photo} alt="photo" />
			</div>
		</div>
	);
}

export default PhotoSlider;
