import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
	const { image, category, date, title, excerpt, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const linkPath = `posts/${slug}`;

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<div className="md:w-2/5 lg:w-1/4 mx-4">
			<ul className="flex justify-center ">
				<article className="sm:w-3/4 md:w-full mb-4">
					<Link href={linkPath}>
						<a>
							<Image className="temporary" src={imagePath} alt={title} width={800} height={400} />
							<style jsx global>{`
								.temporary {
									border-radius: 3px;
								}
							`}</style>
							<div className="uppercase">{category}</div>
							<div>{formattedDate}</div>
							<div className="font-bold">{title}</div>
							<div className="text-justify">{excerpt}</div>
						</a>
					</Link>
				</article>
			</ul>
		</div>
	);
}

export default PostItem;
