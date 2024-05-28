//Custom CSS
import './counter.css'

//Icons
import addIcon from './icons/add.png';
import subIcon from './icons/minus.png';
import resetIcon from './icons/refresh-action.png';

//react hooks for making state 
import { useState } from 'react';

function App() {

  const [increment, setIncrement] = useState(0)

  const incHandle = () => {
    let inc = increment
    let copy = inc += 1;
    setIncrement(copy)
  }

  const resetHandle = () => {
    setIncrement(0)

  }

  const decHandle = () => {
    if (increment !== 0) {
      let dec = increment
      let copy = dec -= 1
      setIncrement(copy)
    }
  }

  return (
    <div className="main_div">
      <h1>Counting App</h1>
      <div className='inner_main_div'>
        <div className='inner_div'>
          <div className='number_div'>
            <h3 className='number'>{increment == 0 ? "00" : increment}</h3>
          </div>
        </div>
      </div>
      <div className='inner_main_div_bottom'>
        <div className='inc_div'>
          <button onClick={incHandle}> <img src={addIcon} /> </button>
        </div>
        <div className=''>
          <button onClick={resetHandle}> <img src={resetIcon} /> </button>
        </div>
        <div className=''>
          <button onClick={decHandle}> <img src={subIcon} /> </button>
        </div>
      </div>
    </div>
  );
}

export default App;
