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
        <li className="ml-2">
          {
            !session ?
              <Link href='/login'><a className="rounded px-3 py-1 hover:bg-slate-900 hover:text-white">Login</a></Link> :
              <Link href='#'><a className="rounded px-3 py-1 hover:bg-slate-900 hover:text-white" onClick={() => signOut()}>Logout</a></Link>
          }
        </li>
      </ul>
    </nav>
  )
}
