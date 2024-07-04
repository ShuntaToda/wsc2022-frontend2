import React, { useRef } from 'react'

export const SignIn = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignIn = () => {
    console.log(usernameRef.current.value, passwordRef.current.value);

  }
  return (
    <div>
      <h2>Sign In</h2>
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
            <button onClick={handleSignIn}>Sign In</button>
            <button>cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
