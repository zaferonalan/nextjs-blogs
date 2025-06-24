"use client"

import { Loader2, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface ButtonActionProps {
  id: string
}

const ButtonAction:FC<ButtonActionProps> = ({id}) => {

  const router = useRouter()

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: async() => {
      return await axios.delete(`/api/post/${id}`)
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/")
      router.refresh()
    }
  })

  return (
    <div>
        <Button asChild>
          <Link href={`/edit/${id}`} className='mr-2'>
              <Pencil/>Edit
          </Link>
        </Button>
        <Button onClick={() => deletePost()} className='bg-red-500 hover:bg-red-400'>
            {isPending ? 
              (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading
                </span>) 
              : 
              ( 
                <> 
                  <Trash/>Delete 
                </>
              )}
        </Button>
    </div>
  )
}

export default ButtonAction