"use client";

import Link from "next/link";
import Image from "next/image";

export default function InVision3DScanner() {
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
            <span className="ml-4 text-gray-500 text-xs font-mono">~/projects/invision-3d-scanner</span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">
            
            {/* Project Title */}
            <div>
              <p className="text-gray-500"># project</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">&gt; invision 3d wall scanner</h1>
              <p className="text-[#00ff41]/70 mt-2">&gt; coordinate-based 3d wall imaging system for structural engineers</p>
            </div>

            {/* Overview */}
            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-2">
                <p>&gt; non-destructive method for mapping load-bearing components behind drywall</p>
                <p>&gt; replaces invasive "guesswork" with high-confidence 3d spatial data</p>
                <p>&gt; integrates directly into professional architectural workflows</p>
                <p>&gt; exports to standard cad formats (dwg, sldprt) and bim software</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-gray-500"># tech stack</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "raspberry pi 5",
                  "uwb radar",
                  "python",
                  "fastapi",
                  "next.js",
                  "websockets",
                  "vl53l1x tof",
                  "3d printing",
                  "cad/bim",
                  "signal processing"
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 border border-[#00ff41]/30 text-xs text-[#00ff41]/70 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Functionality */}
            <div>
              <p className="text-gray-500"># core functionality</p>
              <div className="mt-3 space-y-4">
                
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; subsurface imaging</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    18-antenna ultra-wideband (uwb) radar array operating between 3.3–10 ghz 
                    to penetrate gypsum and detect wood framing, metal pipes, and pvc conduits
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; precision mapping</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    achieves 1-cm volumetric resolution, differentiating single vs. stacked studs 
                    and identifying dimensional lumber sizes (e.g., 2x4 vs. 2x8)
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; material classification</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    amplitude-thresholding and signal processing for color-coded results:
                  </p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="text-green-400">■ wood</span>
                    <span className="text-yellow-400">■ pvc</span>
                    <span className="text-red-400">■ metal</span>
                  </div>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; output interoperability</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    exports to standard cad formats (dwg, sldprt) and compatible with 
                    bim software like revit and autocad
                  </p>
                </div>

              </div>
            </div>

            {/* Hardware Architecture */}
            <div>
              <p className="text-gray-500"># hardware architecture</p>
              <div className="mt-3 space-y-3 text-[#00ff41]/80">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41]/60">&gt;</span>
                  <div>
                    <span className="text-[#00ff41]">compute hub:</span>
                    <span className="text-[#00ff41]/70"> raspberry pi 5 (8gb ram) - central processing for data acquisition and signal processing</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41]/60">&gt;</span>
                  <div>
                    <span className="text-[#00ff41]">localization:</span>
                    <span className="text-[#00ff41]/70"> four vl53l1x time-of-flight sensors providing mm-scale resolution, eliminating imu drift</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41]/60">&gt;</span>
                  <div>
                    <span className="text-[#00ff41]">data pipeline:</span>
                    <span className="text-[#00ff41]/70"> fastapi backend streaming radar matrices via websockets at ~0.2s intervals</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41]/60">&gt;</span>
                  <div>
                    <span className="text-[#00ff41]">power system:</span>
                    <span className="text-[#00ff41]/70"> geekworm x1202 ups with 4x 18650 cells - 6+ hours continuous operation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Interface */}
            <div>
              <p className="text-gray-500"># user interface & experience</p>
              <div className="mt-3 space-y-3 text-[#00ff41]/80">
                <p>&gt; <span className="text-[#00ff41]">wireless visualization:</span> next.js companion app with real-time dashboard</p>
                <p>&gt; <span className="text-[#00ff41]">spatial context:</span> local radar points transformed into global 3d voxel grid</p>
                <p>&gt; <span className="text-[#00ff41]">non-destructive design:</span> smoothed 3d-printed enclosure with ergonomic handle</p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <p className="text-gray-500"># gallery</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                
                {/* Image 1: Device */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/solar-tracker/device.jpg" 
                      alt="InVision handheld device"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">invision handheld scanner unit</p>
                </div>

                {/* Image 2: Design */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/solar-tracker/design.png" 
                      alt="System design"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">system design and architecture</p>
                </div>

                {/* Image 3: UI */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/solar-tracker/ui.png" 
                      alt="User interface"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">next.js real-time dashboard</p>
                </div>

                {/* Image 4: Results */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/solar-tracker/results.png" 
                      alt="Scan results"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">3d scan visualization results</p>
                </div>

              </div>
            </div>

            {/* Demo Video */}
            <div>
              <p className="text-gray-500"># demo video</p>
              <div className="border border-[#333] rounded overflow-hidden mt-4">
                <video 
                  src="/projects/solar-tracker/createx_demovideo_final.mp4" 
                  controls 
                  className="w-full"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <p className="text-gray-500"># technical specifications</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">radar frequency:</div>
                <div className="text-[#00ff41]/80">3.3–10 ghz uwb</div>
                
                <div className="text-gray-500">antenna count:</div>
                <div className="text-[#00ff41]/80">18 antennas</div>
                
                <div className="text-gray-500">resolution:</div>
                <div className="text-[#00ff41]/80">1 cm volumetric</div>
                
                <div className="text-gray-500">compute:</div>
                <div className="text-[#00ff41]/80">raspberry pi 5 (8gb)</div>
                
                <div className="text-gray-500">localization:</div>
                <div className="text-[#00ff41]/80">4x vl53l1x tof sensors</div>
                
                <div className="text-gray-500">data rate:</div>
                <div className="text-[#00ff41]/80">~0.2s intervals (websockets)</div>
                
                <div className="text-gray-500">battery life:</div>
                <div className="text-[#00ff41]/80">6+ hours continuous</div>
                
                <div className="text-gray-500">export formats:</div>
                <div className="text-[#00ff41]/80">dwg, sldprt, revit, autocad</div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/mechanical-arm" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            &lt; smart-robot-manufacturing
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            home &gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
