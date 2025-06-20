"use client"
import Formpost from '@/components/Formpost/Formpost'
import { FormInputPost } from '@/types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const Postcomp = () => {
  const router = useRouter()
  const handleCreatePost:SubmitHandler<FormInputPost> = (data) => {
      createPost(data)
    }

    const { mutate: createPost } = useMutation({
      mutationFn: (newPost: FormInputPost) => {
        return axios.post('/api/post/create', newPost)
      },
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {
        router.push("/")
      }
    })
  return (
    <div>
        <Formpost submit={handleCreatePost} isEditing={false}/>
    </div>
  )
}

export default Postcomp