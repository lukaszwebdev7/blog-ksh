import PostItem from './post-item';

function LatestGrid(props) {
	const { posts } = props;

	return (
		<ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
			{posts.map((post) => <PostItem key={post.slug} post={post} />)}
		</ul>
	);
}

export default LatestGrid;
