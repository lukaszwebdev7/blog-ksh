import { getAllPosts } from '../../lib/posts-util';

import Chunks from '../../components/posts/chunks';

function AllPostsPage(props) {
	const posts = props.posts;

	const size = 6;

	function chunksMaker() {
		const result = [];
		for (let i = 0; i < posts.length; i += size) {
			result.push(posts.slice(i, i + size));
		}
		return result;
	}

	const arrays = chunksMaker();

	return (
		<ul className="mb-32">
			<Chunks posts={posts} arrays={arrays} />
		</ul>
	);
}

export default AllPostsPage;

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts
		}
	};
}
