import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage(props) {
	const posts = props.posts;

	return (
		<ul>
			<div>Wszystkie posty</div>
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
