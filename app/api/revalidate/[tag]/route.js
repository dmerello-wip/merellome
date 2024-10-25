import { revalidateTag } from 'next/cache'

export async function GET(request, { params }) {
  const tag = (await params).tag
  revalidateTag(tag)
  return Response.json({ revalidated: true, now: Date.now() })
}