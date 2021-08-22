import Image from 'next/image';

function PostHeader(props) {
	function showCategoryInPolish() {
		if (props.category === 'spolka_jawna') {
			return 'spółka jawna';
		}
		if (props.category === 'spolka_partnerska') {
			return 'spółka partnerska';
		}
		if (props.category === 'spolka_komandytowa') {
			return 'spółka komandytowa';
		}
		if (props.category === 'spolka_z_o_o') {
			return 'spółka z ograniczoną odpowiedzialnością';
		}
		if (props.category === 'prosta_spolka_akcyjna') {
			return 'prosta spółka akcyjna';
		}
	}

	return (
		<header className="mb-2">
			<p id="more" className="text-sm md:text-lg text-lightblue font-bold uppercase mb-2">
				{showCategoryInPolish()}
			</p>
			<p className="text-xl md:text-3xl xl:text-4xl mb-2 font-bold">{props.title}</p>
			<p className="text-sm md:text-lg mb-2 text-gray-75">{props.date}</p>
			<Image src={props.image} alt={props.title} width={800} height={500} />
		</header>
	);
}

export default PostHeader;
