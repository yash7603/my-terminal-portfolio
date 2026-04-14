"use client";

import Link from "next/link";
import Image from "next/image";

export default function HuscoInternational() {
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
            <span className="ml-4 text-gray-500 text-xs font-mono">~/projects/husco-international</span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">

            <div>
              <p className="text-gray-500"># project</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">&gt; husco international (co-op)</h1>
              <p className="text-[#00ff41]/70 mt-2">&gt; mechanical design engineering co-op - advanced vehicle systems</p>
              <p className="text-gray-500 mt-1 text-xs">&gt; waukesha, wi | may - december 2023</p>
            </div>

            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-2">
                <p>&gt; mechanical design co-op working on valve actuation and fixture design for automotive systems</p>
                <p>&gt; responsibilities included conceptual design, FEA/CFD validation, and test fixture development</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># key contributions</p>
              <div className="mt-3 space-y-3">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; novel valve actuation concepts</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    designed four novel concepts for valve actuation retention methods for a CVTMS module used in BEV applications
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; fixtures & testing</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    designed and validated fixtures for valve endurance testing using GD&T, modeling, and fabrication
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; simulation & validation</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    conducted cfd to reduce pressure drop by ~11% and fea to validate spring response under load
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; system testing</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    devised a full-system torque test plan using a torque transducer and dewesoft to confirm simulation data
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-gray-500"># tech stack</p>
              <div className="flex flex-wrap gap-2 mt-3 text-sm">
                {[
                  "solidworks",
                  "fea",
                  "cfd",
                  "gd&t",
                  "test fixtures",
                  "dewesoft",
                  "torque transducer"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 border border-[#00ff41]/30 text-xs text-[#00ff41]/70 rounded">{tech}</span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <p className="text-gray-500"># gallery</p>
              <p className="text-gray-600 text-xs mt-1 mb-4">add images to: public/projects/husco-international/</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "photo 1 - full torque test set up",
                  "photo 2 - leaf spring design",
                  "photo 3 - heat stake design",
                  "photo 4 - endurance test set up",
                  "photo 5 - interference fit design",
                  "photo 6 - full torque test setup",
                ].map((caption, idx) => {
                  const i = idx + 1;
                  return (
                    <div key={i} className="border border-[#333] rounded overflow-hidden">
                      <div className="bg-[#1a1a1a] p-2">
                        <Image src={`/projects/husco-international/husco-${i}.jpg`} alt={caption} width={900} height={600} className="w-full h-auto object-contain" />
                      </div>
                      <p className="p-3 text-xs text-gray-500 border-t border-[#333]">{caption}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-gray-500"># links</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <span className="text-gray-500">&gt; no external links</span>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/mechanical-arm" className="text-gray-500 hover:text-[#00ff41] transition-colors">&lt; smart-robot-manufacturing</Link>
          <Link href="/" className="text-gray-500 hover:text-[#00ff41] transition-colors">home &gt;</Link>
        </div>
      </div>
    </main>
  );
}
