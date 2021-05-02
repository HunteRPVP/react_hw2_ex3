import React from 'react';
import './App.css';

function computeSum(n) {
  return (n*(n+1))/2;
}

function App() {
  const [N, setN] = React.useState(2);

  const handleChange = (newValue) => {
    if(newValue < 1) {
      newValue=1;
    }
    setN(newValue);
  };

  return (
    <div className="App">
      <input onChange={e => handleChange(e.target.value)} type="number" label="Количество натуральных чисел N" value={N} min={1} />
      <p>Количество натуральных чисел N = {N}</p>
      <p>Сумма {N} натуральных чисел = {computeSum(parseInt(N))}</p>
    </div>
  );
}

export default App;
