import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};




export async function generateStaticParams() {
  try {
    const response = await strapi.get<{ data: Article[] }>('/api/articles');
    return response.data.data.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}
import strapi from '../../../../utils/strapi';
import { Article } from '@/lib/types';
import Image from 'next/image';
import { marked } from 'marked';

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await strapi.get<{
      data: Article[];
    }>('/api/articles', {
      params: {
        'filters[slug][$eq]': slug,
        'populate': 'cover'
      },
    });

    if (response.data.data.length === 0) {
      return null;
    }

    return response.data.data[0];
  } catch (error) {
    console.error('Failed to fetch article:', JSON.stringify(error, null, 2));
    return null;
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const { title, content, publishedAt, cover } = article;
  const imageUrl = cover?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.url}`
    : '/placeholder.jpg';
  const imageAlt = cover?.alternativeText || title;
  const htmlContent = await marked.parse(content);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <article>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-500 mb-8">
          Published on {new Date(publishedAt).toLocaleDateString()}
        </p>

        {imageUrl && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}

        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
