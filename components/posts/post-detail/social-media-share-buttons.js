import { useRouter } from 'next/router';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

function SocialMediaShareButtons(props) {
	const { title, slug } = props.post;
	const { asPath } = useRouter();

	const pathWithoutTitle = asPath.split('/').slice(0, 3).join('/');
	const path = 'https://blog-ksh.vercel.app' + pathWithoutTitle + `/${slug}/`;

	return (
		<div className="flex flex-row justify-end mt-8 items-center">
			<div
				style={{ fontFamily: 'Open Sans Condensed', letterSpacing: '2px' }}
				className="mr-2 font-bold text-orange"
			>
				Ciekawe ? Udostępnij na:
			</div>
			<div className="flex justify-start">
				<div className="flex flex-row items-center">
					<div className="mr-2">
						<FacebookShareButton url={path}>
							<FacebookIcon logofillcolor="white" size={40} round={true} />
						</FacebookShareButton>
					</div>
					<div className="mx-2">
						<TwitterShareButton title={title} url={path}>
							<TwitterIcon logofillcolor="white" size={40} round={true} />
						</TwitterShareButton>
					</div>
					<div className="ml-2">
						<WhatsappShareButton title={title} separator url={path}>
							<WhatsappIcon logofillcolor="white" size={40} round={true} />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaShareButtons;
