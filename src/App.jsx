import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePasswordGenerator from './hooks/use-password-generator'
import useStrengthChecker from './hooks/use-strenght-checker'

function App() {
  const [len, setLen] = useState(4)
  
  const {password,errorMessage,genetatePassword} = usePasswordGenerator();
  const [checkboxData,setCheckboxData] = useState([
    { title:'Include Uppercase Letters',state:false},
    {title:'Include Lowercase Letters',state:false},
    {title:'Include Numbers',state:false},
    {title:'Include Symbols',state:false}
  ]) 
  const handleCheckBox =(i)=>{
          const update = [...checkboxData]
          update[i].state=!update[i].state;
          setCheckboxData(update)
  }
  const {strenght,getStrenght} = useStrengthChecker()
  const[ copy ,setCopy] = useState(false)

  const handleCopy =()=>{
     navigator.clipboard.writeText(password);
     setCopy(true)
     setTimeout(()=>{
      setCopy(false)
     },3000)

  }

  return (  
   <>
   <div className="bg-slate-600 px-10 pt-5 w-[600px] h-[550px] absolute left-4 top-5   ">
{  password &&      <div className='text-white flex justify-between'>
<span className='py-5 font-bold text-3xl'>{password}</span>
  <button onClick={handleCopy} className='m-5 px-3 rounded-[5px] bg-blue-300'>{copy?"copied":"copy"}</button>
  </div>}
  <div className='flex justify-between text-white '>
    <span className='py-5 text-2xl'>Character Length</span>
    <span className='py-5 text-2xl'>{len}</span>
  </div>
  <div className='flex  my-4 justify-center'>
    <input type='range'
    value={len}
    onChange={(e)=>{
      setLen(e.target.value)
    }}  min='4' max='20' className='w-3/4 '></input>
  </div>
   
   <div className=' text-white grid   grid-cols-2 '>
    {checkboxData.map((data,i)=>{
     return(
      <div className='  py-5 flex' key={i}>
       <input type='checkbox' checked={checkboxData[i].state} onChange={()=>handleCheckBox(i)}></input>
       <span>{data.title}</span>
       </div>
     )
    })}
   </div>
   {!errorMessage && strenght && <div className='flex  text-white justify-between'>
    <span>Strength: </span>
    <span>{strenght}</span>
    </div>}
    {errorMessage &&  <div className='text-red-600' >{errorMessage}</div>}
   <div >
    
    <button onClick={()=>{genetatePassword(checkboxData,len);
      getStrenght(len);
    }} className= ' relative  -left-4 p-5 w-full  m-4  text-3xl  font-bold rounded-[4px] bg-blue-300'>
      GENERATE PASSWORD
    </button>
   </div>

   </div>
   </>
  )
}

export default App
