import { About } from "@/features/about/components/About";
import { Cover } from "@/features/cover/components/Cover";
import { Projects } from "@/features/projects/components/Projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Cover />
        <About />
        <Projects />
      </Suspense>
    </main>
  );
}
