import '@/helpers/envConfig'
import { Header } from "@/components/Header"
import { Navigator } from "@/components/navigator/Navigator"
import { TempSpacer } from "@/components/TempSpacer"
import { ArticlesSlider } from '@/components/ArticlesSlider'
// import slidesContents from '@/db/slides.json';
// import articlesContents from '@/db/articles.json';

export default async function Page() {

  const url = process.env.BASE_URL || 'https://merellome.vercel.app';
  
  const slides = await fetch(`${url}/api/navigator`, { next: { tags: ['navigator'] } }).then((res) =>
    res.json()
  )
  const articles = await fetch(`${url}/api/articles`, { next: { tags: ['articles'] } }).then((res) =>
    res.json()
  )

  // yes, using the api is useless... why don't:
  // const slides = { slides: slidesContents.slides };
  // const articles = { items: articlesContents.articles };

  return (
    <>
      <Header />
      <Navigator contents={slides} />
      <ArticlesSlider contents={articles.items} />
      <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>3. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>4. Contenuto sotto al navigator</TempSpacer>

      {/* <Footer /> */}
    </>
  )
}
