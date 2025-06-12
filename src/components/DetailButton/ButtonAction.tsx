import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const ButtonAction = () => {
  return (
    <div>
        <Button asChild>
            <Link href="/edit/id" className='mr-2'>
                <Pencil/>Edit
            </Link>
        </Button>
        <Button className='bg-red-500 hover:bg-red-400'>
            <Trash/>Delete
        </Button>
    </div>
  )
}

export default ButtonAction