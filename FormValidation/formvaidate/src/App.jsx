import React from 'react'
import { useState } from 'react'

const App = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError('')
    setPasswordError('')
  
    if(!email){
      setEmailError('Email is required')
      valid=false
    }else if(!emailRegex.test(email)){
      setEmailError('Enter valid email')
      valid=false
    }

    if(!password){
      setPasswordError('Password is required')
      valid = false
    }else if(password.length < 6) {
      setPasswordError('Password must be greater than 6 char')
      valid = false
    }

    if(valid) {
      alert('form submitted')
      setEmail('')
      setPassword('')
    }

  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',gap:'5px'
        }}>
          <label style={{fontSize:'20px'}}>Email: </label>
          <input type="text"
          value={email}
          placeholder='Email..'
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>  <br />
        {emailError && <p style={{color:'red'}}>{emailError}</p> }

        <div style={{display:'flex',flexDirection:'column',gap:'5px'}}>
          <label style={{fontSize:'20px'}}>Password: </label>
          <input type="text"
          value={password}
          placeholder='password...'
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <br />
        {passwordError && <p style={{color:'red'}}>{passwordError}</p> }
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App