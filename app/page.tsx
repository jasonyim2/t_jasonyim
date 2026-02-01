import { Hero } from "@/components/landing/hero";
import { StepZero } from "@/components/landing/step-zero";
import { StepOne } from "@/components/landing/step-one";
import { StepTwo } from "@/components/landing/step-two";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StepZero />
      <StepOne />
      <StepTwo />
      <Footer />
    </main>
  );
}
