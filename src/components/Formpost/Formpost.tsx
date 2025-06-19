"use client"
import React, { FC } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInputPost } from '@/types'
import { postSchema } from '@/zodSchema/schema'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { Tag } from '@/generated/prisma'
import { Loader2 } from 'lucide-react'

interface FormPostProps{
    submit: SubmitHandler<FormInputPost>
    isEditing: boolean
}

const Formpost: FC<FormPostProps> = ({submit, isEditing}) => {
    const {register, handleSubmit, control, formState:{errors}} = useForm<FormInputPost>({resolver: zodResolver(postSchema), defaultValues:{title: "", content: "", tag: ""}})

    const { data: dataTags, isLoading: isLoadingTags  } = useQuery<Tag[]>({
        queryKey: ["tags"],
        queryFn: async () => {
            const res = await axios.get("/api/tags")
            return res.data
        }
    })

    console.log(dataTags);
    
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
        <div className='w-full max-w-lg'>
            <Input {...register("title")} type='text' placeholder='Post title...' />
            { errors.title &&  <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
        </div>

        <div className='w-full max-w-lg'>
            <Textarea {...register("content")} placeholder='Post content...'/>
            { errors.content && <p className='text-red-500 text-sm mt-1'>{errors.content.message}</p> }
        </div>
        {
            (isLoadingTags ? (<Loader2 className='animate-spin'/>  ):(
                <div className='max-w-lg w-full'>
                    <Controller control={control} name='tag' render={({field}) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='max-w-lg w-full'>
                                <SelectValue placeholder="Select Tags" />
                            </SelectTrigger>
                            <SelectContent className='w-full'>
                                <SelectGroup>
                                    {dataTags?.map((items) => (
                                        <SelectItem key={items.id} value={items.id}>{items.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}>
                    </Controller>
                    { errors.tag && <p className='text-red-500 text-sm mt-1'>{errors.tag.message}</p> }
                </div>
            ))
        }

        <Button type='submit' className='bg-blue-600 hover:bg-blue-500 max-w-lg w-full'>
            {isEditing ? "UPDATE" :"CREATE"}
        </Button>
    </form>
  )
}

export default Formpost