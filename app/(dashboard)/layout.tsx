import { UserButton } from '@clerk/nextjs'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Image from 'next/image'
import { getUserByClerkID } from '@/utils/auth'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const HomeLayout = async ({ children }: any) => {
  const user = await getUserByClerkID()

  return (
    <div className="h-screen w-screen relative bg-white text-black dark:bg-slate-900 dark:text-white/80">
      {/* <aside className="absolute h-full w-[200px] pl-4 top-0 left-0 border-r border-black/10">
        <ul>
          {links.map((link) => (
            <li key={link.href} className="px-2 py-6 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside> */}
      <div className="h-full">
        <header className="h-[60px] border-b border-black/5 flex flex-row items-center justify-between dark:border-white/20">
          <div className="pl-6">Logo</div>
          <div>
            <NavBar />
          </div>
          <div className="h-full w-[100px] gap-4 px-6 flex items-center justify-end">
            <div className="text-xl">
              <Link href={`/profile/${user.userName}`}>{user.userName}</Link>
            </div>
            <div className="h-[30px] w-[30px]">
              <ThemeSwitcher />
            </div>
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default HomeLayout
