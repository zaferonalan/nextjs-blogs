import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-neutral-100'>
        <div className='container mx-auto px-4 py-4 flex'>
            <div className='flex-1/2'>
                <Link href="/">Icon</Link>
            </div>
            <div className='flex-none'>
                <Link href="/create" className=''>Create Post</Link>
            </div>
        </div>
    </div>
  )
}

export default Header