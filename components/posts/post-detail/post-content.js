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
		<div className="">
			<button className="hidden sm:block mt-4 relative" type="button" onClick={() => router.back()}>
				<div className=" flex sm:flex-row items-center font-bold fixed text-gray-25 fixed">
					<div className="mr-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
							/>
						</svg>
					</div>
					<div>Powrót do listy</div>
				</div>
			</button>
			<div className="flex justify-center text-justify mb-20">
				<article className="w-11/12 md:w-10/12 lg:w-3/5 2xl:w-1/2 ">
					<PostHeader date={formattedDate} category={post.category} title={post.title} image={imagePath} />
					<div className="prose max-w-none">
						<ReactMarkdown>{post.content}</ReactMarkdown>
					</div>
					<button className="sm:hidden mt-4" type="button" onClick={() => router.back()}>
						<div className="flex sm:flex-row items-center font-bold  text-gray-25">
							<div className="mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
									/>
								</svg>
							</div>
							<div>Powrót do listy</div>
						</div>
					</button>
				</article>
			</div>
		</div>
	);
}

export default PostContent;
