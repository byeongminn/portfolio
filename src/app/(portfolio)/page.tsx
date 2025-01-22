import { About } from "@/features/about/components/About";
import { Cover } from "@/features/cover/components/Cover";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Cover />
        <About />
      </Suspense>
    </main>
  );
}
