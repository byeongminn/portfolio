import { NextRequest } from "next/server";
import {
  GetProjectItemRequestParams,
  GetProjectItemResponse,
} from "@/features/projects/api/getProject";
import { DATA_URL } from "@/shared/constants";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<GetProjectItemRequestParams> }
) => {
  try {
    const title = (await params).title;

    const data = await fetch(`${DATA_URL}/projectItems.json`).then((res) =>
      res.json()
    );

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
