import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryComponent from "./components/GalleryComponent";
import {CHARACTER} from "./components/characterRickAndMorty";

function App() {
  return (
    <div className="App">
      <GalleryComponent characters={CHARACTER}></GalleryComponent>
    </div>
  );
}

export default App;
