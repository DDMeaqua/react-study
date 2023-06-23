import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <div className='border-2 border-black m-3 p-3 '>
      <button className='border-2 p-2 border-red-500 rounded-lg' onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className='border-2 m-2 p-2 rounded-lg  border-purple-600' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <span>
      {showMore && <p>{sculpture.description}</p>}
      </span>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      </div>
    </>
  );
}
