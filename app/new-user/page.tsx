import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { PrismaClient, Prisma } from '@prisma/client'
import UniqueErrorHandler from '@/components/errorhandler'

const createNewUser = async () => {
  const user = await currentUser()
  console.log('user: ', user)

  const match = await prisma.player.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  })

  if (!match) {
    try {
      await prisma.player.create({
        data: {
          clerkId: user.id,
          userName: user.username,
          email: user.emailAddresses[0].emailAddress,
        },
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          <UniqueErrorHandler props="here is a unique constraint violation, a new user cannot be created with this email" />
        }
      }
      throw e
    }
  }

  redirect('/home')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
