import { NextRequest } from "next/server";
import {
  GetProjectItemRequestParams,
  GetProjectItemResponse,
} from "@/features/projects/api/getProject";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<GetProjectItemRequestParams> }
) => {
  try {
    const title = (await params).title;

    const data = [
      {
        segment: "e-commerce",
        thumbnail: {
          src: "e-commerce",
          alt: "e-commerce",
          width: 200,
          height: 74,
          backgroundColor: "#2F343822",
        },
        title: "내일의집",
        description:
          "프론트엔드 개발 과정에서 학습한 개념들을 통합적으로 실습하고자 진행한 Next.js 기반 1인 쇼핑몰 프로젝트",
        period: "2024. 12 ~ 2024. 12",
        outline: [
          "1인 사이드 프로젝트",
          "프로젝트 목적: 프론트엔드 개발 과정에서 학습한 개념들을 통합적으로 실습하고자 진행한 Next.js 기반 1인 쇼핑몰 프로젝트",
          "기술 스택: Next.js App Router, TypeScript, @tanstack/react-query, MSW, Vanilla-extract, Vercel",
        ],
        links: [
          {
            text: "Github 페이지",
            url: "https://github.com/byeongminn/shopping_mall",
          },
          {
            text: "배포 페이지",
            url: "https://shopping-mall-murex.vercel.app",
          },
        ],
        stacks: [
          "Next.js 14",
          "TypeScript",
          "@tanstack/react-query",
          "MSW",
          "Vanilla-extract",
          "Vercel",
        ],
        features: [
          {
            title: "메인 페이지",
            descriptions: [
              "무한 스크롤을 적용해 상품 목록을 자동으로 로드",
              "추천순, 가격순 등 정렬 옵션을 제공하여 사용자가 원하는 기준으로 상품 정렬 가능",
            ],
          },
          {
            title: "상품 상세 페이지",
            descriptions: [
              "Swiper를 활용해 상품 썸네일을 슬라이드 방식으로 표시",
              "드롭다운을 통해 다양한 상품 옵션을 선택할 수 있도록 구성",
            ],
          },
          {
            title: "검색 페이지",
            descriptions: ["키워드 입력을 통한 상품 검색 기능 제공"],
          },
          {
            title: "로그인 페이지",
            descriptions: [
              "JWT 기반 인증 시스템을 통해 사용자의 로그인 세션을 관리",
              "로그인 성공 후 redirect 파라미터를 이용해 사용자가 의도한 경로로 이동 처리함으로써 UX를 개선",
              "Protected Route 설정을 통해 인증 기반 페이지 접근의 안정성을 확보",
            ],
          },
        ],
        roles: {
          default: [
            {
              title: "API 데이터 관리 최적화",
              descriptions: [
                "@tanstack/react-query를 도입하여 API 중복 호출 방지 및 데이터 캐싱 구현",
                "MSW(Mock Service Worker)를 활용하여 API 요청을 모킹하고 개발 환경을 개선",
              ],
            },
            {
              title: "안정성 및 에러 처리 강화",
              descriptions: [
                "API 호출 시 validation 및 try-catch를 적용하여 예외 발생 시 UI 오류를 최소화",
              ],
            },
            {
              title: "코드 구조 개선 및 유지보수성 향상",
              descriptions: [
                "Hooks 디자인 패턴 적용 (useGetGoods, useGetGoodsDetail, useGetSearchGoods)",
                "UI와 비즈니스 로직을 분리하여 컴포넌트 재사용성 및 유지보수성 향상",
              ],
            },
            {
              title: "무한 스크롤 구현 및 성능 최적화",
              descriptions: [
                "useSuspenseInfiniteQuery를 활용하여 Suspense 기반의 무한 스크롤 데이터 로딩 최적화",
                "react-intersection-observer와 연동하여 사용자가 목록 끝에 도달하면 자동으로 데이터 로드",
                "기존 페이지네이션 방식에서 무한 스크롤 방식으로 전환하여 UX 개선 및 API 성능 최적화",
              ],
            },
            {
              title: "반응형 및 스타일 시스템 구축",
              descriptions: [
                "Vanilla-extract를 활용하여 Zero-runtime Stylesheets in TypeScript 방식으로 디자인 시스템 구현",
                "모바일, 태블릿, 데스크탑 환경 최적화",
              ],
            },
            {
              title: "배포 환경 구축",
              descriptions: ["Vercel을 활용하여 배포 및 성능 최적화"],
            },
          ],
        },
        solutions: [
          {
            title:
              "Streaming의 한계를 분석하고 프로젝트에 적합한 Prefetching 구조 설계",
            issues: [
              "Streaming 구조는 초기 HTML에 콘텐츠가 포함되지 않아 SEO 최적화에 한계가 있었고, 이로 인해 검색 엔진 노출이 줄어 유입량 감소 및 매출 저하로 이어질 수 있는 구조적 문제가 있었음",
              "상품 목록이나 가격 정보 등 핵심 콘텐츠가 늦게 나타날 경우, 초기 로딩 지연으로 인식돼 이탈률 상승으로 이어질 가능성이 있었음",
              "이에 따라 SEO와 사용자 경험을 동시에 개선할 수 있는 구조로의 전환이 필요하다고 판단함",
            ],
            approaches: [
              "SEO 구조 개선과 사용자 경험 향상을 위해 Streaming 전략을 제거하고, 페이지별 서버 컴포넌트에서 데이터를 사전 패칭(prefetching)하는 구조로 전환",
              "상품 목록·상세페이지를 리팩토링하여 캐시 재사용 및 빠른 페이지 전환이 가능하도록 설계",
              "queryClient.prefetchInfiniteQuery와 useInfiniteQuery에서 사용할 쿼리 옵션을 infiniteQueryOptions로 분리하여 중복을 제거하고 일관성을 확보",
            ],
            outcomes: [
              "SEO와 초기 렌더링 성능을 개선해 유입량 증가와 이탈률 감소 효과를 기대할 수 있는 구조를 구현",
              "캐시 재사용을 통해 페이지 간 전환 속도 향상 및 불필요한 API 요청 최소화",
              "공통 쿼리 옵션 분리로 유지보수 효율이 높아지고 서버·클라이언트 간 데이터 정책 일관성 확보",
            ],
            references: [
              {
                label: "🔗 데이터 전략: Prefetching vs Streaming 정리 (Notion)",
                url: "https://byeongminn.notion.site/tanstack-react-query-v5-Prefetching-vs-Streaming-1f4dca3c89978007845aef62d601d817",
              },
            ],
          },
          {
            title: "Storybook 도입을 위한 디자인 패턴 적용",
            issues: [
              "UI 컴포넌트를 독립적으로 개발하고 상태별로 문서화하는 실무 협업 환경을 가정해, Storybook 도입이 필요하다고 판단했음",
              "그러나 기존 구조는 UI와 비즈니스 로직이 하나의 컴포넌트에 혼재되어 있어, 상태별 UI를 Storybook에서 안정적으로 분리하거나 표현하기 어려웠음",
              "이에 따라 디자인 패턴을 변경하여 컴포넌트의 관심사를 분리할 필요가 있다고 판단",
            ],
            approaches: [
              "UI는 props 기반의 Presentational 컴포넌트로 분리하고, 로직을 담당하는 Container 컴포넌트를 별도로 구성",
              "Container에 로직이 집중될 경우 재사용성이 낮아지는 점을 고려하여, 비즈니스 로직은 Custom Hook으로 분리하고 모듈화하여 관리",
            ],
            outcomes: [
              "Storybook에서 UI 컴포넌트를 독립적으로 개발 및 시각화할 수 있게 되었음",
              "컴포넌트와 로직을 분리함으로써 재사용성과 유지보수 효율이 높아짐",
              "다양한 상태를 정의한 스토리를 통해 시각적 변경 사항을 검토할 수 있는 테스트 기반을 갖추었음",
            ],
          },
          {
            title: "JWT 인증 후 Protected Route 적용 문제 해결",
            issues: [
              "로그아웃 이후에도 보호되어야 할 페이지(`/cart`)에 접근 가능한 문제 발생",
              "시나리오: 로그인 상태에서 `/cart` 접근 → `/`로 이동 후 로그아웃 → 브라우저 뒤로가기 → 인증 없이 `/cart` 접근 가능",
            ],
            causes: [
              "미들웨어는 서버 요청 시에만 작동",
              "브라우저 bfcache, prefetch, 내부 라우팅 등으로 인해 CSR 상황에서는 미작동",
              "클라이언트 측에서도 별도의 보호 로직이 필요",
            ],
            approaches: [
              "클라이언트 인증 보호 로직을 HOC(withAuth)로 구현",
              "로그인 여부에 따라 라우팅 제어",
              'type이 "protected"이고 비로그인 상태이면 `/login`으로 리다이렉트',
              'type이 "guest-only"이고 로그인 상태이면 `/`로 리다이렉트',
            ],
            outcomes: [
              "로그아웃 후 브라우저 뒤로가기를 하더라도 `/cart` 접근 시 `/login`으로 이동",
              "CSR 환경에서도 인증 보호 적용되어 UX 및 보안 강화",
            ],
            references: [
              {
                label: "🔗 트러블슈팅 상세 및 구현 코드 보기 (Notion)",
                url: "https://byeongminn.notion.site/Next-js-Protected-Route-1dedca3c899780c981aeecde611362d0",
              },
              {
                label: "🔗 Protected Route 구현 과정 정리 (Notion)",
                url: "https://byeongminn.notion.site/Protected-Route-1dedca3c899780f8a59fcc240e89f7a1",
              },
            ],
          },
          {
            title: "JWT 인증 후 페이지 라우팅 문제 해결",
            issues: [
              "로그인 경로에 `?redirect=/cart` 파라미터가 포함된 상태에서 로그인 시도 (`/login?redirect=%2Fcart`)",
              '로그인은 성공했으나, `router.push(searchParams.get("redirect"))`로의 페이지 전환이 정상적으로 이루어지지 않음',
            ],
            causes: [
              '`searchParams.get("redirect")`는 정상적으로 동작하고, `router.push()`도 루트 경로(/)에 대해서는 문제 없이 작동',
              "그러나 `/cart`는 로그인 이전 상태에서 Next.js에 의해 자동 prefetch됨",
              "이 시점에는 accessToken이 없었기 때문에, 서버는 `/cart` 요청에 대해 `/login?redirect=%2Fcart`로 리다이렉트 처리",
              "해당 응답이 브라우저에 캐시되며, 로그인 후에도 서버 재요청 없이 prefetch된 리다이렉트 응답이 그대로 사용됨",
              "결과적으로 사용자가 다시 로그인 페이지로 되돌아가는 현상 발생",
            ],
            approaches: [
              "`router.push()` 대신 `window.location.assign()`을 사용하여 서버에 새로운 요청을 강제로 발생시킴",
              "이를 통해 accessToken이 반영된 상태로 서버가 경로를 재평가하게 유도함",
            ],
            outcomes: [
              "로그인 직후 원하는 redirect 경로(/cart)로 정확히 이동",
              "서버가 최신 쿠키 상태를 반영하여 페이지 렌더링",
              "캐시로 인한 인증 후 라우팅 문제 해결, UX 개선",
            ],
            references: [
              {
                label: "🔗 트러블슈팅 상세 및 구현 코드 보기 (Notion)",
                url: "https://byeongminn.notion.site/1d7dca3c8997806a804deb5f5fa17310",
              },
              {
                label: "🔗 JWT 기반 인증 구현 과정 정리 (Notion)",
                url: "https://byeongminn.notion.site/JWT-with-jsonwebtoken-jose-1cfdca3c89978025b61cea485af4774c",
              },
            ],
          },
          {
            title: "페이지 성능 및 접근성 미흡",
            issues: [
              "메인 페이지 및 상품 상세 페이지의  Lighthose 점수가 낮음",
              "이미지 최적화가 부족하여 LCP(Largest Contentful Paint) 시간이 길어지고,일부 UI 요소가 늦게 렌더링되는 문제가 발생",
              "웹 접근성이 미흡하여 Lighthouse에서 'Links do not have a discernible name' 등의 오류 발생",
            ],
            approaches: [
              "next/image를 도입하여 기존 <img> 태그를 최적화",
              "sizes 속성을 활용하여 뷰포트별 적절한 이미지 크기 제공",
              "Lazy Loading 적용으로 화면에 보이는 이미지부터 로드하여 LCP 시간 단축",
              "상품 상세페이지 썸네일의 priority 조건을 수정하여 LCP 시간 단축",
              "클릭 가능한 링크에 `aria-label`을 추가하여 웹 접근성 개선",
            ],
            outcomes: [
              "메인 페이지 성능 및 접근성 개선 (Performance 76 → 100, Accessibility 89 → 94, Best Practices 78 → 100)",
              "상품 상세페이지 성능 및 접근성 개선 (Performance 83 → 100, Accessibility 87 → 95)",
              "LCP 시간 개선으로 사용자 경험 향상",
            ],
          },
          {
            title: "상품 목록 로딩 방식 개선 (페이지네이션 → 무한 스크롤 적용)",
            issues: [
              "기존에는 페이지네이션 방식으로 데이터를 로드했으나, 사용자가 여러 페이지를 이동해야 하는 불편함 발생",
              "페이지 전환 시 화면이 깜빡이며 끊기는 문제도 존재",
            ],
            approaches: [
              "useSuspenseInfiniteQuery를 활용하여 Suspense 기반의 무한 스크롤 구현",
              "Suspense 적용으로 데이터가 로드될 때 UI 깜빡임 방지",
              "react-intersection-observer를 활용하여 사용자가 목록 끝에 도달하면 자동으로 데이터 로드",
              "@tanstack/react-query의 fetchNextPage를 사용하여 중복 요청을 방지하고, 캐싱을 통해 불필요한 API 호출 최소화",
            ],
            outcomes: [
              "UX 개선: 사용자가 자연스럽게 상품 목록을 탐색할 수 있도록 최적화",
              "API 요청 최적화: Suspense 적용으로 불필요한 로딩 상태 제거, API 호출 횟수 감소",
              "성능 최적화: @tanstack/react-query의 캐싱 기능을 활용하여 데이터 로딩 속도 개선",
            ],
          },
        ],
        achievements: [
          {
            title: "메인페이지 성능 및 접근성 개선",
            descriptions: [
              "Performance 76 → 100",
              "Accessibility 89 → 94",
              "Best Practices 78 → 100",
            ],
          },
          {
            title: "상품 상세페이지 성능 및 접근성 개선",
            descriptions: ["Performance 83 → 100", "Accessibility 87 → 95"],
          },
        ],
      },
      {
        segment: "linme",
        thumbnail: {
          src: "linme",
          alt: "linme",
          width: 200,
          height: 100,
          backgroundColor: "#FF697B22",
        },
        title: "Linme",
        description:
          "사용자의 건강 데이터를 기반으로 맞춤형 건강기능식품을 추천하는 서비스",
        period: "2024. 07 ~ 2024. 11",
        outline: [
          "(주)이노즈 기업에서 진행한 프로젝트",
          "사용자의 건강 데이터를 기반으로 맞춤형 건강기능식품 추천 서비스 제공",
          "이커머스 구조: Client / Admin 페이지 분리",
          "기술 스택: Next.js App Router, React, TypeScript, Context API, @tanstack/react-query, Mui, SCSS, Docker",
        ],
        stacks: [
          "Next.js App Router",
          "React",
          "TypeScript",
          "Context API",
          "@tanstack/react-query",
          "Mui",
          "SCSS",
          "Docker",
        ],
        features: [
          {
            title: "메인 페이지",
            descriptions: [
              "카테고리별로 상품을 분류하여 쉽게 탐색 가능",
              "무한 스크롤을 적용해 상품 목록을 자동으로 로드",
              "추천순, 가격순 등 정렬 옵션을 제공하여 사용자가 원하는 기준으로 상품 정렬 가능",
            ],
          },
          {
            title: "장바구니 페이지",
            descriptions: [
              "선택한 상품을 장바구니에 추가 및 삭제할 수 있도록 기능 제공",
            ],
          },
          {
            title: "주문 내역 페이지",
            descriptions: [
              "사용자가 구매한 상품의 주문 내역을 한눈에 확인 가능",
            ],
          },
        ],
        roles: {
          admin: [
            {
              title: "API 데이터 관리 최적화",
              descriptions: [
                "@tanstack/react-query를 도입하여 API 중복 호출 방지 및 데이터 캐싱 구현",
              ],
            },
            {
              title: "폼 상태 관리 및 검증 강화",
              descriptions: [
                "React-Hook-Form을 도입하여 폼 상태 관리를 최적화",
              ],
            },
            {
              title: "안정성 및 에러 처리 강화",
              descriptions: [
                "API 호출 시 validation 및 try-catch를 적용하여 예외 발생 시 UI 오류를 최소화",
              ],
            },
            {
              title: "코드 구조 개선 및 유지보수성 향상",
              descriptions: [
                "Hooks 디자인 패턴 적용 (useMember, useMemberList 등)",
                "UI와 비즈니스 로직을 분리하여 컴포넌트 재사용성 및 유지보수성 향상",
              ],
            },
            {
              title: "프로젝트 디렉토리 구조 변경",
              descriptions: [
                "프로젝트 내 파일을 전수 조사하여 사용하지 않는 파일 및 디렉토리를 제거하고 구조를 정리하여 코드 가독성과 유지보수성을 향상",
              ],
            },
          ],
          client: [
            {
              title: "반응형 디자인 구현",
              descriptions: [
                "모바일, 태블릿, 데스크탑 환경에서 최적화된 UI 제공",
              ],
            },
            {
              title: "SEO 최적화",
              descriptions: [
                "react-helmet-async를 활용하여 메타 데이터 설정을 최적화",
                "Sitemap을 작성하여 검색엔진 노출도 개선",
              ],
            },
            {
              title: "Next.js App Router로 전환 작업 진행 중",
              descriptions: [
                "SEO 최적화 이점을 활용하기 위해 기존 React 구조에서 Next.js App Router로 전환 작업을 진행 중",
              ],
            },
          ],
          default: [],
        },
        solutions: [
          {
            title: "대형 컴포넌트 분리 및 폼 구조 최적화",
            issues: [
              "컴포넌트가 4,000줄이 넘는 대형 구조로 작성되어 유지보수에 어려움이 있었음",
              "폼 상태가 useState로 관리되어 입력 변경 시 불필요한 렌더링이 다수 발생하는 문제가 있었음",
              "폼 검증 로직이 부족하여 유효하지 않은 데이터가 저장될 가능성이 있었음",
            ],
            approaches: [
              "기능별로 컴포넌트를 분리하여 관심사를 명확히 나누고 컴포넌트 구조를 재정비",
              "실시간 유효성 검사가 아닌 등록 시점에만 검증이 수행되는 폼의 특성에 맞춰, 제어 컴포넌트 기반인 useState 대신 비제어 컴포넌트 기반인 useRef 상태 관리를 지원하는 React-Hook-Form을 도입하여 폼 상태를 최적화하고 불필요한 렌더링을 방지",
              "각 주요 입력 필드에 validation을 적용하여 사용자 입력값에 대한 실시간 검증 로직 강화",
            ],
            outcomes: [
              "컴포넌트 분리 및 최적화로 전체 코드량 21.84% 감소",
              "입력 오류 발생률 감소 및 사용자 데이터 신뢰성 향상",
              "렌더링 최적화로 불필요한 성능 낭비 감소",
            ],
          },
          {
            title: "SEO 최적화 부족으로 검색 노출도 저조",
            issues: [
              "SPA 구조로 인해 SEO 친화적이지 못하여 페이지가 거의 노출되지 않는 문제가 있었음",
            ],
            approaches: [
              "react-helmet-async를 활용하여 메타데이터를 최적화하고 페이지별 정보 제공 구조 개선",
              "Sitemap을 작성하여 검색엔진 크롤링 효율을 향상",
              "SEO 구조를 근본적으로 개선하기 위해  프로젝트를 Next.js 기반으로 전환하는 작업을 진행",
            ],
            outcomes: ["검색 유입이 증가했고, 실제 판매량 상승으로 이어짐"],
          },
          {
            title: "API 중복 호출로 인한 성능 저하",
            issues: [
              "동일한 데이터를 여러 컴포넌트에서 중복 요청하여 네트워크 부하 증가 및 응답 속도 저하",
            ],
            approaches: [
              "@tanstack/react-query를 활용하여 데이터 캐싱 및 중복 호출 방지",
            ],
            outcomes: ["API 요청 횟수 감소", "페이지 로딩 속도 개선"],
          },
        ],
        achievements: [
          {
            title: "코드량 21.84% 감소",
            descriptions: ["코드 컴포넌트화를 통해 유지보수성과 가독성 향상"],
          },
          {
            title: "검색 노출도 증가",
            descriptions: ["SEO 작업 및 사이트맵 작성으로 검색엔진 최적화"],
          },
          {
            title: "안정성 강화",
            descriptions: [
              "try-catch와 validation 추가로 에러 처리 효율성 증대",
            ],
          },
        ],
      },
      {
        segment: "billie",
        thumbnail: {
          src: "billie",
          alt: "billie",
          width: 200,
          height: 70,
          backgroundColor: "#5357FF22",
        },
        title: "Billie",
        description:
          "오프라인 문서를 통해 관리되던 직원들의 근태 및 기자재를 더욱 체계적으로 관리할 수 있도록 돕는 서비스",
        period: "2022. 04 ~ 2023. 12",
        outline: [
          "(주)스마트모빌러티 기업에서 진행한 프로젝트",
          "서비스 목적: 오프라인 문서를 통해 관리되던 직원들의 근태 및 기자재를 디지털화하여 관리 효율성을 개선하는 서비스 제공",
          "기술 스택: React, TypeScript, Context API, @emotion, SCSS",
        ],
        stacks: ["React", "TypeScript", "Context API", "@emotion", "SCSS"],
        features: [
          {
            title: "회원 관리",
            descriptions: [
              "회원가입 및 로그인 기능 제공",
              "비밀번호 찾기 기능 지원",
            ],
          },
          {
            title: "일정 및 경비 관리",
            descriptions: [
              "차량, 교통카드, 법인카드 예약 신청 기능",
              "개인 경비 청구 기능",
              "관리자 승인 및 반려 기능",
            ],
          },
          {
            title: "근무 및 휴가 관리",
            descriptions: [
              "휴가 및 추가 근무 신청 기능",
              "관리자 승인 및 반려 기능",
            ],
          },
          {
            title: "게시판 시스템",
            descriptions: ["공지사항 게시판 제공", "익명 게시판 기능 지원"],
          },
          {
            title: "문서 관리",
            descriptions: [
              "사용자가 업로드한 기안 문서를 진행 상태(진행 중/완료) 및 유형(출장/경비/휴가/추가 근무)별로 필터링하여 확인 가능",
            ],
          },
        ],
        roles: {
          default: [
            {
              title: "기능 개발 및 코드 리팩토링",
              descriptions: ["효율적이고 유지 보수가 용이한 코드 베이스 구축"],
            },
            {
              title: "사용자 피드백 수집 및 개선",
              descriptions: [
                "사용자의 불편함을 분석하고 개선을 위한 기획회의 참여",
              ],
            },
            {
              title: "전반적인 UI 구현 및 유지보수",
              descriptions: ["사용자 경험을 고려한 UI 설계 및 기능 개발"],
            },
          ],
        },
        solutions: [
          {
            title: "UX 중심 기능 개선과 협업 조율 경험",
            issues: [
              "차량·법인카드·교통카드 예약 시스템이 각각 분리되어 있어, 예약 흐름이 복잡하고 관리가 어려웠음",
              "예약 현황이 월별 캘린더에만 표시되어 전체 일정을 한눈에 파악하기 어려운 문제가 있었음",
              "인사팀과 실사용자 간에 기능 개선에 대한 필요성과 우선순위가 달라 조율이 필요했음",
            ],
            approaches: [
              "각 이해관계자 인터뷰를 통해 공통 니즈를 정리하고, 충돌되는 요구사항은 ‘업무 영향도’와 ‘빈도’를 기준으로 우선순위를 설정하여 합의점 도출",
              "사용자 중심 기능부터 우선 구현하고, 인사팀 요청 기능은 릴리즈 이후 점진적으로 반영하는 구조로 설득",
              "단계별 구현 계획을 명확히 공유해 공감대를 형성하고 협업 흐름을 안정적으로 유지",
              "세 개의 예약 시스템을 하나의 화면으로 통합하고, 하루 단위 타임라인 뷰를 추가해 전체 일정을 한눈에 파악할 수 있도록 개선",
            ],
            outcomes: [
              "예약 절차 단순화 및 일정 가독성·정보 접근 속도 개선을 통해 사용자 중심의 실질적 개선 효과 확보",
              "서로 다른 요구를 가진 팀 간 조율을 원활히 이끌어내며, 실질적인 협업 능력을 인정받음",
            ],
          },
          {
            title: "공통 로직 모듈화로 코드 품질 개선",
            issues: [
              "유사한 코드가 여러 컴포넌트에서 반복되어 유지보수에 어려움이 있었음",
              "개발 생산성과 코드 품질을 높이기 위해, 재사용 가능한 공통 로직을 모듈화할 필요가 있다고 판단",
            ],
            approaches: [
              "반복되는 UI를 별도 컴포넌트로 분리하여 일관성을 확보하고 재사용성을 극대화",
              "비즈니스 로직은 커스텀 훅으로 추상화하여, 다양한 페이지/컴포넌트 간에 쉽게 재사용할 수 있도록 설계",
              "포맷 변환, 검증 로직 등의 공통 기능을 유틸 함수로 모듈화하여 중복을 줄이고 유지보수성 개선",
              "모듈 분리 시 단일 책임 원칙을 적용하여, 역할 단위로 책임을 명확히 구분함",
            ],
            outcomes: [
              "코드 반복 횟수 67% 감소",
              "가독성과 코드 구조가 개선되어 신규 기능 추가 시 안정성 향상",
              "역할 분리가 명확해져 협업 시 이해도와 커뮤니케이션 효율 증가",
            ],
          },
          {
            title: "오프라인 기반의 근태 및 기자재 관리로 인한 비효율성",
            issues: [
              "기존에는 문서 기반으로 근태 및 기자재를 관리하여 데이터 검색과 수정이 어려움",
              "수기 입력으로 인해 데이터의 정확성이 떨어지고, 기록 관리에 시간이 많이 소요됨",
            ],
            approaches: [
              "디지털 시스템을 도입하여 근태 및 기자재 관리 자동화",
              "출퇴근 기록 및 기자재 대여 이력을 데이터베이스에 저장하여 관리 효율성 증대",
            ],
            outcomes: [
              "업무 처리 속도 67% 단축",
              "데이터 검색 및 수정이 간편해짐",
              "수기 업무를 완전히 대체하여 종이 사용량 100% 절감",
            ],
          },
        ],
        achievements: [
          {
            title: "업무 처리 속도 67% 감소",
            descriptions: ["대규모 리뉴얼을 통해 시스템 효율성을 극대화"],
          },
          {
            title: "코드 반복 횟수 67% 감소",
            descriptions: ["컴포넌트화를 통해 반복 제거 및 재사용성 향상"],
          },
          {
            title: "업무 프로세스 디지털화",
            descriptions: [
              "기존 수기 업무를 Billie로 이관하여 종이 사용 100% 절감",
            ],
          },
        ],
      },
      {
        segment: "pima",
        thumbnail: {
          src: "pima",
          alt: "pima",
          width: 200,
          height: 55,
          backgroundColor: "#19191922",
        },
        title: "PIMA (Platform for IMpact Analysis)",
        description:
          "철도 및 대중교통 사업의 사회경제적 지표 분석을 통해 사업 시행 전후영향을 분석 및 시각화하여 유관 정책 추진 시 활용할 수 있는 플랫폼",
        period: "2022. 12 ~ 2023. 09",
        outline: [
          "(주)스마트모빌러티 기업에서 진행한 프로젝트",
          "서비스 목적: 철도 및 대중교통 사업의 사회경제적 지표 분석을 통해 사업 시행 전후의 영향을 분석 및 시각화하여 유관 정책 추진 시 활용할 수 있도록 서비스 제공",
          "기술 스택: React, Context API, @emotion",
        ],
        stacks: ["React", "Context API", "@emotion"],
        features: [
          {
            title: "참고 지도 페이지",
            descriptions: [
              "체크박스를 활용해 지도 위에 특정 공간 데이터 레이어를 표출",
              "여러 개의 레이어를 중복 선택하여 동시에 시각화 가능",
            ],
          },
          {
            title: "현황 분석 페이지",
            descriptions: [
              "행정 구역을 기준으로 분석 영역 설정 가능",
              "폴리곤 또는 원형을 활용한 맞춤형 분석 영역 설정 지원",
              "선택한 영역 내의 경제 지표 데이터를 격자(Grid) 및 POI(Point of Interest) 형태로 시각화",
              "지도 분할 기능을 통해 연도별 데이터를 나란히 비교하고 수치 차이를 직관적으로 확인 가능",
            ],
          },
        ],
        roles: {
          default: [
            {
              title: "지도 라이브러리를 이용한 데이터 분석 및 시각화",
              descriptions: [
                "OpenLayers를 활용하여 지도 기반 데이터 시각화 구현",
              ],
            },
            {
              title: "Geoserver 데이터베이스 구축",
              descriptions: [
                "공간 데이터를 효율적으로 관리하기 위해 Geoserver 환경 구성 및 최적화",
              ],
            },
            {
              title: "UI 전반의 개발 및 기능 개발",
              descriptions: [
                "데이터를 직관적으로 제공할 수 있도록 UI 설계 및 구현",
              ],
            },
          ],
        },
        solutions: [
          {
            title: "요구사항을 반영한 영역 분석 기능 설계 경험",
            issues: [
              "폴리곤·원형 형태로 특정 영역만 선택하여 분석하고자 하는 수요가 있었음",
              "OpenLayers의 기능을 활용해 영역 설정, 공간 데이터 필터링, 면적·반지름 계산 기능을 구현할 필요가 있다고 판단",
            ],
            approaches: [
              "OpenLayers의 Draw 인터랙션을 활용해 사용자 지정 폴리곤·원형 도형 생성 기능 구현",
              "도형 생성 후, ol/sphere/getArea, getLength, geometry.getRadius() 등을 사용해 실시간으로 면적·반지름 계산 및 지도 위 표기",
              "공간 데이터는 WFS 벡터 형태로 제공받았으며, intersectsExtent 메서드를 통해 설정된 도형 영역과 겹치는 데이터만 필터링",
            ],
            outcomes: [
              "필터링된 데이터를 격자 형태로 지도에 시각화하여 밀도·분포를 직관적으로 제공",
            ],
          },
          {
            title: "공간 데이터 시각화를 통한 정보 전달력 향상",
            issues: [
              "정보 전달력을 높이기 위해 공간 데이터를 지도 위에 시각화할 필요가 있다고 판단",
            ],
            approaches: [
              "지도 시각화 도구 검토 과정에서 WMS·WFS 지원과 도형 그리기, 필터링 등 고급 GIS 기능을 안정적으로 제공하는 OpenLayers를 채택",
              "GeoServer에서 제공되는 WMS 데이터를 ol.layer.Tile 및 ol.source.TileWMS를 통해 시각화",
              "계층형 체크박스를 통해 ‘철도망 구축 계획’, ‘연도별 개통 현황’ 등 다양한 지표를 선택해 지도에 개별 또는 복수로 표출 가능하도록 구현",
            ],
            outcomes: [
              "지도 기반 시각화를 통해 데이터의 이해도 및 전달력 향상",
            ],
          },
          {
            title:
              "GIS 공간 데이터를 효과적으로 관리하기 위한 데이터베이스 구축 필요",
            issues: [
              "철도 노선, 경제 지표 등의 공간 데이터를 효율적으로 저장하고 관리할 시스템이 필요",
              "기존에는 공간 데이터를 개별적으로 관리하며 중앙화된 데이터베이스가 없었음",
            ],
            approaches: [
              "Geoserver를 활용하여 공간 데이터베이스 구축",
              "철도 노선, 경제 지표 등의 데이터를 Geoserver를 통해 관리",
            ],
            outcomes: [
              "공간 데이터를 중앙에서 관리할 수 있는 환경 구축",
              "데이터 저장 및 검색 속도 최적화",
            ],
          },
          {
            title: "공공 데이터 및 GIS 오픈 API 활용을 통한 데이터 확보",
            issues: [
              "철도 사업과 관련된 다양한 데이터를 수집해야 했지만, 모든 데이터를 직접 구축하기에는 어려움이 있었음",
              "외부 기관의 오픈 데이터를 활용하여 기존 시스템과 연계할 필요성이 존재",
            ],
            approaches: [
              "Vworld 등 공공 GIS 오픈 API를 활용하여 철도 및 공간 데이터를 수집 및 연계",
              "OpenLayers 기반 지도 서비스와 외부 API 데이터를 통합하여 정보 제공",
            ],
            outcomes: [
              "공공 데이터를 활용한 비용 절감 및 신뢰도 높은 데이터 제공",
              "철도 및 경제 지표 데이터를 지속적으로 업데이트할 수 있는 구조 확보",
            ],
          },
        ],
        achievements: [
          {
            title: "웹 지도 서비스 개발",
            descriptions: ["OpenLayers를 활용하여 지도 서비스 구축 및 구현"],
          },
          {
            title: "오픈 API 활용 능숙",
            descriptions: [
              "Vworld 등 오픈 API를 활용하여 데이터 통합 및 서비스 구축",
            ],
          },
          {
            title: "지리 정보 시스템 숙련",
            descriptions: [
              "QGIS, Geoserver 등 GIS 도구를 활용한 데이터 분석 및 시각화",
            ],
          },
        ],
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
