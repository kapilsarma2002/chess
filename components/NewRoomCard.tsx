'use client'

import { createNewRoom } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { resolve } from 'path'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewRoom = (rooms) => {
  const router = useRouter()

  const createRoom = async () => {
    const response = await toast.promise(
      const data = await createNewRoom(),
      {
        pending: 'Room is being created',
        success: 'Room has been created',
        error: 'Cannot create a room',
      }
    )
    router.push(`/room/${data.id}`)
  }

  return (
    <div>
      <button
        className="bg-black text-white p-1.5 rounded-md mr-12"
        onClick={createRoom}
      >
        Create room
      </button>
      <ToastContainer />
    </div>
  )
}

export default NewRoom
