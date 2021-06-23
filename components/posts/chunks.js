import { useState, useEffect } from 'react';

import PostItem from './post-item';

function Chunks(props) {
	const arrays = props.arrays;
	const firstArray = arrays[0];

	const [ chosenPageIndex, setChosenPageIndex ] = useState(arrays);
	const [ chosenArray, setChosenArray ] = useState(firstArray);

	const posts = props.posts;

	const jawna = posts.filter((post) => post.category === 'spółka jawna');
	const partnerska = posts.filter((post) => post.category === 'spółka partnerska');
	const zoo = posts.filter((post) => post.category === 'spółka z o.o.');
	const prostaakcyjna = posts.filter((post) => post.category === 'prosta spółka akcyjna');

	const size = 6;

	function jawnaChunksMaker() {
		const result = [];
		for (let i = 0; i < jawna.length; i += size) {
			result.push(jawna.slice(i, i + size));
		}
		return result;
	}

	function partnerskaChunksMaker() {
		const result = [];
		for (let i = 0; i < partnerska.length; i += size) {
			result.push(partnerska.slice(i, i + size));
		}
		return result;
	}

	function zooChunksMaker() {
		const result = [];
		for (let i = 0; i < zoo.length; i += size) {
			result.push(zoo.slice(i, i + size));
		}
		return result;
	}

	function prostaakcyjnaChunksMaker() {
		const result = [];
		for (let i = 0; i < prostaakcyjna.length; i += size) {
			result.push(prostaakcyjna.slice(i, i + size));
		}
		return result;
	}

	const jawnaChunks = jawnaChunksMaker();
	const partnerskaChunks = partnerskaChunksMaker();
	const zooChunks = zooChunksMaker();
	const prostaakcyjnaChunks = prostaakcyjnaChunksMaker();

	const jawnaFirstPage = jawnaChunks[0];
	const partnerskaFirstPage = partnerskaChunks[0];
	const zooFirstPage = zooChunks[0];
	const prostaakcyjnaFirstPage = prostaakcyjnaChunks[0];

	function loadPostsHandler(e, array) {
		setChosenArray(array);
	}

	function activeBackground(id) {
		const btnList = document.getElementsByClassName('active');
		const firstButton = document.getElementById('1');
		const secondButton = document.getElementById('2');
		const thirdButton = document.getElementById('3');
		const fourthButton = document.getElementById('4');
		const fifthButton = document.getElementById('5');

		const first = btnList.item(0).id;
		const second = btnList.item(1).id;
		const third = btnList.item(2).id;
		const fourth = btnList.item(3).id;
		const fifth = btnList.item(4).id;

		if (first === id) {
			firstButton.classList.add('bg-yellow-box');
		}
		if (first != id) {
			firstButton.classList.remove('bg-yellow-box');
		}
		if (second === id) {
			secondButton.classList.add('bg-yellow-box');
		}
		if (second != id) {
			secondButton.classList.remove('bg-yellow-box');
		}
		if (third === id) {
			thirdButton.classList.add('bg-yellow-box');
		}
		if (third != id) {
			thirdButton.classList.remove('bg-yellow-box');
		}
		if (fourth === id) {
			fourthButton.classList.add('bg-yellow-box');
		}
		if (fourth != id) {
			fourthButton.classList.remove('bg-yellow-box');
		}
		if (fifth === id) {
			fifthButton.classList.add('bg-yellow-box');
		}
		if (fifth != id) {
			fifthButton.classList.remove('bg-yellow-box');
		}
	}

	return (
		<div>
			<div className="flex flex-col md:flex-row mb-6">
				<div className="mr-2">Filtrowanie: </div>
				<button
					id={1}
					className="mx-2 active bg-yellow-box focus:outline-none"
					onClick={(id) => (
						setChosenArray(firstArray), setChosenPageIndex(arrays), activeBackground(id.target.id)
					)}
				>
					wszystkie
				</button>
				<button
					id={2}
					className="mx-2 active focus:outline-none"
					onClick={(id) => (
						setChosenArray(jawnaFirstPage), setChosenPageIndex(jawnaChunks), activeBackground(id.target.id)
					)}
				>
					spółka jawna
				</button>
				<button
					id={3}
					className="mx-2 active focus:outline-none"
					onClick={(id) => (
						setChosenArray(partnerskaFirstPage),
						setChosenPageIndex(partnerskaChunks),
						activeBackground(id.target.id)
					)}
				>
					spółka partnerska
				</button>
				<button
					id={4}
					className="mx-2 active focus:outline-none"
					onClick={(id) => (
						setChosenArray(zooFirstPage), setChosenPageIndex(zooChunks), activeBackground(id.target.id)
					)}
				>
					spółka z o.o.
				</button>
				<button
					id={5}
					className="ml-2 active focus:outline-none"
					onClick={(id) => (
						setChosenArray(prostaakcyjnaFirstPage),
						setChosenPageIndex(prostaakcyjnaChunks),
						activeBackground(id.target.id)
					)}
				>
					prosta spółka akcyjna
				</button>
			</div>
			<ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around">
				{chosenArray.map((post) => <PostItem key={post.slug} post={post} />)}
			</ul>
			<div className="flex justify-center">
				{chosenPageIndex.map((array, index) => (
					<button key={index} onClick={(e) => loadPostsHandler(e, array)}>
						{chosenPageIndex.length >= 2 ? index + 1 : ''}
					</button>
				))}
			</div>
		</div>
	);
}

export default Chunks;
