import methodData from '@/db/method.json';

export async function GET() {
    return Response.json({ items: methodData.pins });
}
