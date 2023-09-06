const RoomCard = ({ room }) => {

  const date = new Date(room.createdAt).toDateString()

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-slate-900 dark:shadow-slate-700">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{room.id}</div>
      <div className="px-4 py-4">won by : </div>
    </div>
  )
}

export default RoomCard