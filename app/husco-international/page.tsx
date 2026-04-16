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
                <p>&gt; working on a coolant valve for a major oem — mechanical design engineering co-op focused on valve actuation and test hardware</p>
                <p>&gt; responsibilities spanned concept generation, hand calculations, fea validation, fixture design, test execution, and drawing pack delivery for manufacturing</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># key contributions</p>
              <div className="mt-3 space-y-3">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; designed and 3d printed an over-mold for an electronic expansion valve</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">produced a show-ready over-mold prototype used at a trade show to demonstrate the module packaging and sealing approach</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; concept development & evaluation</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">brainstormed multiple retention and actuation concepts and evaluated them using a pugh (concept selection) matrix to identify the best trade-offs for bev application requirements</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; mechanical design: leaf springs, heat staking, pseudo press-fit, integral shaft</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">designed leaf springs sized from beam-bending calculations, developed heat-stake and pseudo press-fit solutions (intentional yielding within a hex bore), and an integral shaft option</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; hand calculations & test validation</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">performed hand calculations for feasibility, then ran spring-rate and torque tests; compared physical test data to calculations and iterated designs</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; fea & correlation</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">ran fea simulations to verify stiffness, stress, and mode shapes and to ensure alignment between analytical, simulated, and experimental results</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; fixture design & endurance testing</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">designed and fabricated a stainless-steel fixture using a 5/2 solenoid valve, pwm transmitter, pneumatic rotary actuator and piping to run cycling tests and validate longevity</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; thermal cycling</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">executed thermal cycling per customer specifications to confirm endurance across the required temperature range</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; dfm & supplier readiness</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">designed parts for manufacturability and produced engineering drawings with gd&t to solicit injection-molding quotes from suppliers</p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; specialized tooling: leaf spring bender</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">designed a fixture to accurately bend leaf springs while accounting for elastic spring-back and supplied gd&t drawings so suppliers could machine the tool</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-gray-500"># tech stack</p>
              <div className="flex flex-wrap gap-2 mt-3 text-sm">
                {["solidworks","fea","pugh matrix","gd&t","dfm","test fixtures","thermal cycling","pneumatic systems","injection molding","torque transducer"].map((tech) => (
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
                  "photo 1 - over-mold prototype (trade show)",
                  "photo 2 - leaf spring layouts & bending fixture",
                  "photo 3 - heat-stake and pseudo press-fit details",
                  "photo 4 - endurance cycling fixture (pneumatic actuation)",
                  "photo 5 - hex bore intentional-yield interference fit",
                  "photo 6 - torque test instrumentation & data capture"
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
