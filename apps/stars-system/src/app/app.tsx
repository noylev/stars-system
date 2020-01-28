import React, { useEffect, useState } from 'react';
import { Message } from '@stars-system/api-interfaces';
import './app.css';
import star from './shape.svg';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const images = ['assets/barney.jpg', 'assets/robin.jpg', 'assets/ted.jpg'];

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to stars-system!</h1>
        <h2>stars of the week are:</h2>
        <div className="images">
          {images.map(function(imgSrc) {
            return (
                <img className="img" src={ imgSrc } />
            );
          })}
        </div>


      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
