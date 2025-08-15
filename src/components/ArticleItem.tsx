"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Card } from "./card";
import React from "react";

interface ArticleItemProps {
  id: number;
  title: string;
  img: string;
  link: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, img, link }) => {
  return (
    <Card variant='default' padding='sm' className="h-full flex flex-col">
        <Link href={link} className="flex flex-col group h-full">
              <div className="relative rounded-lg overflow-hidden w-full bg-white shadow-lg border border-stone-200">
                  <div className="relative aspect-[3/2]">
                      <Image
                          src={img}
                          alt={title}
                          fill
                          priority={true}
                          loading="eager"
                          fetchPriority="high"
                          placeholder="blur"
                          blurDataURL={img}
                          quality={70}                   // keep it lean; adjust if you show fine art/UI shots
                          sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                (max-width: 1536px) 33vw,
                400px"
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                  </div>
              </div>

            <div className="flex flex-col flex-1 mt-4 px-4 pb-4">
                <h4 className="text-xl md:text-2xl mt-2 font-thin text-stone-800 transition-all duration-300 mb-2">
                    {title}
                </h4>
            </div>
        </Link>
    </Card>
  );
};  

export default ArticleItem;