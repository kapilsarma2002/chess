import RoomCard from '@/components/room'

const RoomPage = () => {

  const rooms = [1,2,3,4,5]

  return (
    <div>
      This page contains all the available rooms
      <div className="ml-4">
        <RoomCard />
      </div>
    </div>
  )
}

export default RoomPage
