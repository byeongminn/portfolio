export const GET = async () => {
  try {
    const data = await import("../../../../public/data/projectItems.json");

    return Response.json({ projects: data.default });
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
