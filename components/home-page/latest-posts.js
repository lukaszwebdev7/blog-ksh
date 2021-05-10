import LatestGrid from '../posts/latest-grid';

function LatestPosts(props) {
	return (
		<section>
			<h2>Najnowsze wpisy</h2>
			<LatestGrid posts={props.posts} />
		</section>
	);
}

export default LatestPosts;
