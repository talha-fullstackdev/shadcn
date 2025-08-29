"use client"
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const CarouselDemo = () => {
  // Array of images
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg","/5.jpg"];

  return (
    <div className="grid place-items-center mt-10">
      <Carousel className="w-[80%]"   plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex items-center justify-center p-6 h-[85vh]">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
