import Board from '@/components/ChessBoard'

const RoomLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] border border-black">
      <div className="border border-black">
        <Board />
      </div>
    </div>
  )
}

export default RoomLayout
