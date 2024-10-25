import slidesContents from '@/db/slides.json';

export async function GET() {
    return Response.json({ slides: slidesContents.slides });
}
