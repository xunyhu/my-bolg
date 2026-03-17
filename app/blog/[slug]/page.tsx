import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. 找到 markdown 文件
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  // 2. 读取文件
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 3. 解析 frontmatter + 内容
  const { data, content } = matter(fileContent);

  // 4. markdown → html
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main className="p-10">
      {/* 标题 */}
      <h1 className="text-3xl font-bold">{data.title}</h1>

      {/* 内容 */}
      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}