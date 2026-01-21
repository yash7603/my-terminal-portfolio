"use client";

import Link from "next/link";
import Image from "next/image";

export default function SmartRobotManufacturing() {
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
            <span className="ml-4 text-gray-500 text-xs font-mono">~/projects/smart-robot-manufacturing</span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8 bg-[#0d0d0d] font-mono text-sm">
            
            {/* Project Title */}
            <div>
              <p className="text-gray-500"># project</p>
              <h1 className="text-xl md:text-2xl font-bold mt-2">&gt; smart robot manufacturing</h1>
              <p className="text-[#00ff41]/70 mt-2">&gt; autonomous pick-and-place system with ai-driven control</p>
              <p className="text-gray-500 mt-1 text-xs">&gt; atlanta, ga | august - november 2025</p>
            </div>

            {/* Overview */}
            <div>
              <p className="text-gray-500"># overview</p>
              <div className="mt-2 text-[#00ff41]/80 space-y-2">
                <p>&gt; engineered an autonomous pick-and-place system utilizing a ur5 robotic arm</p>
                <p>&gt; controlled via python rtde through raspberry pi with custom gripper manipulation</p>
                <p>&gt; integrated real-time computer vision for autonomous object detection</p>
                <p>&gt; developed ai-driven control system reducing manual programming time by 80%</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-gray-500"># tech stack</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "python", 
                  "ur5 robot", 
                  "rtde", 
                  "raspberry pi", 
                  "yolov11", 
                  "opencv", 
                  "pytorch", 
                  "roboflow",
                  "ultralytics",
                  "mlp neural network"
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

            {/* Key Contributions */}
            <div>
              <p className="text-gray-500"># key contributions</p>
              <div className="mt-3 space-y-4">
                
                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; autonomous control system</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    engineered pick-and-place system using ur5 robotic arm controlled by python rtde 
                    via raspberry pi with custom gripper manipulation and camera integration
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; computer vision integration</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    trained custom yolov11 model using roboflow and ultralytics for real-time 
                    object/color classification and detection within the manufacturing workflow
                  </p>
                </div>

                <div className="border-l-2 border-[#00ff41]/30 pl-4">
                  <p className="text-[#00ff41]">&gt; ai-driven positioning</p>
                  <p className="text-[#00ff41]/70 mt-1 text-xs leading-relaxed">
                    developed pytorch-based mlp neural network to map camera coordinates to robot 
                    joint positions, creating smart manufacturing system and reducing manual 
                    programming time by 80%
                  </p>
                </div>

              </div>
            </div>

            {/* Gallery */}
            <div>
              <p className="text-gray-500"># gallery</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                
                {/* Image 1: UR5 Setup - full height */}
                <div className="border border-[#333] rounded overflow-hidden md:col-span-2">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/mechanical-arm/ur5-setup.jpg" 
                      alt="UR5 robot arm setup"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">ur5 robotic arm workstation setup</p>
                </div>

                {/* Image 2: YOLO Detection */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/mechanical-arm/yolo-detection.jpg" 
                      alt="YOLOv11 object detection"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">yolov11 real-time object detection</p>
                </div>

                {/* Image 3: Raspberry Pi Setup */}
                <div className="border border-[#333] rounded overflow-hidden">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/mechanical-arm/raspberry-pi.jpg" 
                      alt="Raspberry Pi control system"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">raspberry pi control system</p>
                </div>

                {/* Image 4: Neural Network / System Diagram - full width */}
                <div className="border border-[#333] rounded overflow-hidden md:col-span-2">
                  <div className="bg-[#1a1a1a] p-2">
                    <Image 
                      src="/projects/mechanical-arm/neural-network.jpg" 
                      alt="MLP neural network diagram"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="p-3 text-xs text-gray-500 border-t border-[#333]">mlp network architecture / system diagram</p>
                </div>

              </div>
            </div>

            {/* Demo Video */}
            <div>
              <p className="text-gray-500"># demo video</p>
              <div className="border border-[#333] rounded overflow-hidden mt-4">
                <video 
                  src="/projects/mechanical-arm/demo.mov" 
                  controls 
                  className="w-full"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Results */}
            <div>
              <p className="text-gray-500"># results</p>
              <ul className="mt-2 space-y-1 text-[#00ff41]/80 text-sm">
                <li>&gt; 80% reduction in manual programming time</li>
                <li>&gt; real-time object detection and classification</li>
                <li>&gt; autonomous pick-and-place with camera-to-robot coordinate mapping</li>
                <li>&gt; successful integration of vision, ai, and robotic control systems</li>
              </ul>
            </div>

            {/* Technical Details */}
            <div>
              <p className="text-gray-500"># technical details</p>
              <div className="mt-2 text-[#00ff41]/70 space-y-1 text-sm">
                <p>&gt; robot: universal robots ur5</p>
                <p>&gt; control: python rtde (real-time data exchange)</p>
                <p>&gt; compute: raspberry pi 4</p>
                <p>&gt; vision: yolov11 (ultralytics) + opencv</p>
                <p>&gt; ml framework: pytorch mlp neural network</p>
                <p>&gt; training data: roboflow annotated dataset</p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between text-sm font-mono">
          <Link href="/" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            &lt; home
          </Link>
          <Link href="/solar-tracker" className="text-gray-500 hover:text-[#00ff41] transition-colors">
            invision-3d-scanner &gt;
          </Link>
        </div>
      </div>
    </main>
  );
}
