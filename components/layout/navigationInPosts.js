import { useRouter } from 'next/router';
import Link from 'next/link';

function NavigationPosts() {
	const router = useRouter();

	return (
		<div
			className={
				router.pathname === '/' || router.pathname === '/about' || router.pathname === '/contact' ? (
					'hidden'
				) : (
					'block'
				)
			}
		>
			<div className="flex flex-col md:flex-row">
				<div className="py-3 px-4 font-bold">Filtrowanie: </div>
				<div
					style={{ marginLeft: '20px', marginRight: '10px', borderRadius: '5px' }}
					className={router.pathname === '/posts' ? 'bg-category' : 'bg-white'}
				>
					<Link href="/posts">
						<span className="block py-3 px-4 cursor-pointer">wszystkie</span>
					</Link>
				</div>
				<div
					style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '5px' }}
					className={
						router.pathname === '/posts/spolka_jawna' ||
						router.pathname === '/posts/spolka_jawna/[slug]' ? (
							'bg-category'
						) : (
							'bg-white'
						)
					}
				>
					<Link href="/posts/spolka_jawna">
						<span className="block py-3 px-4 cursor-pointer">spółka jawna</span>
					</Link>
				</div>
				<div
					style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '5px' }}
					className={
						router.pathname === '/posts/spolka_partnerska' ||
						router.pathname === '/posts/spolka_partnerska/[slug]' ? (
							'bg-category'
						) : (
							'bg-white'
						)
					}
				>
					<Link href="/posts/spolka_partnerska">
						<span className="block py-3 px-4 cursor-pointer">spółka partnerska</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavigationPosts;
