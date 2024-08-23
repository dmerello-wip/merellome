import { revalidateTag } from 'next/cache'

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  revalidateTag(tag)
  return Response.json({ revalidated: true, tag: tag, now: Date.now() })
}