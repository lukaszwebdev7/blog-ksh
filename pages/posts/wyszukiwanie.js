import { useEffect } from 'react';
import Link from 'next/link';

import { getAllPosts } from '../../lib/posts-util';
import SearchEngine from '../../components/posts/search-engine';

function Archive(props) {
	const posts = props.posts;

	const showFormattedDate = (date) => {
		const localeDate = new Date(date).toLocaleDateString('pl-PL', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
		return localeDate;
	};

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
						<ul>
							{posts.map((post, index) => (
								<div key={post.slug} className="my-2 cursor-pointer">
									<div className="flex flex-row">
										<div className="w-4 font-bold mr-1">{index + 1 + '.'}</div>
										<div className="flex flex-row flex-wrap">
											<Link href={`/posts/${post.category}/${post.slug}`}>
												<div className="mr-2 text-lightblue hover:underline">{post.title}</div>
											</Link>

											<div className="">{`| ${showFormattedDate(post.date)}`}</div>
										</div>
									</div>
								</div>
							))}
						</ul>
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
