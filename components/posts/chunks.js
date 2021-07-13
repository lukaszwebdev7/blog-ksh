import { useState } from 'react';

import PostItem from './post-item';

function Chunks(props) {
	const arrays = props.arrays;
	const firstArray = arrays[0];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	function loadPostsHandler(e, array) {
		setChosenArray(array);
	}

	return (
		<div>
			<ul className="flex flex-col sm:flex-row sm:flex-wrap lg:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			<div className="flex justify-center">
				{arrays.map((array, index) => (
					<button key={index} onClick={(e) => loadPostsHandler(e, array)}>
						{arrays.length >= 2 ? index + 1 : ''}
					</button>
				))}
			</div>
		</div>
	);
}

export default Chunks;
