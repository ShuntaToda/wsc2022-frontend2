import React from 'react'

export const OrderBtns = () => {
  return (
    <div style={{
      display: 'flex',
      gap: 16
    }}>
      <div>
        <button>Popularity</button>
        <button>Recently Updated</button>
        <button>Alphabetically</button>
      </div>
      <div>
        <button>ASC</button>
        <button>DESC</button>
      </div>

    </div>
  )
}
