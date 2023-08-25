import { useEffect, useState } from 'react'
import './index.css'
import { validate } from './Functions/ValidateRockScisorsPaper'

const selections = [
  "piedra",
  "papel",
  "tijera",
]
const buttonClass = "px-7 mx-2 bg-slate-800 text-white"
const setRandom = (): number => Math.floor(Math.random() * 3)

function App() {
  const [select, setSelect] = useState(4)
  const [result, setResult] = useState("Esperando")
  const [pcChose, setPcChose] = useState(0)
  const [pc, setPc] = useState("Esperando")

  useEffect(() => {
    if(select == 4) return
    const pc = setRandom()
    document.querySelectorAll(".botonx").forEach((el, index)=> {index == select ? el.classList.add("scale-[1.2]") : el.classList.remove("scale-[1.2]")
    })
    setPc(selections[pc]) 
    if (pc == select) { setResult("Empate"); return }
    setResult(validate(select, pc))
  }, [select,pcChose])

  return (
    <main className='h-screen py-10'>
      <div className='flex flex-col items-center justify-between h-2/4'>
        <h1 className='text-3xl font-bold'>Piedra papel o tijera</h1>
        <h2 className='text-2xl'>eleccion de la pc: {pc}</h2>
        <h2 className='text-2xl font-extrabold'>resultado: {result}</h2>
        <div>
          <button className={buttonClass + " botonx"} onClick={() => {setSelect(0), setPcChose(setRandom())}}>piedra</button>
          <button className={buttonClass + " botonx"} onClick={() => {setSelect(1), setPcChose(setRandom())}}>papel</button>
          <button className={buttonClass + " botonx"} onClick={() => {setSelect(2), setPcChose(setRandom())}}>tijera</button>
        </div>
      </div>
    </main>
  )
}

export default App
