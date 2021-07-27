import { useState, useEffect } from 'react';

import PostItem from './post-item';

function Chunks(props) {
	const [ number, setNumber ] = useState(1);
	const arrays = props.arrays;
	const firstArray = arrays[number - 1];

	const [ chosenArray, setChosenArray ] = useState(firstArray);

	function loadPostsHandler(e, index, array) {
		setChosenArray(array);
		setNumber(index + 1);
	}

	useEffect(
		() => {
			const stickyNumber = window.sessionStorage.getItem('numberOfArray');
			const stickyArray = window.sessionStorage.getItem('array');

			if (stickyNumber !== null) {
				setNumber(Number(stickyNumber));
			}

			if (stickyArray !== null) {
				setChosenArray(JSON.parse(stickyArray));
			}
		},
		[ 'numberOfArray' ],
		[ 'array' ]
	);

	useEffect(
		() => {
			window.sessionStorage.setItem('numberOfArray', number),
				window.sessionStorage.setItem('array', JSON.stringify(chosenArray));
		},
		[ 'numberOfArray', number ],
		[ 'array', chosenArray ]
	);

	const active = 'mx-2 p-2 bg-orange-category focus:outline-none rounded text-white';
	const unactive = 'mx-2 p-2';

	return (
		<div>
			<ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			<div className="flex justify-center">
				{arrays.map((array, index) => (
					<button
						className={index + 1 === number && arrays.length >= 2 ? active : unactive}
						key={index}
						id={index + 1}
						onClick={(e) => loadPostsHandler(e, index, array)}
					>
						{arrays.length >= 2 ? index + 1 : ''}
					</button>
				))}
			</div>
		</div>
	);
}

export default Chunks;
