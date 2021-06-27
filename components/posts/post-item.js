import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
	const { image, category, date, title, excerpt, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const linkPath = `/posts/${category}/${slug}`;

	const imagePath = `/images/posts/${slug}/${image}`;

	function showCategoryInPolish() {
		if (category === 'spolka_jawna') {
			return 'spółka jawna';
		}
		if (category === 'spolka_partnerska') {
			return 'spółka partnerska';
		}
		if (category === 'spolka_z_o_o') {
			return 'spółka z ograniczoną odpowiedzialnością';
		}
		if (category === 'prosta_spolka_akcyjna') {
			return 'prosta spółka akcyjna';
		}
	}

	return (
		<div className="md:w-2/5 lg:w-1/4 mx-4">
			<ul className="flex justify-center ">
				<article className="sm:w-3/4 md:w-full mb-10">
					<Link href={linkPath}>
						<a>
							<Image className="temporary" src={imagePath} alt={title} width={800} height={400} />
							<style jsx global>{`
								.temporary {
									border-radius: 3px;
								}
							`}</style>

							<div
								className={
									category === 'spolka_jawna' ? (
										'border-l-2 border-coffee text-coffee font-bold pl-4 mt-2 mb-4'
									) : '' || category === 'spolka_partnerska' ? (
										'border-l-2 border-blue-version text-blue-version font-bold pl-4 mt-2 mb-4'
									) : '' || category === 'spolka_z_o_o' ? (
										'border-l-2 border-violet text-violet font-bold pl-4 mt-2 mb-4'
									) : '' || category === 'prosta_spolka_akcyjna' ? (
										'border-l-2 border-amarant-one text-amarant-one font-bold pl-4 mt-2 mb-4'
									) : (
										''
									)
								}
							>
								{showCategoryInPolish()}
							</div>
							<div className="text-base text-gray-75">{formattedDate}</div>

							<div className="font-bold mb-6">{title}</div>

							<div className="flex justify-center">
								<div className="w-11/12 text-justify">{excerpt}</div>
							</div>
						</a>
					</Link>
				</article>
			</ul>
		</div>
	);
}

export default PostItem;
