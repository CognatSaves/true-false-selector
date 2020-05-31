import React from 'react';
import Selector from './components/selector'
import './App.css';

function App() {
  const data = {
    value: true,
    text: 'must contain elements',
  };

  return (
    <div className="container">
      <Selector data={data} />
    </div>
  );
}

export default App;
