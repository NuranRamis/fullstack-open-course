import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Button = (props) => {
  console.log(props) 
  const { onClick, text } = props
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  // const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    // setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    // setTotal(left + updateRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History  allClicks={allClicks}/>
    </div>
  )
}


export default App

// import { useState } from "react";

//  const Display = ({ counter }) => <div>{counter}</div>
  

//   const Button = ({ onClick, text }) => <button onClick={onClick}> 
//   {text}</button>

// const App = () => {

//   const [counter, setCounter] = useState(0);
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () =>  {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }
  
//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//     <Display counter={counter}/>
//     <Button onClick={increaseByOne} 
//       text='plus'
//     />
//     <Button onClick={decreaseByOne} 
//       text='minus'
//     />
//     <Button onClick={setToZero} 
//       text='zero'
//     />
//     </div>
//   )
// }




// const Hello = ({ name, age}) => {

//   const bornYear = () => new Date().getFullYear() - age
    
  
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greeetings</h1>
//       <Hello name="Maya" age={24 + 10} />
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   const friends =[ 
//   { name: 'Peter', age: 4 },
//   { name: 'Maya', age: 10 }
//   ]
//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
