import '@/helpers/envConfig'
import { Header } from "@/components/Header"
import { Navigator } from "@/components/navigator/Navigator"
import { ArticlesSlider } from '@/components/ArticlesSlider'
import { TempSpacer } from "@/components/TempSpacer"
import { PinTabs } from "@/components/PinTabs/PinTabs"
// import slidesContents from '@/db/slides.json';
// import articlesContents from '@/db/articles.json';

export default async function Page() {

  const url = process.env.BASE_URL || 'https://merellome.vercel.app' || 'http://localhost:3000';
  
  const slides = await fetch(`${url}/api/navigator`, { next: { tags: ['navigator'] } }).then((res) =>
    res.json()
  )
  const articles = await fetch(`${url}/api/articles`, { next: { tags: ['articles'] } }).then((res) =>
    res.json()
  )

  // yes, using the api is useless... i can simply import the json files:
  // const slides = { slides: slidesContents.slides };
  // const articles = { items: articlesContents.articles };

  return (
    <>
      <Header />
      <Navigator contents={slides} />
      <ArticlesSlider contents={articles.items} />
      <PinTabs />
      <TempSpacer>1. E poi si va avanti...</TempSpacer>
      <TempSpacer>2. E poi si va avanti...</TempSpacer>

    </>
  )
}
