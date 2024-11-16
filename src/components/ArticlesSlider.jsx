'use client'

import _ArticlesSlider from '@/styles/components/articlesSlider.scss'
import { ArticlesMenu } from './ArticlesMenu';
import { ArticlesCards } from './ArticlesCards';
import { makeFirstSorting } from '@/helpers/sortUtils';
import { useState } from 'react';

const ArticlesSlider = ({contents}) => {

  const [cards, setCards] = useState(contents);

  function handleSort(index) {
    const cards = makeFirstSorting(contents, index);
    setCards(cards)
  }

  return (
    <div className="articlesSlider">
      <ArticlesMenu contents={cards} sortAction={handleSort}/>
      <ArticlesCards contents={cards} />
    </div>
  )
}

export { ArticlesSlider }