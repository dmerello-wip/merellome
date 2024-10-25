import tipsContents from '@/db/tips.json';

export async function GET(request, { params }) {
  const slideId = (await params).slide

  return Response.json(tipsContents.tips.filter(tip => tip.slide == slideId));
}
