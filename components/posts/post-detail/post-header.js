import Image from 'next/image';

function PostHeader(props) {
	return (
		<header>
			<h3>{props.date}</h3>
			<h3>{props.category}</h3>
			<h1>{props.title}</h1>
			<Image src={props.image} alt={props.title} width={200} height={150} />
		</header>
	);
}

export default PostHeader;
