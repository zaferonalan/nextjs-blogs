import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId
            }
        })
        return NextResponse.json(post, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "could not create post"}, {status: 500})
    }
}