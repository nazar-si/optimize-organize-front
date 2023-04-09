import { NextResponse } from "next/server";

import { GeneralAttribute } from "@/components/attributes/types";

export async function POST(request: Request): Promise<NextResponse> {
    const id = (await request.json()).id;
    return NextResponse.json([{
        data: "Название дома id",
        type: -1,
        permanent: true,
        parent: "building"
    }])
}