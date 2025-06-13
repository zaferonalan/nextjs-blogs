"use client"
import Formpost from '@/components/Formpost/Formpost'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const Postcomp = () => {
  const handleCreatePost:SubmitHandler<FormInputPost> = (data) => {
      console.log(data);
    }
  return (
    <div>
        <Formpost submit={handleCreatePost}/>
    </div>
  )
}

export default Postcomp