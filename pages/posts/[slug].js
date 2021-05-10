function SinglePost() {
	const { date, category, title, excerpt, image, content, slug } = props.post;

	return (
		<ul>
			<div>Category</div>
			<div>Date</div>
			<div>Title</div>
			<div>Excerpt</div>
			<div>Share</div>
			<div>Image</div>
			<div>Content</div>
		</ul>
	);
}

export default SinglePost;
