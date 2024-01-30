import React from 'react'

import XboxSlim from '../images/xboxslim-removebg.png'

const Info = () => {

  const highlightText = (word) => {
    if (word.toLowerCase().includes('xbox')) {
      return <span className="text-lime-300">{word}</span>;
    } else if (word === '360') {
      return <span className="text-gray-400">{word}</span>;
    }
    return word;
  };

  const renderHighlightedText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {index > 0 && ' '}
        {highlightText(word)}
      </React.Fragment>
    ));
  };

  return (    
    <div className='rounded-div flex items-center justify-center'>
<div className='flex flex-col justify-center items-center'> 
<img src={XboxSlim} alt="img" className='w-56' />       
  <p className='text-center'>
   ${renderHighlightedText('XBOX 360')} coin has no association with Microsoft.
  ${renderHighlightedText('XBOX 360')} is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
  </p>
</div>
</div>
    
  )
}

export default Info


