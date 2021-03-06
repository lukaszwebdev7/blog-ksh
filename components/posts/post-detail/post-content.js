import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import SocialMediaShareButtons from './social-media-share-buttons';

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
		<div className="flex justify-center lg:mb-16">
			<div className="w-11/12 sm:w-3/4 lg:w-full">
				<button className="hidden lg:block mt-4 relative" type="button" onClick={() => router.back()}>
					<div className=" flex lg:flex-row items-center font-bold fixed text-gray-25 fixed">
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
						<div>Poprzednia strona</div>
					</div>
				</button>
				<div className="flex justify-center text-justify mb-20">
					<article className="w-11/12 md:w-10/12 lg:w-3/5 2xl:w-1/2 ">
						<PostHeader
							date={formattedDate}
							category={post.category}
							title={post.title}
							image={imagePath}
							video={post.video}
						/>
						<div className="prose max-w-none">
							<ReactMarkdown>{post.content}</ReactMarkdown>
						</div>
						<div className={post.video ? 'mt-10 mb-24' : ''}>
							<div className="flex justify-center">
								<div className="sm:hidden">
									{post.video ? (
										<iframe
											width="352"
											height="198"
											src={post.video}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										/>
									) : (
										''
									)}
								</div>
								<div className="hidden sm:block lg:hidden">
									{post.video ? (
										<iframe
											width="500"
											height="281"
											src={post.video}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										/>
									) : (
										''
									)}
								</div>
								<div className="hidden lg:block xl:hidden">
									{post.video ? (
										<iframe
											width="580"
											height="326"
											src={post.video}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										/>
									) : (
										''
									)}
								</div>
								<div className="hidden xl:block 2xl:hidden">
									{post.video ? (
										<iframe
											width="640"
											height="360"
											src={post.video}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										/>
									) : (
										''
									)}
								</div>
								<div className="hidden 2xl:block">
									{post.video ? (
										<iframe
											width="720"
											height="405"
											src={post.video}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
										/>
									) : (
										''
									)}
								</div>
							</div>
						</div>
						<SocialMediaShareButtons post={post} />
						<button className="lg:hidden mt-6" type="button" onClick={() => router.back()}>
							<div className="flex lg:flex-row items-center font-bold  text-gray-25">
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
								<div>Poprzednia strona</div>
							</div>
						</button>
					</article>
				</div>
				<div className="flex justify-center">
					<div className="mb-4 xl:mb-0 text-sm w-11/12 md:w-10/12 lg:w-7/12 2xl:w-1/2 text-justify">
						* Blog spolkaaktywnie.pl powsta?? w celu informowania o wykonywaniu zawodu. Przedstawione tu
						publikacje nie s??u???? udzielaniu porad prawnych i nie mog?? stanowi?? podstawy podejmowania dzia??a??
						w oparciu o ich tre????. Udzielenie porady prawnej wymaga uprzedniej analizy okoliczno??ci
						konkretnej sprawy.
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostContent;
