import { useRef } from 'react';
import { Video, CloudinaryContext } from 'cloudinary-react';
const VideoPlayer = () => {
	const videoRef = useRef();
	return (
		<CloudinaryContext cloud_name="da7fhschq">
			<div className="md:hidden flex justify-center mb-8">
				<div className="w-11/12 md:w-3/4 xl:w-2/3">
					<Video
						publicId="https://res.cloudinary.com/da7fhschq/video/upload/v1630687933/na_stron%C4%99_high_ecbdpy.mp4"
						width="100%"
						// controls
						autoPlay
						loop
						innerRef={videoRef}
					/>
				</div>
			</div>
			<div className="hidden md:block mb-24">
				<div className="flex justify-center">
					<div className="w-11/12 md:w-3/4 xl:w-2/3">
						<Video
							publicId="https://res.cloudinary.com/da7fhschq/video/upload/v1630687919/na_stron%C4%99_long_ylpdxd.mp4"
							width="100%"
							// controls
							autoPlay
							loop
							innerRef={videoRef}
						/>
					</div>
				</div>
			</div>
		</CloudinaryContext>
	);
};
export default VideoPlayer;
