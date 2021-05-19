import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';

import { getPostsFiles, getPostData } from '../../lib/posts-util';

function SinglePost(props) {
	return (
		<div>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt} />
			</Head>
			<div>
				<PostContent post={props.post} />
			</div>
		</div>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData
		},
		revalidate: 600
	};
}

export function getStaticPaths() {
	const postFilesNames = getPostsFiles();
	const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false
	};
}

export default SinglePost;
