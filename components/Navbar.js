import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="sm:container mx-auto border-b p-4 flex justify-between">
      <Link href='/' passHref>
        <div className="text-xl font-semibold cursor-pointer">
          Blog Title
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="ml-2 rounded px-3 py-1 hover:bg-slate-900 hover:text-white">
          <Link href='/login'><a>Login</a></Link>
        </li>
      </ul>
    </nav>
  )
}
