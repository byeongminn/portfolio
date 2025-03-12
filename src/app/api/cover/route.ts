import { ICON_URL } from "@/shared/constants";

export const GET = async () => {
  try {
    return Response.json({
      title: {
        p1: "프론트엔드 개발자",
        p2: "전병민입니다",
      },
      stacks: {
        frontend: [
          {
            iconUrl: `${ICON_URL}/nextjs.svg`,
            name: "Next.js",
          },
          {
            iconUrl: `${ICON_URL}/react.svg`,
            name: "React",
          },
          {
            iconUrl: `${ICON_URL}/typescript.svg`,
            name: "Typescript",
          },
          {
            iconUrl: `${ICON_URL}/javascript.svg`,
            name: "Javascript",
          },
          {
            iconUrl: `${ICON_URL}/reactquery.svg`,
            name: "@tanstack/react-query",
          },
          {
            iconUrl: `${ICON_URL}/vanillaextract.svg`,
            name: "Vanilla-extract",
          },
          {
            iconUrl: `${ICON_URL}/styledcomponents.svg`,
            name: "Styled-components",
          },
          {
            iconUrl: `${ICON_URL}/tailwindcss.svg`,
            name: "Tailwind-CSS",
          },
        ],
        tools: [
          {
            iconUrl: `${ICON_URL}/git.svg`,
            name: "Git",
          },
          {
            iconUrl: `${ICON_URL}/github.svg`,
            name: "Github",
          },
          {
            iconUrl: `${ICON_URL}/jira.svg`,
            name: "Jira",
          },
          {
            iconUrl: `${ICON_URL}/notion.svg`,
            name: "Notion",
          },
          {
            iconUrl: `${ICON_URL}/slack.svg`,
            name: "Slack",
          },
          {
            iconUrl: `${ICON_URL}/figma.svg`,
            name: "Figma",
          },
        ],
      },
      info: {
        number: "010-9492-7765",
        email: "byeongmin000@gmail.com",
      },
    });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
