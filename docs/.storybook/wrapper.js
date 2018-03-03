import React from 'react';

export default (storyFn) => (
  <div className='s12'>
    { storyFn() }
  </div>
);
