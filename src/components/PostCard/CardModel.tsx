import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const CardModel = () => {
  return (
    <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora, amet odio laborum sequi assumenda nihil, illo voluptates voluptatibus quia modi odit? Sed expedita aliquid quod molestias iste est facere!</p>
        </CardContent>
        <CardFooter>
            <CardAction>
              <Link href="/blog/1" className="hover:underline">Read more...</Link>
            </CardAction>
        </CardFooter>
    </Card>
  )
}

export default CardModel