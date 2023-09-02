'use client'
import { TemplateContext } from 'next/dist/shared/lib/app-router-context'
import { useRouter } from 'next/navigation'

const NewRoom = (rooms) => {

const router = useRouter()

  const createRoom = () => {
    const num = 11
    console.log(num)
    router.push(`/room/${num}`)
  }

  return (
    <div>
      <button
        className="bg-black text-white p-1.5 rounded-md mr-4"
        onClick={createRoom}
      >
        Add room
      </button>
    </div>
  )
}

export default NewRoom