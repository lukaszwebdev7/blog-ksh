import LatestItem from './latest-item';

function LatestGrid(props) {
	const { posts } = props;

	return (
		<div className="flex justify-center">
			<div className="flex flex-col md:flex-row md:flex-wrap md:justify-around">
				{posts.map((post) => <LatestItem key={post.slug} post={post} />)}
			</div>
		</div>
	);
}

export default LatestGrid;
