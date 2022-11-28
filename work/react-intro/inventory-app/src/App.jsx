import { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const onReorder = () => setNum(5);
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => setNum(num + 1)}
      >➕</button>
      <p>Inventory： {num}</p>
      <button
        type="button"
        disabled={!num}
        onClick={() => setNum(num - 1)}
      >➖</button>
      {!num
        ?<Reorder onReorder={onReorder} />
        :<p></p>
      }
    </div>
  );
}

export default App;