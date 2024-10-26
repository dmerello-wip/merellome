import tipsContents from '@/db/tips.json';

export async function GET() {
  return Response.json({ tips: tipsContents.tips });
}
