'use client'

import { createNewRoom } from '@/utils/api'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { notifyRoomCreated } from '@/components/Notification'
import 'react-toastify/dist/ReactToastify.css'

const NewRoom = () => {
  const router = useRouter()

  const createRoom = async () => {
    try {
      const roomData = await createNewRoom()
      notifyRoomCreated(roomData.id);
      router.push(`/room/${roomData.id}`)
    } catch (error) {
      console.error('Error creating room:', error);
    }
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
