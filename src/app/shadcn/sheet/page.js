import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
const SheetPage = () => {
  return (
<Sheet >
  <SheetTrigger className='ml-[20px] mt-[20px]' asChild><Button>open</Button></SheetTrigger>
  
  <SheetContent className="bg-slate-500" side="left"> 
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription className="text-white">
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent> 
</Sheet>

  )
}

export default SheetPage
// here we can change he direction of sheet , by default it is right side