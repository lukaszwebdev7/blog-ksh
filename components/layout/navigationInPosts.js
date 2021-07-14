import { useRouter } from 'next/router';
import Link from 'next/link';

function NavigationPosts() {
	const router = useRouter();

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
			<div className="flex flex-col md:flex-row md:mt-4">
				<div className="py-3 px-4 font-bold md:ml-4">Filtrowanie: </div>
				<div
					style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '5px' }}
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
				<div
					style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '5px' }}
					className={
						router.pathname === '/posts/spolka_z_o_o' ||
						router.pathname === '/posts/spolka_z_o_o/[slug]' ? (
							'bg-category'
						) : (
							'bg-white'
						)
					}
				>
					<Link href="/posts/spolka_z_o_o">
						<span className="block py-3 px-4 cursor-pointer">spółka z o.o.</span>
					</Link>
				</div>
				<div
					style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '5px' }}
					className={
						router.pathname === '/posts/prosta_spolka_akcyjna' ||
						router.pathname === '/posts/prosta_spolka_akcyjna/[slug]' ? (
							'bg-category'
						) : (
							'bg-white'
						)
					}
				>
					<Link href="/posts/prosta_spolka_akcyjna">
						<span className="block py-3 px-4 cursor-pointer">prosta spółka akcyjna</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavigationPosts;
