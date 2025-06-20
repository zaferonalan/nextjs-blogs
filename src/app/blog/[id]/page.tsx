import ButtonAction from '@/components/DetailButton/ButtonAction'
import Backbutton from '@/components/BackButton/Backbutton'
import prisma from '@/app/lib/prisma'
import { Badge } from 'lucide-react'

interface BlogDetailProps {
  params: {
    id: string
  }
}

async function getPost(id: string) {
  const response = await prisma.post.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true
    },
  })
  return response
}

const BlogDetailPage = async({params}: BlogDetailProps) => {
  console.log(params.id);
  
  const post = await getPost(params.id)

  return (
    <div className='container mx-auto px-4 py-4'>
        <Backbutton/>
        <div className='mb-8'>
            <h2 className='text-2xl font-bold my-4'>{post?.title}</h2>
            <ButtonAction/>
        </div>
        <Badge>{post?.Tag.name}</Badge>
        <p className='text-slate-700'>{post?.content}</p>
    </div>
  )
}

export default BlogDetailPage