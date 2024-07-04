import React, { useEffect, useRef } from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import { fetchSignIn } from '../apis/auth';

export const singinAction = async ({ request }) => {
  const formData = await request.formData()
  const inputs = Object.fromEntries(formData)
  const data = await fetchSignIn(inputs)
  console.log(data);
  if (data?.status === "success") return data
  return null
}
export const SignIn = ({ setToken }) => {
  const actionData = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(actionData);
    if (actionData?.status !== "success") return
    setToken(actionData.token)
    return navigate("/")
  }, [actionData])
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
        <Form
          method='post'
          style={{ padding: 8, width: 300 }}
        >
          <div>
            <label>username: </label>
            <input type="text" name='username' />
          </div>
          <div>
            <label>password: </label>
            <input type="password" name='password' />
          </div>
          <div>
            <button type='submit'>Sign In</button>
            <button>cancel</button>
          </div>
        </Form>
      </div>
    </div>
  )
}
