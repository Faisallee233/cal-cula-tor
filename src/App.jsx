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
   

  return (
    <div className='calculator'>
      <div className='containerinput'>
      <input  readOnly className='input' value={display} >
      </input>
      </div>
      <div  className='containerbtn'>
      <button onClick={()=>appendto("/")}  className='btn'>/</button>
       <button onClick={()=>appendto("9")} >9</button>
       <button onClick={()=>appendto("8")} >8</button>
       <button onClick={()=>appendto("7")} >7</button>
       <button onClick={()=>appendto("+")} className='btn'>+</button>
       <button onClick={()=>appendto("6")} >6</button>
       <button onClick={()=>appendto("5")} >5</button>
       <button onClick={()=>appendto("4")} >4</button>
       <button onClick={()=>appendto("-")} className='btn'>-</button>
       <button onClick={()=>appendto("3")} >3</button>
       <button onClick={()=>appendto("2")} >2</button>
       <button onClick={()=>appendto("1")} >1</button>
       <button onClick={()=>appendto("*")} className='btn'>*</button>
       <button onClick={()=>appendto("0")} >0</button>
       <button onClick={()=>appendto(".")} className='btn'>.</button>
       <button onClick={()=>appendtoResult("=")} className='btn'>=</button>
       <button onClick={()=>appendtoClear()} className='btn'>C</button>
       <button  onClick={()=>appendtoDel()} className='btn'><BackspaceIcon fontSize='0.7rem'/></button>
      </div>
      
    </div>
  )
}

export default App
