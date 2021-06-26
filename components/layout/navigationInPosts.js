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
				<div>Filtrowanie: </div>
				<div className={router.pathname === '/posts' ? 'bg-yellow-box' : 'bg-white'}>
					<Link href="/posts">wszystkie</Link>
				</div>
				<div className={router.pathname === '/posts/spolka_jawna' ? 'bg-yellow-box' : 'bg-white'}>
					<Link href="/posts/spolka_jawna">spółka jawna</Link>
				</div>
				<div className={router.pathname === '/posts/spolka_partnerska' ? 'bg-yellow-box' : 'bg-white'}>
					<Link href="/posts/spolka_partnerska">spółka partnerska</Link>
				</div>
			</div>
		</div>
	);
}

export default NavigationPosts;
