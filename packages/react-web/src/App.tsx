import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@monorepo/design-system';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button>TEST</Button>
      </div>    
    </>
  )
}

export default App