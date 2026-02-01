"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="py-16 md:py-24 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-pretty leading-relaxed">
            {"\"최고의 디자인은 보이지 않는다."}
            <br />
            {"사용자가 목표에 집중하도록"}
            <br />
            {"조용히 도울 뿐이다.\""}
          </blockquote>

          <p className="text-primary-foreground/60 text-lg mb-12">
            — 수석 디자이너의 한마디
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={scrollToTop}
              size="lg"
              className="h-14 px-8 text-lg rounded-[22px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              다시 처음으로
            </Button>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2026 노코드 앱 개발 가이드. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
