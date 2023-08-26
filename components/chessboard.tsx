'use client'

import Chessboard from "chessboardjsx"

const Board = () => {
  return (
    <div className="border border-black">
      <Chessboard position="start" />
    </div>
  )
}

export default Board