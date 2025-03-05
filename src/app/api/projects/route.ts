import projectItems from "@/shared/data/projectItems.json";

export const GET = async () => {
  try {
    const data = projectItems;

    return Response.json({ projects: data });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
