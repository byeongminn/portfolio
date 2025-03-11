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
          "이커머스에 관심을 바탕으로, Next.js의 App Router와 FSD 디렉토리 구조 연습을 위해 상품 목록, 검색, 상세보기 기능을 구현한 개인 프로젝트",
        period: "2024. 12 ~ 2024. 12",
        outline: [
          "1인 사이드 프로젝트",
          "프로젝트 목적: Next.js의 App Router와 FSD 디렉토리 구조를 연습하기 위해 상품 목록, 검색, 상세보기 기능을 구현한 1인 쇼핑몰 프로젝트",
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
            title: "API 중복 호출로 인한 성능 저하",
            issues: [
              "상품 목록 페이지에서 같은 데이터를 여러 번 요청하면서 불필요한 API 호출이 발생",
              "네트워크 부하 증가 및 응답 속도 저하 문제",
            ],
            approaches: [
              "@tanstack/react-query를 활용하여 데이터 캐싱 및 중복 호출 방지",
            ],
            outcomes: ["API 요청 횟수 감소", "메인 페이지의 로딩 속도 개선"],
          },
          {
            title: "비즈니스 로직과 UI가 분리되지 않아 유지보수성이 낮음",
            issues: [
              "API 호출 및 데이터 가공 로직이 컴포넌트 내부에 직접 작성됨",
              "컴포넌트 크기가 커지고, 재사용성이 낮아 유지보수 어려움",
            ],
            approaches: [
              "useGetGoods, useGetGoodsDetail, useGetSearchGoods Custom Hooks 설계",
              "데이터 관련 로직을 분리하여 UI는 렌더링만 담당하도록 구조화",
            ],
            outcomes: ["코드 가독성 및 재사용성 증가", "유지보수 비용 감소"],
          },
          {
            title: "스타일 재사용성 부족 및 반응형 디자인 최적화 필요",
            issues: ["반응형 스타일을 효율적으로 관리하는 방식이 부족함"],
            approaches: [
              "responsiveStyle 유틸을 만들어 반응형 스타일을 일관성 있게 적용",
            ],
            outcomes: [
              "반응형 디자인 구현이 단순화되고, 스타일 재사용성이 증가",
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
            title: "API 중복 호출로 인한 성능 저하",
            issues: [
              "동일한 데이터를 여러 컴포넌트에서 중복 요청하여 네트워크 부하 증가 및 응답 속도 저하",
            ],
            approaches: [
              "@tanstack/react-query를 활용하여 데이터 캐싱 및 중복 호출 방지",
            ],
            outcomes: ["API 요청 횟수 감소", "페이지 로딩 속도 개선"],
          },
          {
            title: "기존 폼 상태 관리 방식의 비효율성과 입력 검증 부족",
            issues: [
              "기존 폼 상태 관리가 useState로 이루어져 있어, 상태 변경 시 불필요한 렌더링 발생",
              "폼 입력 값에 대한 검증 로직이 부족하여 유효하지 않은 데이터가 저장될 가능성이 존재",
            ],
            approaches: [
              "React-Hook-Form을 도입하여 폼 상태 관리를 최적화하여 불필요한 렌더링을 방지",
              "각 주요 입력 폼에 Validation을 적용하여 입력 값 검증을 강화",
            ],
            outcomes: [
              "입력 오류 발생률 감소",
              "사용자 입력 데이터의 신뢰성 향상",
              "렌더링 최적화로 불필요한 성능 낭비 감소",
            ],
          },
          {
            title: "SEO 최적화 부족으로 검색 노출도 저조",
            issues: [
              "Google 검색에서 페이지가 거의 노출되지 않음",
              "검색 엔진이 크롤링하기 어려운 구조",
            ],
            approaches: [
              "react-helmet-async를 활용하여 메타데이터 최적화",
              "Sitemap을 작성하여 검색엔진 크롤링 개선",
              "SEO 최적화를 위해 기존 React 구조에서 Next.js App Router로 전환 작업을 진행 중",
            ],
            outcomes: ["검색 노출도 증가", "사이트 트래픽 상승"],
          },
          {
            title: "코드 가독성 및 유지보수성 부족",
            issues: [
              "기존 코드베이스에서 기능이 섞여 있어 유지보수성이 낮음",
              "특정 기능을 수정할 때 여러 파일을 변경해야 하는 비효율성 존재",
            ],
            approaches: [
              "프로젝트 내 파일을 전수 조사하여 사용하지 않는 파일 및 디렉토리를 제거하고 구조를 정리",
              "Custom Hooks를 활용하여 데이터 로직을 모듈화",
            ],
            outcomes: ["코드량 21.84% 감소", "유지보수성 향상"],
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
          "기술 스택: React, TypeScript, Recoil, Context API, @emotion, SCSS",
        ],
        stacks: [
          "React",
          "TypeScript",
          "Recoil",
          "Context API",
          "@emotion",
          "SCSS",
        ],
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
          {
            title: "코드 반복과 유지보수 어려움",
            issues: [
              "유사한 코드가 여러 컴포넌트에서 반복되어 유지보수가 어려움",
              "새로운 기능을 추가할 때 중복된 코드 수정이 많아 유지보수 비용 증가",
            ],
            approaches: [
              "컴포넌트화를 진행하여 재사용성을 극대화",
              "공통 기능을 커스텀 훅(Custom Hook)과 유틸 함수로 분리하여 유지보수 용이하게 개선",
            ],
            outcomes: [
              "코드 반복 횟수 67% 감소",
              "가독성과 코드 구조 개선",
              "협업 효율성 증가",
            ],
          },
          {
            title: "사용자 피드백을 반영한 UI 및 예약 시스템 개선",
            issues: [
              "초기 네비게이션 바는 세로형이었으나, 사용자들이 불편하다는 의견이 많았음",
              "차량, 법인카드, 교통카드를 각각 따로 예약해야 하는 번거로움이 있음",
              "월별 캘린더 위에만 예약 정보를 표시하여 전체 일정 파악이 어려움",
            ],
            approaches: [
              "네비게이션 바를 세로형에서 가로형으로 변경하여 접근성 및 사용성 개선",
              "차량, 법인카드, 교통카드 예약을 하나의 화면에서 통합하여 관리 가능하도록 UI 개편",
              "기존 월별 캘린더 방식 외에도, 하루 타임라인 기반 예약 정보 섹션을 추가하여 가독성 향상",
            ],
            outcomes: [
              "UX 개선으로 사용자 만족도 증가",
              "예약 절차 단순화로 업무 효율성 향상",
              "일정 파악이 쉬워져 사용자의 정보 접근 속도 개선",
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
            title:
              "철도 사업 시행 전후의 영향을 분석할 수 있는 데이터 시각화 필요",
            issues: [
              "철도 사업의 사회경제적 영향을 분석하기 위해 다양한 공간 데이터를 활용해야 했으나, 이를 효과적으로 시각화할 방안이 부족",
              "단순 데이터 테이블 방식은 직관적이지 않아 이해도가 낮고, 정책 수립 시 활용성이 떨어지는 문제 발생",
            ],
            approaches: [
              "OpenLayers를 활용하여 웹 지도 기반 데이터 시각화 구현",
              "공간 데이터(기본도, 철도 노선, 구축 계획 등)를 지도 위에 시각적으로 표현",
              "체크박스를 통해 특정 지표 레이어를 지도 위에 표출할 수 있도록 기능 구현",
            ],
            outcomes: [
              "지도를 활용한 데이터 제공으로 이해도 향상 및 정책 수립 시 활용성 증가",
            ],
          },
          {
            title:
              "분석 영역을 설정하여 특정 데이터만 표출할 수 있는 기능 필요",
            issues: [
              "지도 위에서 특정 영역만 분석하고 싶다는 요구사항이 있었으나, 지정된 영역에 해당하는 데이터만 필터링하는 기능이 없었음",
              "폴리곤 또는 원형으로 분석 영역을 설정하고, 폴리곤의 경우 너비, 원형의 경우 반지름 길이를 표기할 수 있도록 개선 요청이 있었음",
              "설정된 영역 내의 데이터만 격자 형태로 시각화해야 하는 요구사항이 추가됨",
            ],
            approaches: [
              "OpenLayers를 활용하여 폴리곤 및 원형 영역을 설정하는 기능 구현",
              "폴리곤을 생성하면 자동으로 너비를 계산하여 표기, 원형을 설정하면 반지름 길이를 표시하도록 UI 개선",
              "설정된 영역 내의 데이터만 필터링하여 격자 형태로 지도 위에 시각적으로 표출",
            ],
            outcomes: [
              "사용자가 원하는 특정 영역만 선택하여 분석 가능",
              "영역별 데이터 필터링 기능이 추가되면서 사용자 편의성 향상",
              "격자 기반 데이터 시각화로 분석 효율성 증가",
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
