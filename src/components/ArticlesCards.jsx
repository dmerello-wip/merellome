'use client'

import Image from 'next/image';

const ArticlesCards = ({contents}) => {

  const renderItems = () => {
      return contents.map((el, i) => {
        return (
          <div 
            key={`item-${el.title}`} 
            className="articlesSlider__box"
          >
            <Image 
              src={el.image} 
              alt={el.alt} 
              className="articlesSLider__image" 
              width={450} 
              height={300} 
            />
          </div>
        );
      });
    };

  return (
      <div className="articlesSlider__wrap">
        {renderItems()}
      </div>
  )
}

export { ArticlesCards }