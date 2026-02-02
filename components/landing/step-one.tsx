"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Table2,
  FileQuestion,
  BookOpen,
  Sparkles,
  Palette,
  Code2,
  Github,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: "100",
    title: "앱 아이디어 구상",
    description: "만들고자 하는 앱의 핵심 기능과 목표를 정의합니다",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    category: "Ideation",
  },
  {
    id: "101",
    title: "구글 스프레드시트 작업",
    description: "데이터 구조화 및 기획 문서 작성",
    icon: Table2,
    color: "from-green-400 to-emerald-500",
    category: "Data",
  },
  {
    id: "102",
    title: "Tally 연동",
    description: "설문 항목 설계 및 폼 빌더 연동",
    icon: FileQuestion,
    color: "from-green-500 to-teal-500",
    category: "Data",
  },
  {
    id: "103",
    title: "구글 NotebookLM",
    description: "슈퍼 프롬프트 생성 및 아이디어 정리",
    icon: BookOpen,
    color: "from-primary to-accent",
    category: "Intelligence",
  },
  {
    id: "104",
    title: "Gemini Gem 생성",
    description: "슈퍼 디자이너 AI 설정 및 활용",
    icon: Sparkles,
    color: "from-accent to-pink-500",
    category: "Intelligence",
  },
  {
    id: "105",
    title: "v0.app",
    description: "웹/앱 디자인 AI 생성",
    icon: Palette,
    color: "from-foreground to-muted-foreground",
    category: "Design",
  },
  {
    id: "106",
    title: "구글 Antigravity",
    description: "디자인 및 기능 수정, 코드 편집",
    icon: Code2,
    color: "from-amber-500 to-yellow-500",
    category: "Development",
  },
  {
    id: "107",
    title: "GitHub 업로드",
    description: "앤비에서 깃헙으로 개발코드 푸시",
    icon: Github,
    color: "from-foreground to-muted-foreground",
    category: "Deployment",
  },
  {
    id: "108",
    title: "Vercel 배포",
    description: "GitHub 코드를 실시간 웹앱으로 배포",
    icon: Rocket,
    color: "from-primary to-blue-600",
    category: "Deployment",
  },
];

function StepCard({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  progress: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isActive = progress >= (index + 1) / steps.length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
        <div className="absolute inset-0 bg-border" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent"
          style={{ height: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Step Number Indicator */}
      <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 md:-translate-x-1/2 -translate-x-1/2">
        <div
          className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${
            isActive
              ? "bg-primary border-primary"
              : "bg-background border-border"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`ml-8 md:ml-0 pb-12 ${
          index % 2 === 0
            ? "md:pr-[calc(50%+2rem)] md:text-right"
            : "md:pl-[calc(50%+2rem)]"
        }`}
      >
        <div
          className={`group bg-card rounded-[20px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            isActive ? "ring-1 ring-primary/20" : ""
          }`}
        >
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full mb-4">
            {step.category}
          </span>

          <div
            className={`flex items-start gap-4 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
            >
              <step.icon className="w-7 h-7 text-card" />
            </div>

            {/* Content */}
            <div className={index % 2 === 0 ? "md:text-right" : ""}>
              <span className="text-xs font-mono text-muted-foreground">
                {step.id}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* Hover Glow */}
          <div
            className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function StepOne() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      ref={containerRef}
      id="step-1"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Step 1
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            단 9단계로 완성되는
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              첫 번째 프로젝트
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            아이디어부터 배포까지, 체계적인 워크플로우를 따라가세요
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative mb-16">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ scaleX: progress, transformOrigin: "left" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>시작</span>
            <span>완료</span>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              progress={progress.get()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
