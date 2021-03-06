import Link from 'next/link';
import { useRouter } from 'next/router';

function Navigation() {
	const router = useRouter();

	const active = 'bg-black md:bg-white text-white md:text-black md:text-coffee';

	return (
		<div className="flex flex-col md:flex-row sm:justify-between">
			<div className="flex items-center justify-between pr-5 sm:ml-12 xl:ml-10">
				<div className=" sm:-ml-14 sm:pl-2 cursor-pointer">
					<a>
						<Link href="/">
							<img className="h-16 xl:h-24" src="/images/other/logo.jpg" alt="logo" />
						</Link>
					</a>
				</div>
				<div className="md:hidden">
					<button
						className="md:hidden"
						onClick={() => {
							const burger = document.querySelector('.burger');
							const menu = document.querySelector('.menu');
							return menu.classList.toggle('-mt-6'), burger.classList.toggle('hidden');
						}}
						type="button"
						className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
					>
						<div className="h-6 w-6 overflow-hidden">
							<svg className="h-6 w-6 fill-current menu" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							</svg>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path
									className=""
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>

			<div className="md:hidden flex flex-row items-center md:justify-end font-bold text-xl xl:text-2xl">
				<div className="w-full burger flex flex-col md:flex-row tracking-wider">
					<div className="mx-2 md:mx-4 cursor-pointer md:hover:text-gray-75 delay-200">
						<div style={{ padding: '6px 0 6px 6px' }} className={router.pathname == '/' ? active : ''}>
							<Link href="/">
								<svg
									className="w-6 h-6 sm:w-8 sm:h-8"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
							</Link>
						</div>
					</div>

					<div className="mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div
							style={{ padding: '6px 0 6px 6px' }}
							className={
								router.pathname == '/posts' ||
								router.pathname == '/posts/wyszukiwanie' ||
								router.pathname == '/posts/spolka_jawna' ||
								router.pathname == '/posts/spolka_jawna/[slug]' ||
								router.pathname == '/posts/spolka_partnerska' ||
								router.pathname == '/posts/spolka_partnerska/[slug]' ||
								router.pathname == '/posts/spolka_z_o_o' ||
								router.pathname == '/posts/spolka_z_o_o/[slug]' ||
								router.pathname == '/posts/prosta_spolka_akcyjna' ||
								router.pathname == '/posts/prosta_spolka_akcyjna/[slug]' ? (
									active
								) : (
									''
								)
							}
						>
							<Link href="/posts">Artyku??y</Link>
						</div>
					</div>

					<div className="mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div style={{ padding: '6px 0 6px 6px' }} className={router.pathname == '/about' ? active : ''}>
							<Link href="/about">
								<p
									onClick={() => {
										const burger = window.document.querySelector('.burger');
										const menu = window.document.querySelector('.menu');
										return menu.classList.add('-mt-6'), burger.classList.add('hidden');
									}}
								>
									Kancelaria
								</p>
							</Link>
						</div>
					</div>

					<div className="mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div
							style={{ padding: '6px 0 6px 6px' }}
							className={router.pathname == '/contact' ? active : ''}
						>
							<Link href="/contact">
								<p
									onClick={() => {
										const burger = window.document.querySelector('.burger');
										const menu = window.document.querySelector('.menu');
										return menu.classList.add('-mt-6'), burger.classList.add('hidden');
									}}
								>
									Kontakt
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row  md:justify-end font-bold text-xl xl:text-2xl items-center">
				<div className="w-full flex flex-row tracking-wider ">
					<div className="hidden md:block mx-2 md:mx-4 cursor-pointer md:hover:text-gray-75 delay-200">
						<div style={{ padding: '6px 0 6px 6px' }} className={router.pathname == '/' ? active : ''}>
							<Link href="/">
								<svg
									className="w-6 h-6 sm:w-8 sm:h-8"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
							</Link>
						</div>
					</div>

					<div className="hidden md:block mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div
							style={{ padding: '6px 0 6px 6px' }}
							className={
								router.pathname == '/posts' ||
								router.pathname == '/posts/wyszukiwanie' ||
								router.pathname == '/posts/spolka_jawna' ||
								router.pathname == '/posts/spolka_jawna/[slug]' ||
								router.pathname == '/posts/spolka_partnerska' ||
								router.pathname == '/posts/spolka_partnerska/[slug]' ||
								router.pathname == '/posts/spolka_z_o_o' ||
								router.pathname == '/posts/spolka_z_o_o/[slug]' ||
								router.pathname == '/posts/prosta_spolka_akcyjna' ||
								router.pathname == '/posts/prosta_spolka_akcyjna/[slug]' ? (
									active
								) : (
									''
								)
							}
						>
							<Link href="/posts">Artyku??y</Link>
						</div>
					</div>

					<div className="hidden md:block mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div style={{ padding: '6px 0 6px 6px' }} className={router.pathname == '/about' ? active : ''}>
							<Link href="/about">Kancelaria</Link>
						</div>
					</div>

					<div className="hidden md:block mx-2 md:mx-4 md:hover:text-gray-75 delay-200">
						<div
							style={{ padding: '6px 0 6px 6px' }}
							className={router.pathname == '/contact' ? active : ''}
						>
							<Link href="/contact">Kontakt</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
