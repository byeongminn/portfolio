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
            iconUrl: "",
            name: "Next.js",
          },
          {
            iconUrl: "",
            name: "React",
          },
          {
            iconUrl: "",
            name: "Typescript",
          },
          {
            iconUrl: "",
            name: "Javascript",
          },
          {
            iconUrl: "",
            name: "Vanilla-extract",
          },
          {
            iconUrl: "",
            name: "Styled-components",
          },
          {
            iconUrl: "",
            name: "Tailwind-CSS",
          },
        ],
        backend: [
          {
            iconUrl: "",
            name: "Next.js",
          },
        ],
        tools: [
          {
            iconUrl: "",
            name: "Git",
          },
          {
            iconUrl: "",
            name: "Github",
          },
          {
            iconUrl: "",
            name: "Jira",
          },
          {
            iconUrl: "",
            name: "Notion",
          },
          {
            iconUrl: "",
            name: "Slack",
          },
          {
            iconUrl: "",
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
