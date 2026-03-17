import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(content);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: new Date(data.date).toISOString(),
      desc: data.desc,
    };
  });

  // 🔥 按时间排序
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}