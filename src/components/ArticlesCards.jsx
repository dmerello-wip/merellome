'use client'

import Image from 'next/image';
import { Card } from './Card';

const ArticlesCards = ({contents}) => {

  const renderItems = () => {
      return contents.map((el, i) => {
        return (
          <div className='articlesSlider__box' key={`item-${i}`}>
            <Card
                image={el.image}
                title={el.title}
                description ={el.description}
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