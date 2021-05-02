import React from 'react';
import logo from './logo.svg';
import './App.css';

const N = 5;

function computeSum(n) {
  return (n*(n+1))/2;
}

function App() {
  return (
    <div className="App">
      <p>Количество натуральных чисел N = {N}</p>
      <p>Сумма {N} натуральных чисел = {computeSum(N)}</p>
    </div>
  );
}

export default App;
