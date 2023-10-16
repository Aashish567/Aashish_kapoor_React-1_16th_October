// import React from 'react';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';


function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);

    console.log(`Count: ${count}`);
  
  const handleIncrement = () => {
    
    if (count > 9) {
      setShowButton(true);
      
    }
    
    else {
      setCount(count + 1);
      setError("");
    }
  };

  const handleDecrement = () => {
    
    if (count > 0 ) {
      setCount(count - 1);
      setShowButton(false);
    }

    else {
      setError("Error: Cannot go below 0");
    }
  };

  const backtozero = () => {
    if (count > 0) {
    //   setCount(count - count);
    setCount(0);
    setShowButton(false);
    }
  };

  
  return (
    <div className="counter">
      <h1>Counter using React</h1>
      <span className="counter-value">{count}</span>
      <p className="counter-error">{error}</p>
      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement}>Decrement</button>
        <button className="counter-button" onClick={handleIncrement}>Increment</button>

        {showButton && (<button className="counter-button" onClick={backtozero}>Go Back to 0</button>)}
      </div>
    </div>
  );
}

export default Counter;
