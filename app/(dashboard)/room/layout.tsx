import Chessboard from "@/components/Chessboard"

const RoomLayout = ({children}) => {
  return (
    <div>
      Chess Board : {children}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className=" border border-black">
          <Chessboard />
        </div>
      </div>
    </div>
  )
}

export default RoomLayout