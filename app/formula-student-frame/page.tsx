"use client";

import Link from "next/link";
import Image from "next/image";

export default function FormulaStudentFrame() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Back Link */}
        <Link 
          href="/" 
          className="text-gray-500 hover:text-[#00ff41] transition-colors text-sm font-mono"
        >
          &gt; cd ..
        </Link>

        {/* Terminal Window */}
        <div className="mt-4 border border-[#333] rounded-lg overflow-hidden">
          {/* Title Bar */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-gray-500 text-xs font-mono">~/projects/formula-student-frame</span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">
            {/* Project Title */}
            <div>
              <p className="text-gray-500"># project</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">&gt; formula student frame</h1>
              <p className="text-[#00ff41]/70 mt-2">&gt; hytech racing fsae chassis - georgia tech</p>
            </div>

            {/* Overview */}
            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-1">
                <p>&gt; member of hytech racing chassis sub-team</p>
                <p>&gt; designed and fabricated impact attenuator test fixtures</p>
                <p>&gt; conducted structural testing for fsae compliance</p>
                <p>&gt; analyzed force absorption and displacement data</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-gray-500"># tech stack</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["solidworks", "ansys fea", "welding", "steel tubing", "matlab"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 border border-[#00ff41]/30 text-xs text-[#00ff41]/70 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <p className="text-gray-500"># gallery</p>
              <p className="text-gray-600 text-xs mt-2 mb-4">
                add images to /public/projects/formula-student-frame/
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-gray-600 text-xs">[add: chassis-cad.jpg]</span>
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">full chassis cad model</p>
                </div>

                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-gray-600 text-xs">[add: impact-attenuator.jpg]</span>
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">impact attenuator design</p>
                </div>

                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-gray-600 text-xs">[add: fea-analysis.jpg]</span>
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">fea stress analysis</p>
                </div>

                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="w-full h-48 bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-gray-600 text-xs">[add: team-photo.jpg]</span>
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">hytech racing team</p>
                </div>
              </div>
            </div>

            {/* Video */}
            <div>
              <p className="text-gray-500"># demo video</p>
              <div className="mt-4 border border-[#333] rounded overflow-hidden">
                <div className="w-full aspect-video bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-gray-600 text-xs">[add: test-video.mp4 or youtube embed]</span>
                </div>
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <p className="text-gray-500"># key contributions</p>
              <ul className="mt-2 space-y-1 text-[#00ff41]/80">
                <li>&gt; fabricated test fixture for impact attenuator testing</li>
                <li>&gt; measured base displacement and force absorption</li>
                <li>&gt; structured test data for design competition submission</li>
                <li>&gt; plotted force vs displacement graphs for validation</li>
                <li>&gt; collaborated with 20+ team members</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <p className="text-gray-500"># links</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a 
                  href="https://hytechracing.gatech.edu/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff41]/70 hover:text-[#00ff41] transition-colors"
                >
                  &gt; hytech racing website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/solar-tracker" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            &lt; solar-tracker
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            home &gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
