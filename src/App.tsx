import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  useEffect(()=>console.log('render'),[])
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
