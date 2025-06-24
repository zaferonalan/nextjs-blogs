import EditForm from '../_component/EditForm'
import Backbutton from '@/components/BackButton/Backbutton'

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { id } = params

  return (
    <div className='container mx-auto px-4 py-4'>
      <Backbutton />
      <h1 className='text-2xl my-4 font-bold text-center'>Edit post</h1>
      
      <EditForm id={id} />
    </div>
  )
}