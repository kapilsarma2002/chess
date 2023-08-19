import React from 'react'

const Chessboard = () => {
  const rows = 8
  const cols = 8

  return (
    <div className="grid grid-cols-8 gap-0">
      {Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-16 h-16 ${
              (rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-black'
            }`}
          />
        ))
      )}
    </div>
  )
}

export default Chessboard
