import getPostMetadata from '@/utils/getPostMetadata';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';

export default function Blog() {
	const posts = getPostMetadata('blog');
	return (
		<>
			<Navbar
				navLight={false}
				playBtn={false}
				bgLight={false}
				navCenter={false}
			/>
			<section
				className='relative pt-24 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5'
				id='home'
			>
				<h1>All post</h1>

				<ul>
					{posts.map((post) => (
						<li>
							<Link href={`/blog${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</section>
			<Footer />
			<ScrollToTop />
		</>
	);
}
