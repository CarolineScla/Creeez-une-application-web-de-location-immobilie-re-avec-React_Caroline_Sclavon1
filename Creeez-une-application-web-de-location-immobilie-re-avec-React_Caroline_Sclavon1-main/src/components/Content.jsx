import React from 'react';
import '../styles/content.scss'

function Content({ children }) {
  return <div className='content'>{children}</div>;
}

export default Content;
