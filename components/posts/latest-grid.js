import PostItem from './post-item';

function LatestGrid(props) {
	const { posts } = props;

	return (
		<div className="flex justify-center">
			<div className="sm:w-10/12 lg:w-11/12 xl:10/12 flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
				{posts.map((post) => <PostItem key={post.slug} post={post} />)}
			</div>
		</div>
	);
}

export default LatestGrid;
