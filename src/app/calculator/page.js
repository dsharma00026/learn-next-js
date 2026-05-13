"use client"
import style from "../css/page.module.css"
import { useState } from "react"
export default function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const handleLogic = (opreation) => {
    switch (opreation) {
      case 'add':
        setResult(parseInt(num1) + parseInt(num2))
        break;
      case 'subtract':
        setResult(parseInt(num1) - parseInt(num2))
        break;
      case 'multiply':
        setResult(parseInt(num1) * parseInt(num2))
        break;
      case 'divide':
        setResult(parseInt(num1) / parseInt(num2))
        break;
    }
  }
  return (
    <div>
      <h1 className={style.mainHeading}>Home Page</h1>
      <div className={style.container}>
        <h2 className={style.title}>My Calculator</h2>
        <div className={style.formContainer}>
          <input className={style.input} type="number" placeholder="Enter First Number" onChange={(e) => { setNum1(e.target.value) }} />
          <input className={style.input} type="number" placeholder="Enter Second Number" onChange={(e) => { setNum2(e.target.value) }} />

        </div>
        <div className={style.buttonGroup}>
          <button className={style.button} onClick={() => { handleLogic("add") }}>Add</button>
          <button className={style.button} onClick={() => { handleLogic("subtract") }} >Subtract</button>
          <button className={style.button} onClick={() => { handleLogic("multiply") }}>Multiply</button>
          <button className={style.button} onClick={() => { handleLogic("divide") }}>Divide</button>

        </div>
      </div>
      {
        result !== 0 && <ShowResult result={result} />
      }
    </div>
  );
}

const ShowResult = (props) => {
  return (
    <div className={style.result}>Result Is: {props.result}
    </div>
  )
}
