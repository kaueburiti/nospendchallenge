import getPostMetadata from '@/utils/getPostMetadata';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import Head from 'next/head';

export default function Blog() {
	const posts = getPostMetadata('blog');
	return (
		<>
			<Head>
				<title>Blog - Spending and Saving Tips</title>
				<meta
					name='description'
					content='Explore our blog for the best spending and saving tips to manage your finances effectively.'
				/>
				<link rel='canonical' href='https://yourwebsite.com/blog' />
			</Head>
			<Navbar
				navLight={false}
				playBtn={false}
				bgLight={false}
				navCenter={false}
			/>
			<section
				className='relative pt-36 xl:pb-[420px] md:pb-80 pb-36 items-center overflow-hidden bg-red-500/5'
				id='home'
			>
				<div className='container relative z-10 mb-2'>
					<h1 className='text-red-500 uppercase text-5xl font-bold tracking-wider mb-3'>
						#Blog
					</h1>
					<h3 className='text-black mb-10'>
						Creating content that helps you with consumption!
					</h3>
					<div>
						{posts.map((post) => (
							<div className='text-black w-full mt-10 flex justify-between items-start gap-24 border-slate-200 border border-solid  rounded-2xl py-10 px-10 bg-white'>
								<div className='max-w-[1000px] min-w-[400px]'>
									<Image
										src={post.image}
										alt={post.title}
										width={1000}
										height={1000}
										className='rounded-2xl'
									/>
								</div>
								<div className='flex flex-col justify-around'>
									<Link
										href={`/blog/${post.slug}`}
										className='font-semibold text-xl'
									>
										#{post.title}
									</Link>
									<p className='text-black mt-4 font-extralight'>
										{post.description}
									</p>
									<div className='flex justify-start items-center gap-2 mt-5'>
										<FaClock className='text-red-500' />
										<p className='text-black-400 font-extralight'>
											{post.time}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
			<ScrollToTop />
		</>
	);
}
