"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const ToastPage = () => {
    const sum= ()=>{
       let a = 20
       let b = 30
       let sum = a+b
       console.log(sum)

    }
  const handleToast = () => {
    const now = new Date();
    const weekday = now.toLocaleDateString(undefined, { weekday: "long" });
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    toast.success("Hello Next.js ", {
      description: `${weekday}, ${date} — ${time}`,
      action: {
        label: "X",
        onClick: () => {
         sum()
        },
      },
    });
  };

  return (
    <div className="mt-[20px] ml-[20px]">
      <Button onClick={handleToast}>Toast</Button>
    </div>
  );
};

export default ToastPage;

// we can also add toast colors like success , error , warning etc
// here we can pass more description to toast like that like description and action which contain a call back function
