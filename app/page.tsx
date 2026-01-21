import ChatBot from "@/components/ChatBot";
import Link from "next/link";

export default function Home() {
  const projects = [
    { name: "smart-robot-manufacturing", href: "/mechanical-arm" },
    { name: "invision-3d-scanner", href: "/solar-tracker" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-10">
      {/* Header with name and college */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00ff41] mb-2 tracking-wide">
          yash ahuja
        </h1>
        <p className="text-sm text-[#00ff41]/60">
          georgia institute of technology
        </p>
      </div>

      {/* Main Terminal Window */}
      <div className="w-full max-w-2xl">
        <div
          className="rounded-lg overflow-hidden border border-[#333] shadow-lg shadow-[#00ff41]/5"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          {/* Terminal Header */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b border-[#333]"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-4 text-xs text-gray-500 font-mono">
              yash@portfolio:~
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            {/* Welcome */}
            <div className="mb-6">
              <p className="text-gray-500 mb-1"># welcome</p>
              <p className="text-[#00ff41]">
                <span className="text-[#00ff41]/60">&gt;</span> hello, i&apos;m yash ahuja
              </p>
              <p className="text-[#00ff41]">
                <span className="text-[#00ff41]/60">&gt;</span> mechanical engineering @ georgia tech
              </p>
              <p className="text-[#00ff41]">
                <span className="text-[#00ff41]/60">&gt;</span> passionate about robotics, the intersection or hardware and software
              </p>
            </div>

            {/* Resume Download */}
            <div className="mb-6">
              <p className="text-gray-500 mb-1"># resume</p>
              <a
                href="/projects/resume.pdf"
                download="yash_ahuja_resume.pdf"
                className="inline-block text-[#00ff41] hover:text-white transition-colors group"
              >
                <span className="text-[#00ff41]/60">&gt;</span>{" "}
                <span className="group-hover:underline">download resume.pdf</span>
                <span className="text-gray-600 ml-2">↓</span>
              </a>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <p className="text-gray-500 mb-1"># projects</p>
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  className="block text-[#00ff41] hover:text-white transition-colors group"
                >
                  <span className="text-[#00ff41]/60">&gt;</span>{" "}
                  <span className="group-hover:underline">./{project.name}</span>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#333] my-6" />

            {/* Inline Chatbot */}
            <ChatBot />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-600 font-mono">
        <span className="text-[#00ff41]/40">&gt;</span> built with next.js • 2025
      </div>
    </main>
  );
}
