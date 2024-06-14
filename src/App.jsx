// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './components/counter'

function App() {

  const count = useSelector((state) => state.counter.count);

  return (
    <>
    <h1>{count}</h1>
     <Counter/>
    </>
  )
}

export default App
