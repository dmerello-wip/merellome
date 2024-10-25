import slidesContents from '@/db/slides.json';

export async function GET(request, { params }) {
    const slideId = (await params).slide
    return Response.json(slidesContents.slides.filter(slide => slide.id == slideId)[0]);
}
