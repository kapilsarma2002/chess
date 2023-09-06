import NewRoom from '@/components/NewRoomCard'
import RoomCard from '@/components/Room'
import { prisma } from '@/utils/db'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const getRooms = async () => {
  const rooms = await prisma.room.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    }
  })

  return rooms
}

const RoomPage = async () => {

  const rooms = await getRooms()

  return (
    <div className="h-full w-full border border-black">
      <div className="flex flex-row justify-between items-center">
        <h3 className="m-12 ">Active rooms :</h3>
        <NewRoom />
      </div>
      <h3 className="m-12 ">Previous rooms :</h3>
      <div className="grid grid-flow-row grid-cols-4 gap-4 mx-12">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border border-black-20 h-[160px] rounded-lg bg-slate-100 dark:bg-slate-700 dark:border-slate-700"
          >
            <Link href={`/room/${room.id}`}>
              <RoomCard room={room} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoomPage
