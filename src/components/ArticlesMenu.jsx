'use client'
const ArticlesMenu = ({contents, sortAction}) => {


  const renderMenu = () => {
    return contents.map((el, i) => {
      return (
        <li 
          key={`menu-item-${i}`} 
          onClick={() => sortAction(i)}
        >
          {el.title}
        </li>
      );
    });
  };

  return (
    <ul className="articlesSlider__menu">
      {renderMenu()}
    </ul>
  )
}

export { ArticlesMenu }