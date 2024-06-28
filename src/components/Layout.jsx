import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>

      <header style={{
        display: 'flex',
        justifyContent: "space-between",
        padding: "32px 16px",
        borderBottom: "solid 2px gray"
      }}>
        <div style={{
          border: "solid 1px gray",
          padding: "8px 16px"
        }}>
          <h1 style={{
            margin: 0
          }}>WorldSkills: Games</h1>
        </div>
        <div style={{
          display: 'flex',
          gap: "16px"
        }}>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        width: "100%"
      }}>
        <div style={{
          maxWidth: 1000,
          width: '100%'
        }}>
          <Outlet />
        </div>
      </main >
    </div >
  )
}
