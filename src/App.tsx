import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryComponent from "./components/GalleryComponent";
import {CHARACTER} from "./components/characterRickAndMorty";



function App() {


  return (
      <><h1>Rick and Morty</h1>
          <div className="App">
              <GalleryComponent characters={CHARACTER}></GalleryComponent>
          </div>
      </>
  );
}

export default App;
