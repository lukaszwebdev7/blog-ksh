import Image from 'next/image';

function PostHeader(props) {
	return (
		<header>
			<p className="text-sm md:text-lg text-lightblue font-bold uppercase mb-2">{props.category}</p>
			<p className="text-xl md:text-3xl xl:text-4xl mb-2 font-bold">{props.title}</p>
			<p className="text-sm md:text-lg">{props.date}</p>
			<Image src={props.image} alt={props.title} width={800} height={500} />
		</header>
	);
}

export default PostHeader;
