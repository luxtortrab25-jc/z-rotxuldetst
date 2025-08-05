'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';


interface MagnifierProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  zoomLevel?: number;
  loupeSize?: number;
  className?: string;
  imageClassName?: string;
  dataAiHint?: string;
}

export function Magnifier({
  src,
  width = 500,
  height = 700,
  alt,
  zoomLevel = 2.5,
  loupeSize = 200,
  className,
  imageClassName,
  dataAiHint,
}: MagnifierProps) {
  const isMobile = useIsMobile();
  const [showLoupe, setShowLoupe] = React.useState(false);
  const [[x, y], setPosition] = React.useState([0, 0]);
  const [[imgWidth, imgHeight], setImgSize] = React.useState([0, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setImgSize([width, height]);
    setPosition([x, y]);
  };

  if (isMobile) {
    return (
       <Dialog>
        <DialogTrigger asChild>
            <div className="cursor-pointer overflow-hidden rounded-lg">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto rounded-lg transition-transform duration-300"
                    data-ai-hint={dataAiHint}
                />
            </div>
        </DialogTrigger>
        <DialogContent 
          className="max-w-5xl p-0 border-0 bg-transparent"
        >
              <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
              />
        </DialogContent>
    </Dialog>
    );
  }

  return (
    <div
      onMouseEnter={() => setShowLoupe(true)}
      onMouseLeave={() => setShowLoupe(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden rounded-lg", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full h-auto rounded-lg", imageClassName)}
        data-ai-hint={dataAiHint}
      />
      <div
        style={{
          display: showLoupe ? 'block' : 'none',
          position: 'absolute',
          left: `${x - loupeSize / 2}px`,
          top: `${y - loupeSize / 2}px`,
          pointerEvents: 'none',
          height: `${loupeSize}px`,
          width: `${loupeSize}px`,
          border: '4px solid hsl(var(--primary))',
          borderRadius: '50%',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPosition: `-${x * zoomLevel - loupeSize / 2}px -${y * zoomLevel - loupeSize / 2}px`,
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          zIndex: 50,
        }}
      />
    </div>
  );
}
