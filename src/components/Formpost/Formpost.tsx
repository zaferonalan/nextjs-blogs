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
import { Tag } from '@/generated/prisma'
import { Loader2 } from 'lucide-react'
import { fetchTags } from '@/lib/api/tags'

interface FormPostProps{
    submit: SubmitHandler<FormInputPost>
    isEditing: boolean,
    initialValue?: FormInputPost
    isLoadingSubmit: boolean
}

const Formpost: FC<FormPostProps> = ({submit, isEditing, initialValue, isLoadingSubmit}) => {
    const {register, handleSubmit, control, formState:{errors}} = useForm<FormInputPost>({resolver: zodResolver(postSchema), defaultValues: initialValue})

    // const { data: dataTags, isLoading: isLoadingTags  } = useQuery<Tag[]>({
    //     queryKey: ["tags"],
    //     queryFn: async () => {
    //         const res = await axios.get("/api/tags")
    //         return res.data
    //     }
    // })

    const { data: dataTags, isLoading: isLoadingTags  } = useQuery<Tag[]>({
        queryKey: ["tags"],
        queryFn: fetchTags
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
                    <Controller control={control} name='tagId' render={({field}) => (
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
                    { errors.tagId && <p className='text-red-500 text-sm mt-1'>{errors.tagId.message}</p> }
                </div>
            ))
        }

        <Button type='submit' className='bg-blue-600 hover:bg-blue-500 max-w-lg w-full'>
            {isLoadingSubmit && <span className='animate-spin'><Loader2/></span>}
            {isEditing ? (isLoadingSubmit ? "Updating..." : "Update" ) : (isLoadingSubmit ? "Creating..." : "Create")}
        </Button>
    </form>
  )
}

export default Formpost