import { useRouter } from 'next/router';

import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	PocketShareButton
} from 'react-share';

import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon, EmailIcon, PocketIcon } from 'react-share';

function SocialMediaShareButtons(props) {
	const { title, slug } = props.post;
	const { asPath } = useRouter();

	const pathWithoutTitle = asPath.split('/').slice(0, 3).join('/');
	const path = 'https://blog-ksh.vercel.app' + pathWithoutTitle + `/${slug}/`;

	return (
		<div className="flex flex-col sm:flex-row justify-end mt-8 mb-4 sm:items-center">
			<div
				style={{ fontFamily: 'Open Sans Condensed', letterSpacing: '2px' }}
				className="mr-2 mb-4 sm:mb-0 font-bold text-orange"
			>
				Podziel się lub zapisz:
			</div>
			<div className="flex justify-end">
				<div className="flex flex-row items-center">
					<div className="ml-2">
						<FacebookShareButton url={path}>
							<FacebookIcon logofillcolor="white" size={40} round={true} />
						</FacebookShareButton>
					</div>
					<div className="ml-2">
						<TelegramShareButton url={path} title={title}>
							<TelegramIcon logofillcolor="white" size={40} round={true} />
						</TelegramShareButton>
					</div>
					<div className="ml-2">
						<TwitterShareButton title={title} url={path}>
							<TwitterIcon logofillcolor="white" size={40} round={true} />
						</TwitterShareButton>
					</div>
					<div className="ml-2">
						<WhatsappShareButton title={title} separator url={path}>
							<WhatsappIcon logofillcolor="white" size={40} round={true} />
						</WhatsappShareButton>
					</div>
					<div className="ml-2">
						<EmailShareButton subject={title} separator url={path}>
							<EmailIcon logofillcolor="white" size={40} round={true} />
						</EmailShareButton>
					</div>
					<div className="ml-2">
						<PocketShareButton title={title} separator url={path}>
							<PocketIcon logofillcolor="white" size={40} round={true} />
						</PocketShareButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialMediaShareButtons;
