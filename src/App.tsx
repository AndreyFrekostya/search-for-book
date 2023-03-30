import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
import SelectedBookComponent from './components/SelectedBook/SelectedBookComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<Books/>}/>
          <Route path='/:id' element={<SelectedBookComponent/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
