"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tag } from "@/generated/prisma"
import Link from "next/link"
import { FC } from "react"
import { Badge } from "../ui/badge"

// type Props = {
//   post: Post
// }
interface PostCardProps {
  post: {
    id: string,
    title: string,
    content: string,
    Tag: Tag
  }
}
const CardModel:FC<PostCardProps> = ({post}) => {
  const { id, content, Tag, title } = post

  return (
    <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{content.slice(0, 30)}</p>
        </CardContent>
        <CardFooter>
            <CardAction>
              <Badge>{Tag.name}</Badge>
              <Link href={`/blog/${id}`} className="hover:underline ml-2">Read more...</Link>
            </CardAction>
        </CardFooter>
    </Card>
  )
}

export default CardModel