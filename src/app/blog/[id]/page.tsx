
import { blogPosts } from '@/data';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author} on {post.date}
      </p>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
