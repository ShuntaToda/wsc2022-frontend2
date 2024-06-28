import React from 'react'
import { OrderBtns } from '../components/OrderBtns'

export const Main = () => {

  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2>654 Games available</h2>
        <OrderBtns />
      </header>
      <div>

      </div>
    </div>
  )
}
