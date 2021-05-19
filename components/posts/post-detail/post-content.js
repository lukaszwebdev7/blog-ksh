import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const formattedDate = new Date(post.date).toLocaleString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	return (
		<article>
			<PostHeader date={formattedDate} category={post.category} title={post.title} image={imagePath} />
			<div className="prose max-w-none">
				<ReactMarkdown>{post.content}</ReactMarkdown>
			</div>
		</article>
	);
}

export default PostContent;
