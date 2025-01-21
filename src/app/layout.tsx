import type { Metadata } from "next";
import "@/shared/styles";
import { QueryProvider } from "@/shared/components/QueryProvider";

export const metadata: Metadata = {
  title: "I'M JEON",
  description:
    "끊임없이 고민하고 배우며 성장하는 프론트엔드 개발자, 전병민 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
