import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <WrapperComponent compo={<CustomComponent />} />
    </div>
  )
}

function WrapperComponent({compo}) {
  return (
    <div>
      <p>wrapper component</p> 
      {compo}
    </div>
  );
}

function CustomComponent() {
  return (
    <div>
      Hi there custom prop component
    </div>
  )
}



export default App
