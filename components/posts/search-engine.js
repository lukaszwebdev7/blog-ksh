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
				<button className="bg-category py-1 px-2 hover:text-orange" onClick={(e) => searchHandler(e)}>
					Wyszukaj
				</button>
				<button />
			</div>
			<div className="mb-6 md:mb-0 md:mr-6">
				{sValue !== null && sValue !== '' ? (
					posts.map((post, index) => {
						if (post.title.includes(sValue) || post.content.includes(sValue)) {
							return (
								<div className="flex flex-row text-orange">
									<div className="mr-1">{`${index + 1}.`}</div>
									<div className="" key={post.slug}>
										<Link href={`/posts/${post.category}/${post.slug}`}>{post.title}</Link>
									</div>
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
