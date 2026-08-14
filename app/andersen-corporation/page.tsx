"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const gallery = [
  "andersen-1.jpeg",
  "andersen-2.jpeg",
  "andersen-3.jpeg",
  "andersen-4.jpeg",
  "andersen-5.jpeg",
  "andersen-6.jpeg",
];

const skills = [
  "process validation",
  "manufacturing quality",
  "statistical process control",
  "cpk analysis",
  "dimensional inspection",
  "keyence 3d scanning",
  "cad-to-part comparison",
  "plex qms",
  "data traceability",
  "formlabs sla",
  "stratasys printing",
  "technical documentation",
  "process standardization",
  "team training",
];

function GalleryImage({ file, index }: { file: string; index: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="border border-[#333] rounded overflow-hidden">
      <div className="bg-[#1a1a1a] p-2">
        {hasError ? (
          <div className="w-full aspect-[4/3] flex items-center justify-center text-center px-4">
            <span className="text-gray-600 text-xs">[image unavailable]</span>
          </div>
        ) : (
          <Image
            src={`/projects/andersen-corporation/${file}`}
            alt={`andersen internship photo ${index + 1}`}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function AndersenCorporation() {
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
              ~/experience/andersen-corporation
            </span>
          </div>

          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">
            <div>
              <p className="text-gray-500"># experience</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">
                &gt; andersen corporation
              </h1>
              <p className="text-[#00ff41]/70 mt-2">
                &gt; strategic quality intern
              </p>
              <p className="text-gray-500 mt-1 text-xs">
                &gt; locust grove, ga | summer 2025
              </p>
            </div>

            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-2">
                <p>&gt; supported manufacturing quality, equipment validation, metrology, and rapid prototyping initiatives</p>
                <p>&gt; improved inspection efficiency and digital traceability through standardized procedures and connected quality systems</p>
                <p>&gt; helped engineering teams adopt precision measurement and in-house prototyping workflows</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># site acceptance testing</p>
              <div className="mt-3 space-y-4">
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; $100k+ equipment validation - SAT</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    spearheaded site acceptance testing for new manufacturing equipment by collecting process data, evaluating cpk, confirming repeatability and reliability, and coordinating validation with engineering and manufacturing teams before production release.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[#00ff41]/70 text-xs leading-relaxed">
                site acceptance testing verifies that installed equipment performs against agreed requirements in its actual production environment. confirming capability before launch reduces the risk of defects, downtime, and unstable output reaching downstream operations.
              </p>
            </div>

            <div>
              <p className="text-gray-500"># surface energy testing improvement</p>
              <div className="mt-3 border-l-2 border-[#00ff41]/30 pl-4">
                <p className="text-[#00ff41]">&gt; 63% reduction in inspection cycle time</p>
                <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                  evaluated the existing workflow, developed a standardized dyne solution testing procedure, validated the new method, and increased manufacturing throughput while maintaining confidence in the inspection process.
                </p>
              </div>
              <p className="mt-3 text-[#00ff41]/70 text-xs leading-relaxed">
                surface energy determines how well inks, coatings, and adhesives wet and bond to a material. a standardized method controls application and interpretation, improving operator-to-operator consistency and making results more dependable.
              </p>
            </div>

            <div>
              <p className="text-gray-500"># plex qms integration</p>
              <div className="mt-3 border-l-2 border-[#00ff41]/30 pl-4">
                <p className="text-[#00ff41]">&gt; connected quality data workflow</p>
                <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                  integrated laboratory devices with plex qms to automate data collection, reduce manual-entry errors, improve record traceability, and support more reliable quality documentation.
                </p>
              </div>
              <p className="mt-3 text-[#00ff41]/70 text-xs leading-relaxed">
                direct equipment integration preserves the connection between each measurement, part, operator, and process step. this creates an auditable record while reducing transcription errors and accelerating quality decisions.
              </p>
            </div>

            <div>
              <p className="text-gray-500"># keyence scanner deployment</p>
              <div className="mt-3 border-l-2 border-[#00ff41]/30 pl-4">
                <p className="text-[#00ff41]">&gt; precision metrology adoption</p>
                <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                  supported implementation, setup, configuration, and team training for the keyence 3d measurement system, expanding its use for prototype inspection, dimensional validation, cad-to-part comparison, and manufacturing quality control.
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-500"># rapid prototyping laboratory</p>
              <div className="mt-3 border-l-2 border-[#00ff41]/30 pl-4">
                <p className="text-[#00ff41]">&gt; in-house prototyping capability</p>
                <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                  helped establish and organize the lab, configured formlabs sla and stratasys printers for engineering use, and supported prototype fabrication for product teams.
                </p>
              </div>
              <p className="mt-3 text-[#00ff41]/70 text-xs leading-relaxed">
                rapid prototyping converts design ideas into testable parts quickly, enabling engineers to identify fit, function, and manufacturability issues earlier and complete more design iterations in less time.
              </p>
            </div>

            <div>
              <p className="text-gray-500"># internship impact</p>
              <ul className="mt-2 space-y-1 text-[#00ff41]/80">
                <li>&gt; validated process capability for manufacturing equipment valued above $100,000</li>
                <li>&gt; reduced surface energy inspection cycle time by 63%</li>
                <li>&gt; improved quality-data traceability and reduced manual-entry risk</li>
                <li>&gt; expanded adoption of keyence precision metrology workflows</li>
                <li>&gt; supported faster product development through in-house rapid prototyping</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-500"># gallery</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 items-start">
                {gallery.map((file, index) => (
                  <GalleryImage key={file} file={file} index={index} />
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-500"># technical skills</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-[#00ff41]/30 text-xs text-[#00ff41]/70 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/solar-tracker" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            &lt; invision-3d-scanner
          </Link>
          <Link href="/husco-international" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            husco-international &gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
