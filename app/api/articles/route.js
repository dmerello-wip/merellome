import articlesContents from '@/db/articles.json';

export async function GET() {
    return Response.json({ items: articlesContents.articles });
}
