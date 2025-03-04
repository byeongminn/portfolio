import { loadJsonData } from "@/shared/lib/data";

export const GET = () => {
  try {
    const data = loadJsonData("projectItems");

    return Response.json({ projects: data });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
