import { useState } from 'react'
import BackspaceIcon from '@mui/icons-material/Backspace';
import './App.css'
import { Height } from '@mui/icons-material';

function App() {
const [display, setdisplay] = useState('')
 
  const appendto = (hardChar)=>{
    setdisplay(display + hardChar)}

  const appendtoClear = ()=>{
     setdisplay('')
  }

  const appendtoDel = ()=>{
      setdisplay(display.slice(0, -1))
  }

  const appendtoResult = ()=>{
    try{
      setdisplay(eval(display))
    }catch(error){
      setdisplay("Undefined")
    } 
      
  }

 const characters = ["/","9","8","7","+","6","5","4","-","3","2","1","*","0","."]
 
 const isOperator = (chara) => {
  return ["+", "-", "*", "/","."].includes(chara);
};

   

  return (
    <div className='calculator'>
      <div className='containerinput'>
      <input  readOnly className='input' value={display} >
      </input>
      </div>
      <div  className='containerbtn'>

        {
          characters.map((char, index)=>{
            return (<button onClick={()=>appendto(char)} key={index}  className={`${isOperator(char) ? 'operator' : 'number'}`}>{char}</button>)
          })
        }
      
       <button onClick={()=>appendtoResult("=")} className='btn'>=</button>
       <button onClick={()=>appendtoClear()} className='btn'>C</button>
       <button  onClick={()=>appendtoDel()} className='btn'><BackspaceIcon fontSize='0.7rem'/></button>
      </div>
      
    </div>
  )
}

export default App
