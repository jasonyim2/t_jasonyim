"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Chrome,
  Puzzle,
  Box,
  Github,
  FolderOpen,
  Link,
} from "lucide-react";

const tools = [
  {
    id: "001",
    title: "Visual Studio Code",
    description: "최적의 편집 환경 (권장)",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "002",
    title: "구글 Antigravity",
    description: "메인 개발 도구 (앤비)",
    icon: Chrome,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    highlight: true,
  },
  {
    id: "003",
    title: "앤비 Extensions",
    description: "필수 확장 프로그램 설치",
    icon: Puzzle,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "004",
    title: "Node.js",
    description: "JavaScript 런타임 환경",
    icon: Box,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: "005",
    title: "GitHub 가입",
    description: "리포지토리 생성 및 관리",
    icon: Github,
    color: "text-foreground",
    bgColor: "bg-foreground/10",
  },
  {
    id: "006",
    title: "Anvy 폴더 설치",
    description: "PC [문서] > [Anvy] 경로",
    icon: FolderOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "007",
    title: "GitHub 연결",
    description: "앤비 내 GitHub 연동 및 업로드",
    icon: Link,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-card rounded-[20px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
        tool.highlight ? "ring-2 ring-amber-500/50" : ""
      }`}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Step number */}
        <span className="text-xs font-mono text-muted-foreground mb-4 block">
          {tool.id}
        </span>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-2xl ${tool.bgColor} flex items-center justify-center mb-4`}
        >
          <tool.icon className={`w-6 h-6 ${tool.color}`} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {tool.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tool.description}
        </p>

        {tool.highlight && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium bg-amber-500/20 text-amber-600 rounded-full">
              메인 툴
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function StepZero() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="step-0" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Step 0
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready for Takeoff
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            본격적인 앱 개발에 앞서 필요한 필수 프로그램과 환경을 설정합니다
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Connection Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl shadow-sm">
            <Chrome className="w-8 h-8 text-amber-500" />
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-foreground" />
            <Github className="w-8 h-8 text-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">연동 완료</span>
        </motion.div>
      </div>
    </section>
  );
}
