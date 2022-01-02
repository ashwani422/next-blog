import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
      <Link href='/' passHref>
        <div className="sm:container mx-auto border-b p-4 text-xl font-semibold cursor-pointer">
          Blog Title
        </div>
      </Link>
    </nav>
  )
}
