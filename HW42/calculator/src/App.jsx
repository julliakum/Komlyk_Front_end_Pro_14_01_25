import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

const buttons = [
  ['C', '√', '^', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '%', '='],
  ['sin', 'cos', 'tan']
];

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '√') {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === '^') {
      setInput(input + '**');
    } else if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
    } else if (['sin', 'cos', 'tan'].includes(value)) {
      const angle = parseFloat(input) * (Math.PI / 180);
      const result = Math[value](angle);
      setInput(result.toString());
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="app-container">
      <h1>Calculator</h1>
      <div className="calculator">
        <Display value={input} />
        <div className="buttons">
          {buttons.flat().map((btn, i) => (
            <Button key={i} value={btn} onClick={() => handleClick(btn)} />
          ))}
        </div>
      </div>
    </div>
  );
}
