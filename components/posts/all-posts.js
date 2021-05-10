import PostGrid from './latest-grid';

function AllPosts(props) {
	return (
		<section>
			<h1>All Posts</h1>
			<div>
				<PostGrid posts={props.posts} />
			</div>
		</section>
	);
}

export default AllPosts;
