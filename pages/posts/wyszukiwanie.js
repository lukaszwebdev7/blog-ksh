import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getAllPosts } from '../../lib/posts-util';
import SearchEngine from '../../components/posts/search-engine';

function Archive(props) {
	const posts = props.posts;

	const size = 8;

	function chunksMaker() {
		const result = [];
		for (let i = 0; i < posts.length; i += size) {
			result.push(posts.slice(i, i + size));
		}
		return result;
	}

	const chunks = chunksMaker();

	const [ number, setNumber ] = useState(1);

	const firstArray = chunks[number - 1];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	const [ counter, setCounter ] = useState(size);

	function loadPostsHandler(e, index, array) {
		setChosenArray(array);
		setNumber(index + 1);
		setCounter(number * size);
	}

	useEffect(
		() => {
			const stickyNumber = window.sessionStorage.getItem('numberOfArrayFromAll');
			const stickyArray = window.sessionStorage.getItem('arrayFromAll');

			if (stickyNumber !== null) {
				setNumber(Number(stickyNumber));
			}

			if (stickyArray !== null) {
				setChosenArray(JSON.parse(stickyArray));
			}
		},
		[ 'numberOfArrayFromAll' ],
		[ 'arrayFromAll' ]
	);

	useEffect(
		() => {
			window.sessionStorage.setItem('numberOfArrayFromAll', number),
				window.sessionStorage.setItem('arrayFromAll', JSON.stringify(chosenArray));
		},
		[ 'numberOfArrayFromAll', number ],
		[ 'arrayFromAll', chosenArray ]
	);

	const showFormattedDate = (date) => {
		const localeDate = new Date(date).toLocaleDateString('pl-PL', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
		return localeDate;
	};

	const active = 'mx-2 p-2 bg-orange-category focus:outline-none rounded text-white';
	const unactive = 'mx-2 p-2';

	return (
		<div className="flex justify-center mb-20 xl:mb-32">
			<div className="w-11/12 sm:w-3/4 md:w-10/12 xl:w-3/4">
				<div className="flex flex-col md:flex-row">
					{useEffect(() => {
						const burger = window.document.querySelector('.burger');
						const menu = window.document.querySelector('.menu');
						return menu.classList.add('-mt-6'), burger.classList.add('hidden');
					}, [])}
					<div className="font-bold md:w-5/12">
						<div className="mb-8">Wyszukiwanie:</div>
						<SearchEngine posts={posts} />
					</div>
					<div className="md:w-7/12">
						<div className="font-bold mb-6">Lista wszystkich postów:</div>
						<div className="lg:h-72 xl:h-72">
							{chosenArray.map((post, index) => (
								<div key={post.slug} className="my-2 cursor-pointer">
									<div className="flex flex-row">
										<div className="w-4 font-bold mr-1">
											{number >= 2 ? counter + index + 1 + '.' : index + 1 + '.'}
										</div>
										<div className="flex flex-row flex-wrap">
											<Link href={`/posts/${post.category}/${post.slug}`}>
												<div className="mr-2 text-lightblue hover:underline">{post.title}</div>
											</Link>

											<div className="">{`| ${showFormattedDate(post.date)}`}</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex justify-center mt-4 mb-16 md:mb-32">
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
			</div>
		</div>
	);
}

export default Archive;

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts
		}
	};
}
