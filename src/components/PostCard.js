import Link from 'next/link';
import Navbar from './Navbar';
import LeadForm from './LeadForm';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function PostCard({ post }) {
	return (
		<>
			<Navbar
				navLight={false}
				playBtn={false}
				bgLight={false}
				navCenter={false}
			/>
			<Link href={`/blog/${post.slug}`}></Link>;
			<LeadForm />
			<Footer />
			<ScrollToTop />
		</>
	);
}
