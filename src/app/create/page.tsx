import React from 'react'
import Postcomp from './_component/Postcomp'
import Backbutton from '@/components/BackButton/Backbutton'

const CreatePage = () => {

  return (
    <div className='container mx-auto px-4 py-4'>
      <Backbutton/>
      <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
      <Postcomp/>
    </div>
  )
}

export default CreatePage