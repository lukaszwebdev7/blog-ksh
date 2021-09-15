import Head from 'next/head';
import Header from '../components/home-page/header';
import Company from '../components/home-page/company';
import PhotoSlider from '../components/home-page/slider';
import LatestPosts from '../components/home-page/latest-posts';

import dynamic from 'next/dynamic';

const NativeVideo = dynamic(() => import('../components/cloudinary/native-video-player'), { ssr: false });

import { getLatestPosts } from '../lib/posts-util';

function HomePage(props) {
	return (
		<div className="">
			<Head>
				<title>Blog o spółkach</title>
				<meta
					name="description"
					content="Radca Prawny Łukasz Szczepaniak Piaseczno Praktyka: spółka jawna || spółka partnerska || spółka komandytowa || spółka z o.o. || prosta spółka akcyjna"
				/>
				<title>Kancelaria Radcy Prawnego</title>
			</Head>

			<Header />
			<LatestPosts posts={props.posts} />
			<Company />
			<NativeVideo />
			<PhotoSlider />
		</div>
	);
}

export default HomePage;

export function getStaticProps() {
	const latestPosts = getLatestPosts();

	return {
		props: {
			posts: latestPosts
		},
		revalidate: 60
	};
}
