import Link from 'next/link';

function PostItem(props) {
	const { image, category, date, title, excerpt, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const linkPath = `posts/${slug}`;

	return (
		<div className="lg:w-1/4 mx-4">
			<ul>
				<Link href={linkPath}>
					<a>
						<div>Image</div>
						<div>{category}</div>
						<div>{formattedDate}</div>
						<div>{title}</div>
						<div>{excerpt}</div>
					</a>
				</Link>
			</ul>
		</div>
	);
}

export default PostItem;
