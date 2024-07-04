import React, { useRef } from 'react'
import { fetchSignUp } from '../apis/auth'
import { redirect, useLocation } from 'react-router-dom'

export const SignUp = ({ setToken }) => {
  const location = useLocation()
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignUp = async () => {
    console.log(usernameRef.current.value, passwordRef.current.value);
    const data = await fetchSignUp(usernameRef.current.value, passwordRef.current.value)
    if (data.status === "success") {
      setToken(data.token)
      redirect("/")
      console.log("redirect");
    }
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <div style={{
        marginTop: 16,
        padding: "32px 16px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "solid 1px gray"
      }}>
        <div style={{ padding: 8, width: 300 }}>
          <div>
            <label>username: </label>
            <input type="text" ref={usernameRef} />
          </div>
          <div>
            <label>password: </label>
            <input type="text" ref={passwordRef} />
          </div>
          <div>
            <button onClick={handleSignUp}>Sign Up</button>
            <button>cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
