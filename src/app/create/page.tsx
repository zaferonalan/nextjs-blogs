"use client"
import Formpost from '@/components/Formpost/Formpost'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {

  const handleCreatePost:SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  }

  return (
    <div className='container mx-auto px-4 py-4'>
        <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
        <Formpost submit={handleCreatePost}/>
    </div>
  )
}

export default CreatePage