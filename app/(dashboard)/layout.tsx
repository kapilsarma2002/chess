import Navbar from "@/components/navbar"

const HomeLayout = ({children}) => {
  return (
    <div className="bg-white text-black h-screen w-full">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout