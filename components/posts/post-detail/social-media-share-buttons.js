import { useRouter } from 'next/router';

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

import { FacebookIcon, FacebookMessengerIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from 'react-share';

function SocialMediaShareButtons() {
	const { asPath } = useRouter();

	return (
		<div className="flex flex-col sm:flex-row justify-end mt-8 sm:items-center">
			<div
				style={{ fontFamily: 'Open Sans Condensed', letterSpacing: '2px' }}
				className="mr-2 font-bold text-orange mb-2 sm:mb-0"
			>
				Ciekawe ? Udostępnij na:
			</div>
			<div className="flex justify-center sm:justify-start">
				<div className="flex flex-row items-center">
					<div className="mr-2">
						<FacebookShareButton url={asPath}>
							<FacebookIcon logoFillColor="white" size={40} round={true} />
						</FacebookShareButton>
					</div>
					<div className="mx-2">
						<LinkedinShareButton url={asPath}>
							<LinkedinIcon logoFillColor="white" size={40} round={true} />
						</LinkedinShareButton>
					</div>
					<div className="mx-2">
						<TwitterShareButton url={asPath}>
							<TwitterIcon logoFillColor="white" size={40} round={true} />
						</TwitterShareButton>
					</div>
					<div className="ml-2">
						<WhatsappShareButton url={asPath}>
							<WhatsappIcon logoFillColor="white" size={40} round={true} />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaShareButtons;
