import { DATA_URL } from "@/shared/constants";

export const GET = async () => {
  try {
    const data = await fetch(`${DATA_URL}/projectItems.json`).then((res) =>
      res.json()
    );

    return Response.json({ projects: data });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
