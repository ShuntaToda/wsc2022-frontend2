import React, { useState } from 'react'

export const GameList = ({ game }) => {
  return (
    <div style={{
      padding: 16,
      border: "solid 1px gray",
      marginTop: 32
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',

      }}>
        <div style={{
          display: 'flex',
          alignItems: "flex-end",
          gap: 8
        }}>
          <h3 style={{ margin: 0 }}>{game.title}</h3>
          <span>By {game.author}</span>
        </div>
        <span># scores ssumbitted: {game.scoreCount}</span>
      </div>
      <div style={{
        display: 'flex',
        marginTop: 16,
        gap: 8
      }}>
        <div style={{
          width: 400,
          aspectRatio: 16 / 9
        }}>
          {game.thumbnail ? (
            <img src={game.thumbnail} alt={game.title + " thumbnail"} />
          ) : (
            <div style={{ height: "100%", width: "100%", background: "lightgray" }}></div>
          )}
        </div>
        <div >{game.description}</div>
      </div>
    </div>
  )
}
