import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter';
import Exercise from './components/exercise';
import Counters from './components/counters';
import Movie from './components/movie';
import Movies from './components/movies';
import Misit from './components/misit';
import MoviesProp from './components/moviesProp';
import ImageGo from './components/imageVanish';
import Sum from './components/sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageGo/>
    <Sum/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();