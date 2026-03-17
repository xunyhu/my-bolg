export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">胡瑞的前端博客</h1>

      <p className="mt-4">
        专注 React / 前端工程化 / 页面搭建系统
      </p>

      <div className="mt-6 space-x-4">
        <a href="/blog" className="text-blue-500">博客</a>
        <a href="/projects" className="text-blue-500">项目</a>
      </div>
    </main>
  );
}