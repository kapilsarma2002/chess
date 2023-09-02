import NewRoom from '@/components/newroomcard'
import RoomCard from '@/components/room'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const RoomPage = () => {

  let rooms = [1, 2, 3, 4, 5] 

  return (
    <div className="h-full w-full border border-black">
      <div className='flex flex-row justify-between items-center'>
        <h3 className="m-12 ">Active rooms :</h3>
        <NewRoom rooms />
      </div>
      <div className=" ml-12">
        <RoomCard />
      </div>
    </div>
  )
}

export default RoomPage
