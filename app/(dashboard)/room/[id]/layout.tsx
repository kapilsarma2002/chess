import Chessboard from "@/components/chessboard"

const RoomLayout = ({children}) => {
  return (
    <div className="h-full w-full">
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