import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [backendText, setBackendText] = useState()

  useEffect(() => {
    console.log('about to fetch')
    fetch("http://localhost:3000/").then(res => res.text()).then(data => {
      setBackendText(data);
    }).catch(err => {
      setBackendText(`Couldn't connect to the backend -> ${err.message}`)
    })
    return () => {
      console.log("unmounting");
      setBackendText(null)
    }
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {backendText ?? null}
      </p>
    </>
  )
}

export default App
