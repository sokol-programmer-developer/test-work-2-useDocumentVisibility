import React, { useEffect } from 'react'

import { useDocumentVisibility } from './hooks/useDocumentVisibility'

const Home = () => {
    const { count, visible, onVisibilityChange  } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    });
  })

  return (
    <div className='container' >
        <p>Вы покинули страницу: {count} раз</p>
        <p>Вкладка активна? {visible ? 'да' : 'нет'}</p>
    </div>
  );
};

export default Home
