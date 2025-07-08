import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/_components/ui/button";
import { LogoCloud } from "@/_components/front-facing/LogoCloud";
import { SectionProblems } from "@/_components/front-facing/SectionProblems";
import { SectionSolutions } from "@/_components/front-facing/SectionSolution";
import { SectionFeatures } from "@/_components/front-facing/SectionFeatures";
import { SectionTestimonials } from "@/_components/front-facing/SectionTestimonials";
import { CallToAction } from "@/_components/front-facing/CallToAction";
import { SectionFaq } from "@/_components/front-facing/SectionFaq";

export const Route = createFileRoute("/(front-facing)/")({
  component: PageHome,
});

function PageHome() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 isolate hidden contain-strict lg:block pointer-events-none">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,oklch(0.8845_0_0/_8%)_0,oklch(0.6409_0_0/2%)_50%,oklch(0.5547_0_0/0%)_80%)]"></div>
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.8845_0_0/6%)_0,oklch(0.5547_0_0/2%)_80%,transparent_100%)] [translate:5%_-50%]"></div>
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.8845_0_0/4%)_0,oklch(0.5547_0_0/2%)_80%,transparent_100%)]"></div>
      </div>
      <section className="text-balance flex flex-col gap-8 justify-center min-h-dvh">
        <div className="max-w-8xl w-full mx-auto flex flex-col justify-center gap-8 grow p-6 pt-[calc(var(--header-height)+1.5rem)] ">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="text-pretty text-lg max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-bold" asChild>
              <Link to="/">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Request a Demo</Link>
            </Button>
          </div>
        </div>
        <LogoCloud />
      </section>
      <SectionProblems />
      <SectionSolutions />
      <SectionFeatures />
      <SectionTestimonials />
      <CallToAction />
      <SectionFaq />
    </>
  );
}
