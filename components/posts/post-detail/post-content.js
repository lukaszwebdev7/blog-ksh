import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';

import { useRouter } from 'next/router';

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const formattedDate = new Date(post.date).toLocaleString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const router = useRouter();

	return (
		<div className="flex justify-center text-justify mb-20">
			<article className="w-11/12 md:w-10/12 lg:w-3/5 2xl:w-1/2">
				<PostHeader date={formattedDate} category={post.category} title={post.title} image={imagePath} />
				<div className="prose max-w-none">
					<ReactMarkdown>{post.content}</ReactMarkdown>
				</div>
				<button type="button" onClick={() => router.back()}>
					Powrót do listy postów
				</button>
				<div className="mt-4">Inne z tej kategorii: component {post.category}</div>
			</article>
		</div>
	);
}

export default PostContent;
