"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are an AI representative for Yash Ahuja - a Mechanical Engineering student. Use this resume data:

Yash Ahuja
Atlanta, GA 30318 | (470)-815-8308 | yahuja3@gatech.edu

EDUCATION
Georgia Institute of Technology, Atlanta, GA Aug 2021 - Dec 2025(expected)
Candidate for Bachelors of Science in Mechanical Engineering, Woodruff School GPA:3.94/4.0
- Made the Faculty Honours or Deans List every semester due to excellent academic performance.
- Coursework in AI/ML for Design and Manufacturing. Projects in Vision and Smart Automation.

WORK EXPERIENCE
Andersen Corporation, Locust Grove, GA Summer 2025
Strategic Quality Intern
- Spearheaded Site Acceptance Testing for 3 DG window profiles, verifying CpK to validate process reliability.
- Devised a testing protocol using Dyne Solution to reduce surface energy test time by 63%
- Streamlined lab processes by integrating devices with PLEX QMS, minimizing operator error.
- Led KEYENCE 3D scanner deployment and team training, boosting precision measurement capabilities.
- Configured the 3D Printing lab with Formlabs and Stratasys printers advancing Rapid Prototyping capabilities.

Husco International, Waukesha, WI May - December 2023
Mechanical Design Engineering Co-Op, Advanced Vehicle Systems, Automotive Department
- Designed 4 novel concepts for valve actuation retention methods for CVTMS module in BEV for a major OEM
- Designed and validated fixtures for valve endurance testing using GD&T, modeling, and fabrication.
- Conducted CFD simulations to reduce pressure drop by 11% through the flow path, reducing energy consumption
- Conducted FEA simulations to validate a leaf spring's response to a normal load.
- Devised a Full System Torque test plan using a Torque Transducer and Dewesoft to confirm AMESim data.
- Prototyped an overmold for an electronic expansion valve (EXV) to be presented at a trade show.

JCB India, Faridabad, Haryana Summer 2022
Mechanical Engineering Intern
- Redesigned a generator model to standardize lock components across different product lines, reducing cost.
- Implemented a field solution related to freezing of CrankCase Ventilation blowby gases in extreme temperatures.

Research on Statistics of Yukawa Potential Simulation, IIT Delhi 2020-2021
- Used MATLAB and LAMMPS to author a research paper published in an internationally peer reviewed journal.

EXTRACURRICULAR ACTIVITIES
HyTech Racing, FSAE, Atlanta, GA 2022 - Chassis Sub-Team Member
India Club At Georgia Tech, Atlanta, GA 2021-2022 - Vice President of Finance Team and Sports Chair
International RoboWar Competition, Delhi, India 2020 - Design Head (3rd position)

LEADERSHIP
India Brand Manager at Stem4Free, Delhi, India 2019-2021
- Founded the India Branch of a 501(c)(3) non profit, coordinated interns to raise $500, supporting 30 families during COVID.

SKILLS
Engineering: SolidWorks, ProE/Creo, CATIA, FEA, CFD, GD&T, AutoCAD, Engineering Drawings, Stackups, DFM
Fabrication: Welding, Waterjet, Bandsaw, 3D Printing, Lathe, Laser Cutter, Power Tools
Programs: ANSYS Fluent, MATLAB, Windchill PLM, Dewesoft, Java, Mathematica

Answer concisely in a terminal style. Use lowercase. Be helpful and represent Yash professionally. Keep responses brief (2-3 lines max).`;

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading || cooldown > 0) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key not found");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

      const prompt = `${SYSTEM_PROMPT}\n\nUser question: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } catch (error: unknown) {
      console.error("Chatbot Error:", error);
      const errorMessage = error instanceof Error ? error.message : "unknown error";
      
      // Check for rate limit error
      if (errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("rate")) {
        setCooldown(30);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "rate limit reached. please wait...",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "error: connection failed. try again.",
          },
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="font-mono text-sm">
      {/* Chat Header */}
      <p className="text-gray-500 mb-2"># ask about my skills, experience, or projects...</p>

      {/* Messages */}
      <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx}>
            {msg.role === "user" ? (
              <p className="text-[#00ff41]">
                <span className="text-[#00ff41]/60">&gt;</span> {msg.content}
              </p>
            ) : (
              <p className="text-[#00ff41]/70 pl-4">
                {msg.content}
              </p>
            )}
          </div>
        ))}
        {isLoading && (
          <p className="text-gray-600 pl-4 animate-pulse">
            processing...
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2">
        <span className="text-[#00ff41]/60">&gt;</span>
        {cooldown > 0 ? (
          <span className="text-gray-500 text-sm">
            retry in {cooldown}s...
          </span>
        ) : (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="type your question here..."
              className="flex-1 bg-transparent text-[#00ff41] outline-none placeholder-gray-600 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="text-gray-500 hover:text-[#00ff41] disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs"
            >
              [enter]
            </button>
          </>
        )}
      </div>
    </div>
  );
}
