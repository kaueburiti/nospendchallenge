import Link from 'next/link';
export default function PostCard({ post }) {
	return <Link href={`/blog/${post.slug}`}></Link>;
}
