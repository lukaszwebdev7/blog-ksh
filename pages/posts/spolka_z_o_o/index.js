import { useState, useEffect } from 'react';

import PostItem from '../../../components/posts/post-item';

import { getAllPosts } from '../../../lib/posts-util';

function ZooPostsPage(props) {
	const [ number, setNumber ] = useState(1);
	const posts = props.posts;

	const filteredArray = posts.filter((post) => post.category === 'spolka_z_o_o');

	const size = 6;

	function chunksMaker() {
		const result = [];
		for (let i = 0; i < filteredArray.length; i += size) {
			result.push(filteredArray.slice(i, i + size));
		}
		return result;
	}

	const chunks = chunksMaker();

	const firstArray = chunks[number - 1];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	function loadPostsHandler(e, index, array) {
		setChosenArray(array);
		setNumber(index + 1);
	}

	useEffect(
		() => {
			const stickyNumber = window.sessionStorage.getItem('numberOfArrayZoo');
			const stickyArray = window.sessionStorage.getItem('arrayZoo');

			if (stickyNumber !== null) {
				setNumber(Number(stickyNumber));
			}

			if (stickyArray !== null) {
				setChosenArray(JSON.parse(stickyArray));
			}
		},
		[ 'numberOfArrayZoo' ],
		[ 'arrayZoo' ]
	);

	useEffect(
		() => {
			window.sessionStorage.setItem('numberOfArrayZoo', number),
				window.sessionStorage.setItem('arrayZoo', JSON.stringify(chosenArray));
		},
		[ 'numberOfArrayZoo', number ],
		[ 'arrayZoo', chosenArray ]
	);

	const active = 'mx-2 p-2 bg-orange-category focus:outline-none rounded text-white';
	const unactive = 'mx-2 p-2';

	return (
		<div className="flex justify-center">
			<div className="w-11/12 2xl:w-10/12">
				<ul className=" flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly">
					{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
				</ul>
				<div className="flex justify-center mb-16 md:mb-32">
					{chunks.map((array, index) => (
						<button
							className={index + 1 === number && chunks.length >= 2 ? active : unactive}
							key={index}
							onClick={(e) => loadPostsHandler(e, index, array)}
						>
							{chunks.length >= 2 ? index + 1 : ''}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
export default ZooPostsPage;

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts
		}
	};
}
