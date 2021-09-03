import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { Cloudinary } from 'cloudinary-core';
import { useEffect } from 'react';

const NativeVideoPlayer = () => {
	const cld = new Cloudinary({ cloud_name: 'da7fhschq' });
	useEffect(() => {
		const videoPlayer = cld.videoPlayer('video-player', {
			responsive: true,
			muted: true,
			loop: true,
			autoplay: true,
			width: '720'
		});
		videoPlayer.source(
			'https://res.cloudinary.com/da7fhschq/video/upload/v1630687919/na_stron%C4%99_long_ylpdxd.mp4'
		);
	});
	return (
		<div className="hidden lg:block">
			<div className="flex justify-center mb-32">
				<div className="">
					<video id="video-player" />
				</div>
			</div>
		</div>
	);
};
export default NativeVideoPlayer;
