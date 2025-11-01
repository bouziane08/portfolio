
// app/page.tsx
import { Mail, Github, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          👋 Hi, I'm <span className="text-blue-400">Bouziane</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Full Stack Developer specialized in{" "}
          <span className="text-white">
            Next.js, NestJS, PostgreSQL, and Prisma
          </span>
          . I build modern and scalable web apps.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Skill name="Next.js" />
          <Skill name="NestJS" />
          <Skill name="TailwindCSS" />
          <Skill name="PostgreSQL" />
          <Skill name="Prisma" />
          <Skill name="Docker" />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
          <div className="space-y-6">
            <Project
              title="E-Commerce App"
              description="Full Stack store built with Next.js, NestJS, Prisma, and PostgreSQL."
              link="https://github.com/bouziane08"
            />
            <Project
              title="Dashboard System"
              description="Admin panel with authentication, charts, and REST API."
              link="https://github.com/bouziane08"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
          <p className="text-gray-400 mb-6">
            Let's build something great together 🚀
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:bouzianemokhtar999@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
            <a
              href="https://github.com/bouziane08"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </section>

        <footer className="mt-20 text-sm text-gray-500">
          © {new Date().getFullYear()} Bouziane. All rights reserved.
        </footer>
      </section>
    </main>
  );
}

function Skill({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-700">
      {name}
    </span>
  );
}

function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
        <Code2 className="w-5 h-5 text-blue-400" /> {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}
