import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <>
    <h1>Sign Up Today</h1>
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Create Password" />
    <button type="submit" onClick={() => {
        navigate("/")
    }}>Sign Up</button>
    </>
  )
}

export default Login