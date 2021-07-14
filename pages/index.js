import Head from 'next/head';
import Header from '../components/home-page/header';
import Company from '../components/home-page/company';
import PhotoSlider from '../components/home-page/slider';
import LatestPosts from '../components/home-page/latest-posts';

import { getLatestPosts } from '../lib/posts-util';

function HomePage(props) {
	return (
		<div className="">
			<Head>
				<title>Blog o spółkach</title>
				<meta
					name="description"
					content="spółka jawna || spółka komandytowa || spółka z ograniczoną odpowiedzialnością || prosta spółka akcyjna"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<LatestPosts posts={props.posts} />
			<Company />
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
		}
	};
}
