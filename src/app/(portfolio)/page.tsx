import { About } from "@/features/about/components/About";
import { Closing } from "@/features/closing/components/Closing";
import { Cover } from "@/features/cover/components/Cover";
import { Projects } from "@/features/projects/components/Projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      hello world
      {/* <Suspense fallback={<></>}>
        <Cover />
        <About />
        <Projects />
        <Closing />
      </Suspense> */}
    </main>
  );
}
