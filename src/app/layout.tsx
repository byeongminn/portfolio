import type { Metadata } from "next";
import localFont from "next/font/local";
import { Source_Code_Pro } from "next/font/google";
import clsx from "clsx";
import { QueryProvider } from "@/shared/components/QueryProvider";
import "@/shared/styles";

const pretendard = localFont({
  variable: "--font-pretendard",
  src: [
    {
      path: "../shared/styles/fonts/PretendardVariable.woff2",
      weight: "300 700",
    },
  ],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: "400",
});

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
      <body className={clsx(pretendard.variable, sourceCodePro.variable)}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
