import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {

  const { data: session } = useSession()

  return (
    <nav className="border-b p-4 flex justify-between">
      <Link href='/' passHref>
        <div className="text-xl font-semibold cursor-pointer">
          Blog Title
        </div>
      </Link>
      <ul className="flex items-center">
        {
          session &&
          <li className="ml-2">
            <Link href='/dashboard'><a className="ml-1 rounded px-3 py-1 hover:bg-slate-900 hover:text-white">Dashboard</a></Link>
          </li>
        }
        <li className="ml-2">
          {
            !session ?
              <Link href='/login'><a className="ml-1 rounded px-3 py-1 hover:bg-slate-900 hover:text-white">Login</a></Link> :
              <Link href='#'><a className="ml-1 rounded px-3 py-1 hover:bg-slate-900 hover:text-white" onClick={() => signOut()}>Logout</a></Link>
          }
        </li>
      </ul>
    </nav>
  )
}
