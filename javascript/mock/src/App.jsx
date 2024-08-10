import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: ""})

  console.log(formData);

  const changeHandler = (e) => {
    // console.log(e.target);
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <>
      
      <input type='text' value={formData.firstName} name='firstName' onChange={changeHandler} />
      <br />
      <br />
      <input type='text' value={formData.lastName} name='lastName' onChange={changeHandler} />
      <br />
      <br />
      <input type='text' value={formData.email} name='email' onChange={changeHandler} />
    </>
  )
}

export default App
