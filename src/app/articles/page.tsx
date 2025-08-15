/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from 'next';
import ArticleItem from '@/components/ArticleItem';
import { Divider } from "@/components/divider";
import { FooterCTA } from "@/components/footerCTA";

export const metadata: Metadata = {
    title: 'Articles | Segun Oroyo',
    description: 'A collection of articles and thoughts on design, technology, and everything in between.',
  };

const articles = [
    {
        id: 1,
        link: '/articles/1',
        title: '4 reasons to invest in UX design',
        img: 'https://images.unsplash.com/photo-1630852722952-5a87d3ca2d95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        link: '/articles/2',
        title: 'The Future of UI/UX: Trends to Watch in 2025',
        img: 'https://images.unsplash.com/photo-1630852722952-5a87d3ca2d95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        link: '/articles/3',
        title: 'The Power of Storytelling in Product Design',
        img: 'https://images.unsplash.com/photo-1630852722952-5a87d3ca2d95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default async function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
        {/* HERO SECTION */}

        <section
          className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative"
          id="hero"
        ></section>

        <Divider />

        <section className="border-x border-stone-200 w-full px-6 md:px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col relative">
            <div className="max-w-3xl flex flex-col gap-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-thin text-stone-400">
                These are some{" "}
                <span className="text-stone-900">
                  articles I&apos;ve written
                </span>{" "}
                trying to put my dent in the universe
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
            <ArticleItem
              key={article.id}
              id={article.id}
              link={article.link}
              title={article.title}
              img={article.img}
            />
          ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>

    </div>
  );
}

