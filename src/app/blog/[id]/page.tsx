import ButtonAction from '@/components/DetailButton/ButtonAction'
import React from 'react'

const BlogDetailPage = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
        <div className='mb-8'>
            <h2 className='text-2xl font-bold my-4'>Post One</h2>
            <ButtonAction/>
        </div>
        <p className='text-slate-700'>Post one content</p>
    </div>
  )
}

export default BlogDetailPage