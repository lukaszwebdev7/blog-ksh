import { useRouter } from 'next/router';
import Link from 'next/link';

function NavigationPosts() {
	const router = useRouter();

	const active = 'bg-orange-category text-white w-24 text-center mb-2';
	const unactive = 'bg-gray text-white w-24 text-center mb-2';
	const activeArchive = 'bg-lightblue text-white w-24 text-center mb-2';
	const unactiveArchive = 'bg-category w-24 text-center mb-2';

	const elemStyle = {
		marginLeft: '10px',
		marginRight: '10px',
		borderRadius: '5px',
		fontFamily: 'Open Sans Condensed',
		letterSpacing: '1px'
	};

	return (
		<div
			className={
				router.pathname === '/' ||
				router.pathname === '/about' ||
				router.pathname === '/contact' ||
				router.pathname === '/polityka' ? (
					'hidden'
				) : (
					'block'
				)
			}
		>
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
				rel="stylesheet"
			/>
			<div className="flex flex-col lg:flex-row md:mt-8 lg:mb-6">
				<div className="py-3 px-4 font-bold md:ml-4">Filtrowanie: </div>

				<div className="">
					<div className="flex flex-row flex-wrap">
						<div style={elemStyle} className={router.pathname === '/posts' ? active : unactive}>
							<Link href="/posts">
								<span className="block py-3 cursor-pointer">wszystkie</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={
								router.pathname === '/posts/spolka_jawna' ||
								router.pathname === '/posts/spolka_jawna/[slug]' ? (
									active
								) : (
									unactive
								)
							}
						>
							<Link href="/posts/spolka_jawna">
								<span className="block py-3 cursor-pointer">jawna</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={
								router.pathname === '/posts/spolka_partnerska' ||
								router.pathname === '/posts/spolka_partnerska/[slug]' ? (
									active
								) : (
									unactive
								)
							}
						>
							<Link href="/posts/spolka_partnerska">
								<span className="block py-3 cursor-pointer">partnerska</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={
								router.pathname === '/posts/spolka_komandytowa' ||
								router.pathname === '/posts/spolka_komandytowa/[slug]' ? (
									active
								) : (
									unactive
								)
							}
						>
							<Link href="/posts/spolka_komandytowa">
								<span className="block py-3 cursor-pointer">komandytowa</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={
								router.pathname === '/posts/spolka_z_o_o' ||
								router.pathname === '/posts/spolka_z_o_o/[slug]' ? (
									active
								) : (
									unactive
								)
							}
						>
							<Link href="/posts/spolka_z_o_o">
								<span className="block py-3 cursor-pointer">z o.o.</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={
								router.pathname === '/posts/prosta_spolka_akcyjna' ||
								router.pathname === '/posts/prosta_spolka_akcyjna/[slug]' ? (
									active
								) : (
									unactive
								)
							}
						>
							<Link href="/posts/prosta_spolka_akcyjna">
								<span className="block py-3 cursor-pointer">P.S.A.</span>
							</Link>
						</div>
						<div
							style={elemStyle}
							className={router.pathname === '/posts/wyszukiwanie' ? activeArchive : unactiveArchive}
						>
							<Link href="/posts/wyszukiwanie">
								<span className="block py-3 cursor-pointer">wyszukiwanie</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavigationPosts;
