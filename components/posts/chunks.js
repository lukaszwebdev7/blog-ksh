import { useState } from 'react';

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

	return (
		<div>
			<div className="flex flex-col md:flex-row mb-6">
				<div className="mr-2">Filtrowanie: </div>
				<button className="mx-2" onClick={() => (setChosenArray(firstArray), setChosenPageIndex(arrays))}>
					wszystkie
				</button>
				<button
					className="mx-2"
					onClick={() => (setChosenArray(jawnaFirstPage), setChosenPageIndex(jawnaChunks))}
				>
					spółka jawna
				</button>
				<button
					className="mx-2"
					onClick={() => (setChosenArray(partnerskaFirstPage), setChosenPageIndex(partnerskaChunks))}
				>
					spółka partnerska
				</button>
				<button className="mx-2" onClick={() => (setChosenArray(zooFirstPage), setChosenPageIndex(zooChunks))}>
					spółka z o.o.
				</button>
				<button
					className="ml-2"
					onClick={() => (setChosenArray(prostaakcyjnaFirstPage), setChosenPageIndex(prostaakcyjnaChunks))}
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
