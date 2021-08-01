import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

function SearchEngine(props) {
	const posts = props.posts;

	const enteredValue = useRef();
	const [ sValue, setSValue ] = useState(null);

	useEffect(() => {
		const searchedValue = sessionStorage.getItem('sValue');
		setSValue(searchedValue);
	}, []);

	const searchHandler = (e) => {
		e.preventDefault();

		const searchedValue = enteredValue.current.value;
		setSValue(searchedValue);
		sessionStorage.setItem('sValue', searchedValue);
	};

	return (
		<div>
			<div className="mb-4">
				<input
					className="border border-4 border-lightblue rounded focus:outline-none focus:ring focus:border-blue-300 mr-4"
					name="search"
					type="search"
					placeholder="szukane słowo..."
					ref={enteredValue}
				/>
				<button onClick={(e) => searchHandler(e)}>Wyszukaj</button>
				<button />
			</div>
			<div className="xxx">
				{sValue !== null ? (
					posts.map((post) => {
						if (post.title.includes(sValue) || post.content.includes(sValue)) {
							return (
								<div className="text-orange" key={post.slug}>
									<Link href={`/posts/${post.category}/${post.slug}`}>{post.title}</Link>
								</div>
							);
						}
					})
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default SearchEngine;
