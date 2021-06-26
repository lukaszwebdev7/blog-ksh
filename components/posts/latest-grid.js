import PostItem from './post-item';

function LatestGrid(props) {
	const { posts } = props;

	return (
		<div className="flex justify-center">
			<div className="flex flex-col md:flex-row md:flex-wrap md:justify-around">
				{posts.map((post) => <PostItem key={post.slug} post={post} />)}
			</div>
		</div>
	);
}

export default LatestGrid;
