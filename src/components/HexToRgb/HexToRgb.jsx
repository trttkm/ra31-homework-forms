import { useState } from 'react';
import './HexToRgb.scss';

export function HexToRgb() {
  const [inputValue, setInputValue] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [rgbString, setRgbString] = useState('rgb(255, 255, 255)');
  
  const inputHandler = (e) => {
    const newHex = e.target.value;
    setInputValue(newHex);
    
    if (validateHex(newHex)) {
      const rgbArray = convertHexToRgb(newHex);
      setRgbString(`rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`);
      setBgColor(newHex);
    }
  };
  
  const validateHex = (hex) => {
    if (hex.length < 7 || hex.length > 7) return false;
    
    if (!hex.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi)) {
      setRgbString('Ошибка!');
      return false;
    }
    return true;
  };
  
  const convertHexToRgb = (hex) => {
    return hex.match(/[a-z\d]{2}/gi).map(item => parseInt(item, 16));
  };
  
  return (
    <div className="color-container" style={{ backgroundColor: bgColor }}>
      <form>
        <input value={inputValue} onInput={inputHandler} />
        <div>{rgbString}</div>
      </form>
    </div>
  );
}
