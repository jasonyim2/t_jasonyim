"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("step-0");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">
            노코드 앱 개발의 새로운 표준
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
          생각한 대로,
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            코딩 없이.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          구글 Antigravity와 AI가 제안하는
          <br className="hidden sm:block" />
          새로운 앱 개발의 표준.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={scrollToSection}
            size="lg"
            className="h-14 px-8 text-lg rounded-[22px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            시작하기
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative z-10 mt-16"
      >
        <div className="relative">
          {/* Glass Phone Frame */}
          <div className="w-64 h-[500px] md:w-72 md:h-[560px] rounded-[40px] bg-card/40 backdrop-blur-2xl border border-border/30 shadow-2xl p-3">
            <div className="w-full h-full rounded-[32px] bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-xl overflow-hidden">
              {/* Screen Content */}
              <div className="p-6 h-full flex flex-col">
                <div className="w-20 h-1 bg-foreground/20 rounded-full mx-auto mb-6" />
                <div className="flex-1 space-y-4">
                  <div className="w-3/4 h-4 bg-foreground/10 rounded-full" />
                  <div className="w-full h-4 bg-foreground/10 rounded-full" />
                  <div className="w-2/3 h-4 bg-foreground/10 rounded-full" />
                  <div className="mt-8 space-y-3">
                    <div className="w-full h-12 bg-primary/20 rounded-xl" />
                    <div className="w-full h-12 bg-accent/20 rounded-xl" />
                    <div className="w-full h-12 bg-muted rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="아래로 스크롤"
      >
        <span className="text-sm">스크롤하여 시작</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
