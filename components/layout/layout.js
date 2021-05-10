import Navigation from './navigation';
import Footer from './footer';

function Layout(props) {
	return (
		<div className="w-full min-h-screen flex justify-center">
			<div className="flex flex-col w-full lg:w-11/12 xl:w-10/12 bg-yellow-200">
				<div>
					<Navigation />
				</div>
				<div className="flex-grow">{props.children}</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
