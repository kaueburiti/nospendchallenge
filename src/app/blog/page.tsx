import path from 'path';
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetadata';
import Link from 'next/link';

export default function Blog() {
	const posts = getPostMetadata('blog');
	return (
		<div>
			<h1>All post</h1>

			<ul>
				{posts.map((post) => (
					<li>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
