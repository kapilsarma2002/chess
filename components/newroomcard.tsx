'use client'

import { useRouter } from 'next/navigation'
import { resolve } from 'path'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewRoom = (rooms) => {
  const router = useRouter()
  let idx = 1

  const createRoom = async () => {
    idx++
    const response = await toast.promise(
      // fetch(`https://jsonplaceholder.typicode.com/todos/${idx}`),
      new Promise(resolve => setTimeout(resolve, 3000)),
      {
        pending: 'Room is being created',
        success: 'Room has been created',
        error: 'Cannot create a room',
      }
    )
    console.log(response)
    router.push(`/room/${idx}`)
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
