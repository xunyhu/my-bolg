import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">博客</h1>

      <ul className="mt-6 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <a
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-blue-500"
            >
              {post.title}
            </a>

            <p className="text-gray-500 text-sm mt-1">
             {post.date}
            </p>

            <p className="mt-2">{post.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}