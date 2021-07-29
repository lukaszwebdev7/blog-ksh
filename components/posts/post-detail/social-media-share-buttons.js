import { useRouter } from 'next/router';

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from 'react-share';

function SocialMediaShareButtons(props) {
	const { title } = props;
	const { asPath } = useRouter();
	const pathname = window.location.pathname;

	console.log(title);
	console.log(pathname);

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
						<FacebookShareButton>
							<FacebookIcon logofillcolor="white" size={40} round={true} />
						</FacebookShareButton>
					</div>
					<div className="mx-2">
						<LinkedinShareButton title={title} source={asPath}>
							<LinkedinIcon logofillcolor="white" size={40} round={true} />
						</LinkedinShareButton>
					</div>
					<div className="mx-2">
						<TwitterShareButton url={''}>
							<TwitterIcon logofillcolor="white" size={40} round={true} />
						</TwitterShareButton>
					</div>
					<div className="ml-2">
						<WhatsappShareButton url={''}>
							<WhatsappIcon logofillcolor="white" size={40} round={true} />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaShareButtons;
