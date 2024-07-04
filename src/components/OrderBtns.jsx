import React, { useState } from 'react'

export const OrderBtns = ({ setOrderParams }) => {
  const [selectedType, setSelectedType] = useState("")
  const [selectedOrder, setSelectedOrder] = useState("")
  const buttonsStyle = {
    padding: "4px 8px",
    margin: "0 2px",
    border: "solid 1px gray",
    borderRadius: 4
  }
  return (
    <div style={{
      display: 'flex',
      gap: 16
    }}>
      <div>
        <button onClick={() => setSelectedType("popular")} style={{
          ...buttonsStyle,
          backgroundColor: selectedType === "popular" ? "gray" : "lightgray",
        }}>Popularity</button>
        <button onClick={() => setSelectedType("uploaddate")} style={{
          ...buttonsStyle,
          backgroundColor: selectedType === "uploaddate" ? "gray" : "lightgray",
        }}>Recently Updated</button>
        <button onClick={() => setSelectedType("title")} style={{
          ...buttonsStyle,
          backgroundColor: selectedType === "title" ? "gray" : "lightgray",
        }}>Alphabetically</button>
      </div>
      <div>
        <button onClick={() => setSelectedOrder("asc")} style={{
          ...buttonsStyle,
          backgroundColor: selectedOrder === "asc" ? "gray" : "lightgray",
        }} >ASC</button>
        <button onClick={() => setSelectedOrder("desc")} style={{
          ...buttonsStyle,
          backgroundColor: selectedOrder === "desc" ? "gray" : "lightgray",
        }}>DESC</button>
      </div>

    </div>
  )
}
