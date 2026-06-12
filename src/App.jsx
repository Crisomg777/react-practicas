import { useState } from 'react';
import './App.css';

function MyButton() {
    const [count, setCount] = useState(0); 

    function handleClick() {
        setCount(count + 1); 
    }

    return (
        <button className="contador" onClick={handleClick}>
            {count}
        </button>
    );
}

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}