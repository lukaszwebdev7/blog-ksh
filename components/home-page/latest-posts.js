import LatestGrid from '../posts/latest-grid';

function LatestPosts(props) {
	return (
		<section className="mt-16">
			<link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet" />
			<h2
				style={{ fontFamily: 'Lobster Two', letterSpacing: '2px' }}
				className="mb-12 ml-4 xl:ml-16 text-lg sm:text-2xl md:text-5xl text-gray font-bold"
			>
				Najnowsze artykuły:
			</h2>
			<LatestGrid posts={props.posts} />
		</section>
	);
}

export default LatestPosts;
