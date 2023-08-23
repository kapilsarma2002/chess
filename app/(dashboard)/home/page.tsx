/*import HomeCard from '@/components/homeCard'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getStatus = async () => {
  const user = await getUserByClerkID()
  const status = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
    select: {
      last: true,
    },
  })
  return status
}*/

const HomePage = async () => {
  //const { last } = await getStatus()

  return <div className="bg-white text-black h-screen w-full p-12">
    Home page
    <br />
    <b>Your Rooms:</b>
  </div>
}

export default HomePage
