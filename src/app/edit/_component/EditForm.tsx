"use client"

import Formpost from '@/components/Formpost/Formpost'
import { FormInputPost } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form';

interface EditFormProps {
  id: string
}

const EditForm: FC<EditFormProps> = ({ id }) => {
  const { data: dataPost, isLoading: isLoadingPost } = useQuery<FormInputPost>({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`/api/post/${id}`)
      return response.data
    },
    enabled: !!id // id varsa fetch et
  })

  const router = useRouter()

  const { mutate: updatePost, isPending: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/post/${id}`, newPost)
    },
    onError: (error) => {
      console.error(error)
    },
    onSuccess: () => {
      router.push("/")
      router.refresh()
    }
  })

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data)
  }

  if (isLoadingPost || !dataPost) {
    return (
      <div className='text-center py-10'>
        <Loader2 className='animate-spin w-6 h-6 mx-auto text-gray-600' />
      </div>
    )
  }

  return (
    <Formpost
      isLoadingSubmit={isLoadingSubmit}
      submit={handleEditPost}
      initialValue={dataPost}
      isEditing
    />
  )
}

export default EditForm