"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'

const ToastPage = () => {
  return (
    <div >
        <Button onClick={()=>toast.error("hello next js")}>Toast</Button> 
    </div>
  )
}

export default ToastPage
// we can also add toast colors like success , error , warning etc