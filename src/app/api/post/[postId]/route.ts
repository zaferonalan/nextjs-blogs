import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

interface ContextProps {
    params: {
        postId: string
    }
}

export async function DELETE(req:Request, context: ContextProps) {
    try {
        const { params } = context
        await prisma.post.delete({
            where: {
                id: params.postId
            }
        })
        return new Response(null, { status: 204 })
    } catch (error) {
        return NextResponse.json({ message: "could not delete post" }, { status: 500 })
    }
}


export async function PATCH(req: Request, context:ContextProps) {
    try {
        const { params } = context
        const body = await req.json()

        await prisma.post.update({
            where: {
                id: params.postId
            },
            data: {
                content: body.content,
                title: body.title,
                tagId: body.tagId
            }
        })
        return NextResponse.json({ message: "update success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Could not update post"}, { status: 500 })
    }
}