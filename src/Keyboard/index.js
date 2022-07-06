import { useState } from "react";
import Key from "./Key/index.js";
import { lowerCaseKeys, upperCaseKeys} from "./keys"

const Keyboard = () => {
  const [keyInfo, setKeyInfo] = useState('');
  const [value, setValue] = useState('');
  const [isShift, setIsShift] = useState(false);
  const [cusor, setCusor] = useState(0);
   
  const hadleClick = (e) => {
    if(e === 'Back') {
      const newWord = value.substring(0,cusor - 1) + value.substring(cusor,value.length);
      setValue(newWord);
      setCusor(cusor - 1);
    } else if (e === 'Tab') {
      let newWord = value + '';
      setValue(newWord);
    } else if(e === 'Caps Lock') {
      let newWord = value + '';
      setValue(newWord);
    } else if(e === 'Enter') {
      const newWord = value + '';
      setValue(newWord);
    } else if(e === 'Shift') {
      let newWord = value + '';
      setValue(newWord);
      setIsShift(!isShift);
    } else if(e === 'Space') {
      const newWord = value.substring(0,cusor) + ' ' + value.substring(cusor,value.length);
      setValue(newWord);
      setCusor(cusor + 1);
    } else {
      const newWord = value.substring(0,cusor) + e + value.substring(cusor,value.length);
      setValue(newWord);
      setCusor(cusor + 1);
    }
  }
  
  const handelMousUp = () => {
    setKeyInfo('');
  }

  const handelMousDown = (value) => {
    setKeyInfo(value);
  }
  
  const hadleClickInput = (e) =>{
    setCusor(e.target.selectionStart);
  }

  const hadleChange = (e) => {
    const value = e.target.value;
    const pressKeyName = value.slice(value.length - 1);
    setValue(value);
    setKeyInfo(pressKeyName);
  }

  return (
    <>
      <textarea placeholder="내용을 입력해 주세요." className="input" value={value} onClick={hadleClickInput} onChange={hadleChange} />    
      <div className="keyboard">
        {(isShift ? upperCaseKeys : lowerCaseKeys)
          .map((row,idx) => (
            <div className="keyboard-row" key={idx}>
              {row.map((key,idx) => (
                <Key 
                  key={idx}
                  value={key.value}
                  className={`key ${key.name}`}
                  onClick={() => hadleClick(key.value)}
                  onMouseUp={() => handelMousUp()}
                  onMouseDown={()=> handelMousDown(key.name)}
                  isActive={ keyInfo === key.value || keyInfo === key.name ? true : false }
                />
              ))}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Keyboard;