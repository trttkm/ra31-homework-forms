import './HexToRgb.css';
import { useState } from 'react';

export function HexToRgb() {
  
  const [inputValue, setInputValue] = useState('#ffffff');
  const [hex, setHex] = useState('#ffffff');
  const [rgbString, setRgbString] = useState('rgb(255, 255, 255)');
  
  const inputHandler = (e) => {
    const newHex = e.target.value;
    setInputValue(newHex);
    
    if (newHex.length < 7 || newHex.length > 7) return;
    
    if (!newHex.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi)) {
      setRgbString('Ошибка!');
      return;
    }
    
    const rgbArray = newHex.match(/[a-z\d]{2}/gi).map(item => parseInt(item, 16));
    setRgbString(`rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`);
    setHex(newHex);
  };
  
  return (
    <div className="color-container" style={{ backgroundColor: hex }}>
      <form>
        <input value={inputValue} onInput={inputHandler} />
        <div>{rgbString}</div>
      </form>
    </div>
  );
}
