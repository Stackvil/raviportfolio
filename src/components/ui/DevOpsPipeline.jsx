import { motion } from "framer-motion";
import {
    Code, Box, TestTube, Rocket, Globe, BarChart3, Settings,
    Workflow, GitBranch, Terminal, ShieldCheck
} from "lucide-react";
import { useEffect, useState } from "react";

export const DevOpsPipeline = () => {
    // Stage definitions with positions along an infinity loop
    // Imagine an SVG path 
    const stages = [
        { id: "plan", label: "Plan", icon: Workflow, x: 20, y: 50, color: "#3b82f6" },
        { id: "code", label: "Code", icon: Code, x: 40, y: 30, color: "#8b5cf6" },
        { id: "build", label: "Build", icon: Box, x: 60, y: 30, color: "#ec4899" },
        { id: "test", label: "Test", icon: TestTube, x: 80, y: 50, color: "#ef4444" },
        { id: "release", label: "Release", icon: ShieldCheck, x: 60, y: 70, color: "#f97316" },
        { id: "deploy", label: "Deploy", icon: Rocket, x: 40, y: 70, color: "#eab308" },
        { id: "monitor", label: "Monitor", icon: BarChart3, x: 20, y: 50, color: "#22c55e" }, // Returns to start
    ];

    return (
        <div className="w-full relative py-20 overflow-hidden flex flex-col items-center justify-center min-h-[500px] bg-black/20 rounded-2xl border border-white/5 backdrop-blur-sm">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Main Title - Floating */}
            <div className="absolute top-6 left-8 font-mono text-sm text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/40">
                PIPELINE_STATUS: <span className="text-emerald-500 animate-pulse">ACTIVE</span>
            </div>

            {/* The Pipeline Animation Container */}
            <div className="relative w-full max-w-5xl h-[300px]">

                {/* SVG Path for the Infinity Loop */}
                {/* Start (20%, 50%) -> Curve Up -> Middle Cross -> Curve Down -> End (80%, 50%) -> Wrap Back */}
                <svg className="absolute inset-0 w-full h-full visible" viewBox="0 0 1000 300">
                    <defs>
                        <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                        </linearGradient>

                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* The Track */}
                    <path
                        d="M 200 150 C 200 50, 400 50, 500 150 C 600 250, 800 250, 800 150 C 800 50, 600 50, 500 150 C 400 250, 200 250, 200 150"
                        fill="none"
                        stroke="url(#pipelineGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="opacity-20"
                    />

                    {/* Animated Path (The Flow) */}
                    <motion.path
                        d="M 200 150 C 200 50, 400 50, 500 150 C 600 250, 800 250, 800 150 C 800 50, 600 50, 500 150 C 400 250, 200 250, 200 150"
                        fill="none"
                        stroke="url(#pipelineGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="10 20"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -100 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Moving Packet (The Build) */}
                    <circle r="4" fill="#fff" filter="url(#glow)">
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            path="M 200 150 C 200 50, 400 50, 500 150 C 600 250, 800 250, 800 150 C 800 50, 600 50, 500 150 C 400 250, 200 250, 200 150"
                        />
                    </circle>

                    {/* Moving Packet 2 (Delayed) */}
                    <circle r="4" fill="#3b82f6" filter="url(#glow)">
                        <animateMotion
                            dur="6s"
                            begin="3s"
                            repeatCount="indefinite"
                            path="M 200 150 C 200 50, 400 50, 500 150 C 600 250, 800 250, 800 150 C 800 50, 600 50, 500 150 C 400 250, 200 250, 200 150"
                        />
                    </circle>
                </svg>

                {/* Stage Nodes - Positioned manually to match curve roughly */}
                {/* 
                Curve logic approx mapping:
                Start: 20% left, 50% top
                Top Loop Peak: 30-40% left, 20-30% top
                Cross: 50% left, 50% top
                Bottom Loop Peak: 60-70% left, 70-80% top
             */}

                {/* Plan - Start Left */}
                <PipelineNode icon={Settings} label="Plan" color="#3b82f6" top="42%" left="18%" delay={0} />

                {/* Code - Top Left Arc */}
                <PipelineNode icon={Code} label="Code" color="#8b5cf6" top="15%" left="35%" delay={0.5} />

                {/* Build - Top Slope Down */}
                <PipelineNode icon={Box} label="Build" color="#ec4899" top="42%" left="48%" delay={1} />

                {/* Test - Middle Slope Down */}
                <PipelineNode icon={TestTube} label="Test" color="#ef4444" top="70%" left="65%" delay={1.5} />

                {/* Release - Bottom Loop Up */}
                <PipelineNode icon={ShieldCheck} label="Release" color="#f97316" top="42%" left="80%" delay={2} />

                {/* Deploy - Top Loop Back */}
                <PipelineNode icon={Rocket} label="Deploy" color="#eab308" top="15%" left="65%" delay={2.5} />

                {/* Monitor - Bottom Return */}
                <PipelineNode icon={BarChart3} label="Monitor" color="#22c55e" top="70%" left="35%" delay={3} />

            </div>


        </div>
    );
};

const PipelineNode = ({ icon: Icon, label, color, top, left, delay }) => {
    return (
        <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-10"
            style={{ top, left }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div
                className="w-12 h-12 rounded-xl bg-gray-900/90 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-[color:var(--icon-color)] transition-colors duration-300"
                style={{ "--icon-color": color }}
            >
                {/* Background Glow on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                />

                <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors relative z-10" />

                {/* Connection Dot */}
                <div className="absolute bottom-0 w-full h-[2px]" style={{ backgroundColor: color }}></div>
            </div>

            <div className="px-2 py-1 rounded bg-black/60 border border-white/5 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-gray-400 group-hover:text-white transition-colors">
                {label}
            </div>
        </motion.div>
    );
};
