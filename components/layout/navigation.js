import Link from 'next/link';

function Navigation() {
	return (
		<ul className="flex flex-row justify-end">
			<li>
				<a>
					<Link href="/">Logo</Link>
				</a>
			</li>
			<li>
				<Link href="/posts">Wpisy</Link>
			</li>
			<li>
				<Link href="/about">Kancelaria</Link>
			</li>
			<li>
				<Link href="/contact">Kontakt</Link>
			</li>
		</ul>
	);
}

export default Navigation;
