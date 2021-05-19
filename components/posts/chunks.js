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
			<ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			{arrays.map((array, index) => (
				<span key={index} onClick={(e) => loadPostsHandler(e, array)}>
					{index + 1}
				</span>
			))}
		</div>
	);
}

export default Chunks;
