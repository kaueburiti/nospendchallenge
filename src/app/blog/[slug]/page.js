import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import ScrollToTop from '@/app/components/scroll-to-top';
import Markdown from 'markdown-to-jsx';
import { getPostContent } from '@/utils/getPostMetadata';

const PostHeading = ({ children }) => (
	<h1 className='text-3xl font-bold mb-10 text-black-500'>{children}</h1>
);

const PostHeading2 = ({ children }) => (
	<h1 className='text-xl font-bold mb-2 text-black-500'>{children}</h1>
);

const PostParagraph = ({ children }) => (
	<p className='text-base font-normal mb-6 text-black-500 '>{children}</p>
);

const PostUl = ({ children }) => (
	<ul className='list-disc list-inside pl-5 pb-6'>{children}</ul>
);

const PostOl = ({ children }) => (
	<ol className='list-decimal list-inside pl-5 pb-6'>{children}</ol>
);

export default function Post(props) {
	const slug = props.params.slug;
	const post = getPostContent(slug);
	return (
		<>
			<Navbar
				navLight={false}
				playBtn={false}
				bgLight={false}
				navCenter={false}
			/>
			<main
				className='relative pt-36 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5'
				id='home'
			>
				<div className='container relative z-10 mb-2'>
					<article>
						<Markdown
							options={{
								overrides: {
									h1: {
										component: PostHeading,
									},
									h2: {
										component: PostHeading2,
									},
									p: {
										component: PostParagraph,
									},
									ul: {
										component: PostUl,
									},
									ol: {
										component: PostOl,
									},
								},
							}}
						>
							{post.content}
						</Markdown>
					</article>
				</div>
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
}
