import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import ScrollToTop from '@/app/components/scroll-to-top';

export default function Post() {
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
				<h1>specific post</h1>
			</section>
			<Footer />
			<ScrollToTop />
		</>
	);
}
