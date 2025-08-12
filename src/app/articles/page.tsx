import Link from 'next/link';
import strapi from '../../../utils/strapi';
import { Article } from '@/lib/types';

async function getArticles() {
  try {
    const response = await strapi.get<{ data: Article[] }>('/api/articles', {
      params: {
        sort: 'publishedAt:desc',
        populate: 'cover',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch articles:', JSON.stringify(error, null, 2));
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="grid gap-8">
          {articles
            .filter((article) => article && article.slug)
            .map((article: Article) => (
            <Link href={`/articles/${article.slug}`} key={article.id}>
              <div className="block p-6 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-500 mb-4">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
