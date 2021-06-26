import Navigation from './navigation';
import Footer from './footer';

import NavigationPosts from './navigationInPosts';

function Layout(props) {
	return (
		<div>
			<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
			<div className="w-full min-h-screen flex justify-center" style={{ fontFamily: 'Roboto Condensed' }}>
				<div className="flex flex-col w-full lg:w-11/12 xl:w-10/12">
					<div>
						<Navigation />
					</div>
					<div className="mb-8">
						<NavigationPosts />
					</div>
					<div className="flex-grow">{props.children}</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;
