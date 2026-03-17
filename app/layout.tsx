export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <nav className="p-4 border-b flex space-x-4">
          <a href="/">首页</a>
          <a href="/blog">博客</a>
          <a href="/projects">项目</a>
        </nav>

        {children}
      </body>
    </html>
  );
}