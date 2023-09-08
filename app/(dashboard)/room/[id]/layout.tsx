import Board from '@/components/ChessBoard'
import Timer from '@/components/Timer'

const RoomLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] border border-black">
      <div className="border border-black">
        <div>
          <Timer />
        </div>
        <Board />
        <div>
          <Timer />
        </div>
      </div>
    </div>
  )
}

export default RoomLayout
