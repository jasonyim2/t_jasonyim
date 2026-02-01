"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, ArrowRight, Sparkles } from "lucide-react";

export function StepTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="step-2" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
            Step 2+
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            반복하며 성장하기
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
            새로운 앱 아이디어로 Step 1을 반복하세요.
            <br />
            매 프로젝트마다 실력이 향상됩니다.
          </p>

          {/* Cycle Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3 }}
            className="relative inline-flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />

              {/* Inner Content */}
              <div className="absolute inset-8 rounded-full bg-card shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <RefreshCw className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">
                    아이디어 교체
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Step 1 반복
                  </p>
                </div>
              </div>

              {/* Orbiting Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 5,
                  }}
                  className="absolute inset-0"
                  style={{ rotate: i * 120 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-card" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-2xl shadow-sm border border-border/50">
              <span className="text-foreground font-medium">
                프로젝트 1
              </span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">
                프로젝트 2
              </span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">
                프로젝트 3
              </span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">...</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
