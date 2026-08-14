import Link from "next/link";

const technologies = [
  "c++",
  "teensy",
  "lidar",
  "embedded systems",
  "k-means",
  "hungarian algorithm",
  "robotics",
  "sensor fusion",
  "multi-target tracking",
  "serial communication",
  "mechanical integration",
  "technical research",
];

const pipeline = [
  "raw lidar measurements",
  "distance filtering",
  "angular filtering",
  "coordinate transformation",
  "point cloud generation",
  "k-means clustering",
  "hungarian assignment",
  "cable visualization",
];

function FlowDiagram({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-2">
      {items.map((item, index) => (
        <div key={item} className="contents">
          <div className="flex-1 min-w-32 border border-[#00ff41]/30 rounded px-3 py-3 text-center text-xs text-[#00ff41]/80 bg-black/20">
            {item}
          </div>
          {index < items.length - 1 && (
            <span className="text-[#00ff41]/40 text-center rotate-90 md:rotate-0">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CraneSafetyResearch() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-4xl">
        <Link
          href="/"
          className="text-gray-500 hover:text-[#00ff41] transition-colors text-sm font-mono"
        >
          &gt; cd ..
        </Link>

        <div className="mt-4 border border-[#333] rounded-lg overflow-hidden">
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-gray-500 text-xs font-mono">
              ~/projects/crane-safety-research
            </span>
          </div>

          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">
            <div>
              <p className="text-gray-500"># project</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">
                &gt; multi-cable lidar detection & tracking for crane safety
              </h1>
              <p className="text-[#00ff41]/70 mt-2">
                &gt; georgia institute of technology — crane safety research laboratory
              </p>
            </div>

            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-2">
                <p>&gt; developed and validated a multi-lidar system capable of tracking multiple suspended crane cables in real time</p>
                <p>&gt; combined sensing, embedded systems, experimental validation, and multi-target localization algorithms</p>
                <p>&gt; contributed to hardware integration projects including a servo motor retrofit and magnetic limit switches</p>
                <p>&gt; worked across the complete engineering workflow: integration, programming, debugging, experimentation, data collection, and technical writing</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># objective</p>
              <p className="mt-2 text-[#00ff41]/80 leading-relaxed">
                &gt; develop a distributed sensing system that detects and tracks multiple suspended crane cables, providing accurate position data for future crane safety and collision-avoidance systems
              </p>
            </div>

            <div>
              <p className="text-gray-500"># system architecture</p>
              <p className="mt-2 text-[#00ff41]/70 text-xs leading-relaxed">
                six benewake lidar sensors each connected to a dedicated teensy, with filtered measurements synchronized by a master teensy and sent to a host computer.
              </p>
              <FlowDiagram items={["6× benewake lidar", "6× individual teensy", "master teensy", "host computer"]} />
            </div>

            <div>
              <p className="text-gray-500"># sensor processing pipeline</p>
              <FlowDiagram items={pipeline} />
            </div>

            <div>
              <p className="text-gray-500"># embedded system development</p>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; distributed sensor network</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    modified embedded firmware, worked with serial communication across multiple microcontrollers, debugged communication issues, and verified synchronized transmission from all six sensors.
                  </p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; uart communication debugging</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    traced sensor-board communication failures through firmware and serial interfaces; changing the uart interface from serial1 to serial2 restored reliable microcontroller communication.
                  </p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; memory debugging</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    diagnosed firmware failures introduced by multi-cable detection as a buffer allocation issue; increasing allocation from approximately 64 bytes to 2056 bytes enabled stable multi-target operation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># detection & tracking</p>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; multi-sensor processing</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    implemented and validated distance filtering, angular filtering, coordinate transformations, and fusion of six lidar streams into a common global-frame point cloud.
                  </p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; cable detection — k-means</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    clustered lidar returns belonging to individual crane cables, using each cluster centroid as the estimated cable location.
                  </p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; cable tracking — hungarian assignment</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    matched targets between consecutive frames to prevent changing cluster labels and maintain continuous cable identities throughout each experiment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># experimental validation</p>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; static free hang</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs">single stationary cable used to verify localization accuracy and repeatability.</p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; planar two-cable swing</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs">two cables excited primarily in one plane to evaluate tracking during controlled motion.</p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; non-planar motion</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs">observed motion coupling into a second axis when the suspended mass was not perfectly aligned with the cables.</p>
                </div>
              </div>
              <p className="mt-3 text-[#00ff41]/70 text-xs leading-relaxed">
                repeated datasets were collected under consistent sensor geometry across multiple cable configurations.
              </p>
            </div>

            <div>
              <p className="text-gray-500"># research paper contributions</p>
              <ul className="mt-2 space-y-1 text-[#00ff41]/80">
                <li>&gt; methodology, sensing pipeline, and experimental setup</li>
                <li>&gt; experimental procedure, figure organization, and table placement</li>
                <li>&gt; technical wording revisions and standardized mathematical notation</li>
                <li>&gt; review and incorporation of relevant scientific literature</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-500"># additional hardware projects</p>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; clearpath servo motor retrofit</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    replaced a siemens motor with a teknic clearpath integrated servo, mechanically aligned the assembly, verified operation, and troubleshot integration issues.
                  </p>
                </div>
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; magnetic reed limit switch integration</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    mounted magnets, positioned reed switches, adjusted trigger locations, and tested repeatability to provide reliable end-of-travel detection.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># technologies</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 border border-[#00ff41]/30 text-xs text-[#00ff41]/70 rounded"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/husco-international" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            &lt; husco-international
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            home &gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
