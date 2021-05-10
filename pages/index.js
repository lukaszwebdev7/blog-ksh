import Head from 'next/head';
import { Fragment } from 'react';
import SectionOne from '../components/home-page/section-one';
import SectionTwo from '../components/home-page/section-two';

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
			<SectionOne />
			<SectionTwo />
			<LatestPosts posts={props.posts} />
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
