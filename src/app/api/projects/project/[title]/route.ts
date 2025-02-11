import {
  GetProjectItemRequestParams,
  GetProjectItemResponse,
} from "@/features/projects/api/getProject";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<GetProjectItemRequestParams> }
) => {
  try {
    const title = (await params).title;

    const data: GetProjectItemResponse[] = [
      {
        segment: "e-commerce",
        title: "Interior E-commerce",
        description:
          "이커머스에 관심을 바탕으로, Next.js의 App Router와 FSD 디렉토리 구조 연습을 위해 상품 목록, 검색, 상세보기 기능을 구현한 개인 프로젝트",
        period: "2024. 12 ~ 2024. 12",
        achievements: [
          {
            title: "메인페이지 성능 및 접근성 개선",
            contents: [
              "- Performance 76 → 100",
              "- Accessibility 89 → 94",
              "- Best Practices 78 → 100",
            ],
          },
          {
            title: "상품 상세페이지 성능 및 접근성 개선",
            contents: ["- Performance 83 → 100", "- Accessibility 87 → 95"],
          },
        ],
        stacks: [
          "Next.js",
          "Typescript",
          "@tanstack/react-query",
          "MSW",
          "Vanilla-extract",
          "Vercel",
        ],
        outline: [
          "프로젝트 목적: Next.js의 App Router와 FSD 디렉토리 구조 연습을 위해 상품 목록, 검색, 상세보기 기능을 구현",
        ],
        roles: {
          default: [
            "@tanstack/react-query 도입: API 중복 호출 방지 및 데이터 관리 효율화",
            "Validation 및 try-catch 추가: 안정성 강화를 위한 에러 처리 및 데이터 검증",
            "Hooks 디자인 패턴 채택: 비즈니스 로직과 UI의 명확한 분리로 유지보수성 향상",
            "반응형 디자인: 모바일, 태블릿, 데스크탑 환경 최적화",
          ],
        },
      },
      {
        segment: "linme",
        title: "Linme",
        description:
          "사용자의 건강 데이터를 기반으로 맞춤형 건강기능식품을 추천하는 서비스",
        period: "2024. 07 ~ 2024. 11",
        achievements: [
          {
            title: "코드량 21.84% 감소",
            contents: ["코드 컴포넌트화를 통해 유지보수성과 가독성 향상"],
          },
          {
            title: "검색 노출도 증가",
            contents: ["SEO 작업 및 사이트맵 작성으로 검색엔진 최적화"],
          },
          {
            title: "안정성 강화",
            contents: ["try-catch와 validation 추가로 에러 처리 효율성 증대"],
          },
        ],
        stacks: [
          "Next.js",
          "React",
          "Typescript",
          "Context API",
          "@tanstack/react-query",
          "Mui",
          "SCSS",
          "Docker",
        ],
        outline: [
          "서비스 목적: 사용자의 건강 데이터를 기반으로 맞춤형 건강기능식품 추천 서비스 제공",
          "이커머스 구조: Client / Admin 페이지 분리",
        ],
        roles: {
          admin: [
            "@tanstack/react-query 도입: API 중복 호출 방지 및 데이터 관리 효율화",
            "React-Hook-Form 도입: 효율적인 폼 상태 관리 및 검증 도입",
            "Validation 및 try-catch 추가: 안정성 강화를 위한 에러 처리 및 데이터 검증",
            "Hooks 디자인 패턴 채택: 비즈니스 로직과 UI의 명확한 분리로 유지보수성 향상",
            "Docker + AWS 배포: 컨테이너화로 개발 환경 표준화 및 안정성 확보",
            "프로젝트 디렉토리 구조 변경: 코드 가독성 및 유지보수 용이성 개선",
          ],
          client: [
            "반응형 디자인: 모바일, 태블릿, 데스크탑 환경 최적화",
            "SEO 작업:",
            "Sitemap 작성: 검색엔진 노출도 개선",
            "Meta 데이터 설정: react-helmet-async 활용",
            "Next.js 14 App Router로 마이그레이션: 검색엔진최적화 강화를 위한 작업 진행",
            "Docker + AWS 배포: 개발 환경 표준화 및 안정성 확보",
          ],
          default: [],
        },
      },
      {
        segment: "billie",
        title: "Billie",
        description:
          "오프라인 문서를 통해 관리되던 직원들의 근태 및 기자재를 더욱 체계적으로 관리할 수 있도록 돕는 서비스",
        period: "2022. 04 ~ 2023. 12",
        achievements: [
          {
            title: "업무 처리 속도 67% 감소",
            contents: ["대규모 리뉴얼을 통해 시스템 효율성을 극대화"],
          },
          {
            title: "코드 반복 횟수 67% 감소",
            contents: ["컴포넌트화를 통해 반복 제거 및 재사용성 향상"],
          },
          {
            title: "업무 프로세스 디지털화",
            contents: [
              "기존 수기 업무를 Billie로 이관하여 종이 사용 100% 절감",
            ],
          },
        ],
        stacks: [
          "React",
          "Typescript",
          "Recoil",
          "Context API",
          "@emotion",
          "SCSS",
        ],
        outline: [
          "서비스 목적: 오프라인 문서를 통해 관리되던 직원들의 근태 및 기자재를 더욱 체계적으로 관리할 수 있도록 서비스 제공",
          "참고 사항: 현재 배포 링크는 유효하지 않으나, 결과물 이미지를 통해 프로젝트 주요 기능과 성과를 확인할 수 있습니다.",
        ],
        roles: {
          default: [
            "기능 개발 및 코드 리팩토링: 효율적이고 유지 보수가 용이한 코드 베이스 구축",
            "사용자의 불편함 수집 및 개선을 위한 기획회의 참여",
            "전반적인 UI 구현 및 기능 개발, 유지보수",
          ],
        },
      },
      {
        segment: "pima",
        title: "PIMA (Platform for IMpact Analysis)",
        description:
          "철도 및 대중교통 사업의 사회경제적 지표 분석을 통해 사업 시행 전후영향을 분석 및 시각화하여 유관 정책 추진 시 활용할 수 있는 플랫폼",
        period: "2022. 12 ~ 2023. 09",
        achievements: [
          {
            title: "웹 지도 서비스 개발",
            contents: ["Openlayers를 활용해 웹 지도 서비스 개발 및 구현"],
          },
          {
            title: "오픈 API 활용 능숙",
            contents: [
              "Vworld 등 오픈 API를 활용해 데이터 통합 및 서비스 구축",
            ],
          },
          {
            title: "지리 정보 시스템 숙련",
            contents: [
              "QGIS, Geoserver 등 GIS 도구를 활용한 데이터 분석 및 시각화",
            ],
          },
        ],
        stacks: ["React", "Context API", "@emotion"],
        outline: [
          "서비스 목적: 철도 및 대중교통 사업의 사회경제적 지표 분석을 통해 사업 시행 전후의 영향을 분석 및 시각화하여 유관 정책 추진 시 활용할 수 있도록 서비스 제공",
          "참고 사항: 현재 배포 링크는 유효하지 않으나, 결과물 이미지를 통해 프로젝트 주요 기능과 성과를 확인할 수 있습니다.",
        ],
        roles: {
          default: [
            "지도 라이브러리를 이용한 데이터 분석 및 시각화",
            "Geoserver 데이터베이스 구축",
            "UI 전반의 개발 및 기능 개발",
          ],
        },
      },
    ];

    const findedData = findingData(data, title);

    return Response.json({ project: findedData });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const findingData = (
  data: GetProjectItemResponse[],
  title: string
): GetProjectItemResponse | null => {
  return data.filter((project) => project.segment === title)[0] ?? null;
};
