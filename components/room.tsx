'use client'

import Link from "next/link"

type Room = {
  id: number,
  roomId: string,
  capacity: number,
  player1: string,
  player2: string,
  createdAt: Date,
  timeLimit: string 
}

const RoomCard = () => {

  const rooms = [1,2,3,4,6]

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {rooms.map((room) => (
        <div
          key={room}
          className="border border-black-20 h-[160px] rounded-lg"
        >
          <Link href={`/room/${room}`}>{room}</Link>
        </div>
      ))}
    </div>
  )
}

export default RoomCard