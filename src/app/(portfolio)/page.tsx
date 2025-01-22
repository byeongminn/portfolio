import { Cover } from "@/features/cover/components/Cover";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Cover />
      </Suspense>
    </main>
  );
}
