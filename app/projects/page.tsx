export default function ProjectsPage() {
  const projects = [
    {
      name: "页面搭建系统",
      tech: ["React", "Schema", "低代码"],
      desc: "支持拖拽组件与 schema 渲染的页面搭建平台",
      highlights: [
        "动态 schema 渲染引擎",
        "组件拖拽与配置面板",
        "多端适配（H5 + 小程序）",
      ],
      demo: "#",
      github: "#",
    },
    {
      name: "酒店 SaaS 商城",
      tech: ["Vue", "小程序", "公众号"],
      desc: "帮助酒店实现订房与商城一体化运营",
      highlights: [
        "多端统一业务逻辑",
        "复杂表单配置系统",
        "公众号 + 小程序打通",
      ],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">项目展示</h1>

      <div className="mt-6 grid gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border rounded-lg p-6 shadow-sm"
          >
            {/* 项目名称 */}
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            {/* 技术栈 */}
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 描述 */}
            <p className="mt-3 text-gray-600">
              {project.desc}
            </p>

            {/* 亮点（重点） */}
            <ul className="mt-3 list-disc pl-5 text-sm">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* 链接 */}
            <div className="mt-4 space-x-4">
              <a href={project.demo} className="text-blue-500">
                在线体验
              </a>
              <a href={project.github} className="text-blue-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}