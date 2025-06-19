"use client"
import React from 'react'
import CardModel from './CardModel'
import { fetchPost } from "@/lib/api/post"
import { useQuery } from "@tanstack/react-query"

const CardList = () => {
    const {data: postData,} = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost
  })
  console.log(postData);
  return (
    <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {postData?.map((post) => (
            <CardModel key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default CardList