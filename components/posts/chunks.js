import { useState } from 'react';

import PostItem from './post-item';

function Chunks(props) {
	const arrays = props.arrays;
	const posts = props.posts;

	const firstArray = arrays[0];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	const jawna = posts.filter((post) => post.category === 'spółka jawna');
	const zoo = posts.filter((post) => post.category === 'spółka z o.o.');
	const partnerska = posts.filter((post) => post.category === 'spółka partnerska');
	const prostaakcyjna = posts.filter((post) => post.category === 'prosta spółka akcyjna');

	function loadPostsHandler(e, array) {
		setChosenArray(array);
	}

	return (
		<div>
			<ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			{arrays.map((array, index) => (
				<span key={index} onClick={(e) => loadPostsHandler(e, array)}>
					{index + 1}
				</span>
			))}
			<div>
				<button onClick={() => setChosenArray(jawna)}>spółka jawna</button>
				<button onClick={() => setChosenArray(partnerska)}>spółka partnerska</button>
				<button onClick={() => setChosenArray(zoo)}>spółka z o.o.</button>
				<button onClick={() => setChosenArray(prostaakcyjna)}>prosta spółka akcyjna</button>
			</div>
		</div>
	);
}

export default Chunks;
