import { auth } from '@clerk/nextjs'
import { prisma } from './db'

export const getUserByClerkID = async () => {
  const { userId } = await auth()
  // console.log('userid: ', userId)

  const user = await prisma.player.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })

  return user
}
