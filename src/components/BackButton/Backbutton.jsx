"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Backbutton = () => {

  const router = useRouter()
  return (
    <Button className='' onClick={() => router.back()}>
      <ChevronLeft/> Back
    </Button>
  )
}

export default Backbutton