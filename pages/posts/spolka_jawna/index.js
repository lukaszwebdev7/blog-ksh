import { useState } from 'react';

import PostItem from '../../../components/posts/post-item';

import { getAllPosts } from '../../../lib/posts-util';

function JawnaPostsPage(props) {
	const posts = props.posts;

	const filteredArray = posts.filter((post) => post.category === 'spolka_jawna');

	const size = 2;

	function chunksMaker() {
		const result = [];
		for (let i = 0; i < filteredArray.length; i += size) {
			result.push(filteredArray.slice(i, i + size));
		}
		return result;
	}

	const chunks = chunksMaker();

	const firstArray = chunks[0];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	return (
		<div>
			<ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			<div className="flex justify-center">
				{chunks.map((array, index) => (
					<button key={index} onClick={() => setChosenArray(array)}>
						{chunks.length >= 2 ? index + 1 : ''}
					</button>
				))}
			</div>
		</div>
	);
}

export default JawnaPostsPage;

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts
		}
	};
}
