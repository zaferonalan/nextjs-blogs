import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const post = await prisma.post.findMany({
            select:{
                id: true,
                title: true,
                content: true,
                Tag: {
                    select:{
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json(post, {status:200})

    } catch (error) {
        return NextResponse.json({message: "could not fetch post"}, {status: 500})
    }
}